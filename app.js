(function () {
  "use strict";

  var RECEITAS = window.RECEITAS;
  var PRODUTOS = window.PRODUTOS;
  var TIPOS = window.TIPOS;
  var FONTES = window.FONTES;
  var main = document.getElementById("conteudo");

  // ---------- armazenamento local (só neste aparelho) ----------
  function ler(chave, padrao) {
    try { var v = localStorage.getItem(chave); return v ? JSON.parse(v) : padrao; }
    catch (e) { return padrao; }
  }
  function gravar(chave, valor) {
    try { localStorage.setItem(chave, JSON.stringify(valor)); } catch (e) { /* sem armazenamento */ }
  }
  var favs = ler("pl-favs", []);
  var sel = ler("pl-sel", []);
  var checks = ler("pl-checks", {});
  var quero = ler("pl-quero", []);
  var termoQuero = "";
  var filtro = "todas";
  var termo = "";

  function salvarTudo() {
    gravar("pl-favs", favs);
    gravar("pl-sel", sel);
    gravar("pl-checks", checks);
    gravar("pl-quero", quero);
    atualizarContador();
  }

  function alternar(lista, id) {
    var i = lista.indexOf(id);
    if (i >= 0) { lista.splice(i, 1); return false; }
    lista.push(id); return true;
  }

  // ---------- utilidades ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function semAcento(s) { return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  function porId(id) { for (var i = 0; i < RECEITAS.length; i++) if (RECEITAS[i].id === id) return RECEITAS[i]; return null; }
  function cmp(a, b) { return a.localeCompare(b, "pt-BR"); }

  var toastEl = document.getElementById("toast"), toastT;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove("show"); }, 1800);
  }

  var ICON = {
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
    plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" d="M12 5v14M5 12h14"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M20 6 9 17l-5-5"/></svg>',
    share: '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6"/></svg>'
  };

  // ---------- ingredientes -> produtos ----------
  // Cada ingrediente é [texto, produto, opcional?]
  var ORDEM_CAT = ["Hortifrúti", "Proteínas", "Laticínios sem lactose", "Mercearia", "Temperos"];
  var BASICOS = ["Sal", "Pimenta-do-reino"]; // considerados sempre em casa no "Quero comer"
  function categoria(p) { return PRODUTOS[p] || "Mercearia"; }
  function ehOpcional(ing) { return !!ing[2] || /a gosto|opcional|para untar/.test(semAcento(ing[0])); }

  var NECESSARIOS = {}, OPCIONAIS = {}, TODOS = {};
  RECEITAS.forEach(function (r) {
    var req = {}, opc = {};
    r.ingredientes.forEach(function (ing) {
      var p = ing[1];
      if (!p) return;
      TODOS[p] = true;
      if (BASICOS.indexOf(p) >= 0) return;
      if (ehOpcional(ing)) opc[p] = true; else req[p] = true;
    });
    NECESSARIOS[r.id] = Object.keys(req);
    OPCIONAIS[r.id] = Object.keys(opc).filter(function (p) { return !req[p]; });
  });

  function agrupar(itens, nomeDe) {
    var porCat = {};
    itens.forEach(function (it) { var c = categoria(nomeDe(it)); (porCat[c] = porCat[c] || []).push(it); });
    return ORDEM_CAT.filter(function (c) { return porCat[c]; }).map(function (c) {
      return { cat: c, itens: porCat[c].sort(function (a, b) { return cmp(nomeDe(a), nomeDe(b)); }) };
    });
  }

  function montarLista() {
    var mapa = {};
    sel.forEach(function (id) {
      var r = porId(id);
      if (!r) return;
      r.ingredientes.forEach(function (ing) {
        var p = ing[1];
        if (!p) return;
        if (!mapa[p]) mapa[p] = { nome: p, usos: [] };
        mapa[p].usos.push({ texto: ing[0], receita: r.nome, opcional: ehOpcional(ing) });
      });
    });
    return agrupar(Object.keys(mapa).map(function (k) { return mapa[k]; }), function (it) { return it.nome; });
  }

  function listaComoTexto(grupos) {
    var linhas = ["Lista de compras - " + sel.map(function (id) { var r = porId(id); return r ? r.nome : ""; }).join(", "), ""];
    grupos.forEach(function (g) {
      linhas.push("*" + g.cat + "*");
      g.itens.forEach(function (it) {
        linhas.push("- " + it.nome + " (" + it.usos.map(function (u) { return u.texto; }).join("; ") + ")");
      });
      linhas.push("");
    });
    return linhas.join("\n");
  }

  // ---------- Quero comer ----------
  function receitasCombinadas() {
    return RECEITAS.map(function (r) {
      var tem = NECESSARIOS[r.id].concat(OPCIONAIS[r.id]);
      var combina = quero.filter(function (p) { return tem.indexOf(p) >= 0; });
      return { r: r, combina: combina, cobertura: combina.length / Math.max(1, NECESSARIOS[r.id].length) };
    }).filter(function (a) { return a.combina.length > 0; })
      .sort(function (a, b) {
        return b.combina.length - a.combina.length || b.cobertura - a.cobertura || cmp(a.r.nome, b.r.nome);
      });
  }

  // ---------- telas ----------
  function cartao(r) {
    var fav = favs.indexOf(r.id) >= 0, s = sel.indexOf(r.id) >= 0;
    return '<article class="cartao' + (s ? " selecionada" : "") + '">' +
      '<div class="cartao-topo"><h3><a href="#receita/' + r.id + '">' + esc(r.nome) + '</a></h3>' +
      '<button class="btn-fav" data-fav="' + r.id + '" aria-pressed="' + fav + '" aria-label="' + (fav ? "Remover dos favoritos" : "Favoritar") + ': ' + esc(r.nome) + '">' + ICON.heart + '</button></div>' +
      '<div class="meta"><span class="chip">' + TIPOS[r.tipo] + '</span><span class="chip">' + esc(r.tempo) + '</span><span class="chip">' + esc(r.rendimento) + '</span></div>' +
      '<div class="acoes"><a class="btn flex" href="#receita/' + r.id + '">Ver receita</a>' +
      '<button class="btn flex' + (s ? " primario" : "") + '" data-sel="' + r.id + '" aria-pressed="' + s + '" aria-label="' + (s ? "Tirar da lista de compras" : "Adicionar à lista de compras") + ': ' + esc(r.nome) + '">' +
      (s ? ICON.check + "Na lista" : ICON.plus + "Adicionar") + '</button></div></article>';
  }

  function filtrar(lista) {
    var q = semAcento(termo.trim());
    return lista.filter(function (r) {
      if (filtro === "selecionadas" && sel.indexOf(r.id) < 0) return false;
      if (filtro === "favoritas" && favs.indexOf(r.id) < 0) return false;
      if (TIPOS[filtro] && r.tipo !== filtro) return false;
      if (!q) return true;
      return semAcento(r.nome + " " + r.ingredientes.map(function (i) { return i[0]; }).join(" ")).indexOf(q) >= 0;
    });
  }

  function gradeHtml() {
    var l = filtrar(RECEITAS);
    if (l.length) return l.map(cartao).join("");
    if (filtro === "favoritas" && !termo) return '<p class="vazio">Você ainda não favoritou nenhuma receita. Toque no coração de uma receita para guardá-la aqui.</p>';
    return '<p class="vazio">Nenhuma receita encontrada.</p>';
  }

  function telaReceitas() {
    var botoes = [["todas", "Todas"], ["cafe", "Café da manhã"], ["principal", "Almoço e jantar"], ["lanche", "Lanches e doces"],
      ["favoritas", "Favoritas (" + favs.length + ")"], ["selecionadas", "Na lista (" + sel.length + ")"]];
    return '<h2 class="titulo-secao">Receitas low FODMAP</h2>' +
      '<p class="descricao">' + RECEITAS.length + ' receitas sem alho, sem cebola e sem lactose, com porções baixas em FODMAP. Toque em <b>Adicionar</b> nas que você vai fazer e veja o que comprar na aba Compras.</p>' +
      '<label for="busca" class="sr">Buscar receita ou ingrediente</label>' +
      '<input id="busca" class="busca" type="search" placeholder="Buscar receita ou ingrediente (ex.: frango)" value="' + esc(termo) + '">' +
      '<div class="filtros" role="group" aria-label="Filtrar receitas">' +
      botoes.map(function (b) { return '<button data-filtro="' + b[0] + '" aria-pressed="' + (filtro === b[0]) + '">' + b[1] + '</button>'; }).join("") +
      '</div><div class="grade" id="grade">' + gradeHtml() + '</div>' +
      '<p class="rodape">Receitas adaptadas de fontes sobre a dieta low FODMAP. Não substituem a orientação da sua nutricionista.</p>';
  }

  function telaReceita(id) {
    var r = porId(id);
    if (!r) return '<div class="vazio">Receita não encontrada. <a href="#receitas">Voltar</a></div>';
    var fav = favs.indexOf(r.id) >= 0, s = sel.indexOf(r.id) >= 0, f = FONTES[r.fonte];
    return '<a class="btn voltar" href="#receitas">' + ICON.back + 'Receitas</a>' +
      '<article class="detalhe"><h2>' + esc(r.nome) + '</h2>' +
      '<div class="meta"><span class="chip">' + TIPOS[r.tipo] + '</span><span class="chip">' + esc(r.tempo) + '</span><span class="chip">Rende ' + esc(r.rendimento) + '</span></div>' +
      '<div class="acoes"><button class="btn' + (fav ? " primario" : "") + '" data-fav="' + r.id + '" aria-pressed="' + fav + '">' + ICON.heart + (fav ? "Favorita" : "Favoritar") + '</button>' +
      '<button class="btn' + (s ? " primario" : "") + '" data-sel="' + r.id + '" aria-pressed="' + s + '">' + (s ? ICON.check + "Na lista de compras" : ICON.plus + "Adicionar à lista de compras") + '</button></div>' +
      '<h3>Ingredientes</h3><ul>' + r.ingredientes.map(function (i) { return '<li>' + esc(i[0]) + (i[2] ? ' <span class="detalhes" style="display:inline">(opcional)</span>' : '') + '</li>'; }).join("") + '</ul>' +
      '<h3>Modo de preparo</h3><ol>' + r.preparo.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ol>' +
      (r.dica ? '<div class="obs"><strong>Dica</strong>' + esc(r.dica) + '</div>' : '') +
      (f ? '<p class="fonte">Inspirada em: <a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.nome) + '</a></p>' : '') +
      '</article>';
  }

  function telaCompras() {
    var h = '<h2 class="titulo-secao">Lista de compras</h2>';
    if (!sel.length) {
      return h + '<div class="vazio">Escolha as receitas que você quer fazer e a lista com tudo o que precisa comprar aparece aqui.<br><br>' +
        '<a class="btn primario" href="#receitas">Escolher receitas</a></div>';
    }
    var grupos = montarLista();
    h += '<p class="descricao">Ingredientes das <b>' + sel.length + '</b> receita(s) escolhida(s), juntos por produto. Marque o que já pegou.</p>' +
      '<div class="aviso">No mercado, leia o rótulo: evite produtos com alho, cebola, trigo, mel, xarope de milho (frutose) e lactose.</div>' +
      '<div class="selecionadas">' + sel.map(function (id) {
        var r = porId(id);
        return r ? '<span class="chip">' + esc(r.nome) + '<button data-sel="' + r.id + '" aria-label="Tirar ' + esc(r.nome) + ' da lista">×</button></span>' : '';
      }).join("") + '</div>' +
      '<div class="linha-acoes"><button class="btn primario" id="compartilhar">' + ICON.share + 'Enviar / copiar lista</button>' +
      '<button class="btn" id="desmarcar">Desmarcar itens</button>' +
      '<button class="btn" id="limpar">Limpar receitas</button></div>';
    grupos.forEach(function (g) {
      h += '<h3 class="subtitulo">' + g.cat + '</h3><ul class="lista">';
      g.itens.forEach(function (it) {
        var k = it.nome;
        h += '<li><label><input type="checkbox" data-check="' + esc(k) + '"' + (checks[k] ? " checked" : "") + '>' +
          '<span><span class="nome">' + esc(it.nome) + '</span>' +
          it.usos.map(function (u) { return '<span class="detalhes">' + esc(u.texto) + (u.opcional ? " (opcional)" : "") + ' · <i>' + esc(u.receita) + '</i></span>'; }).join("") +
          '</span></label></li>';
      });
      h += '</ul>';
    });
    return h;
  }

  function resultadoQuero() {
    if (!quero.length) {
      return '<div class="vazio">Escolha abaixo os ingredientes que você está com vontade de comer e eu mostro as receitas que mais combinam.</div>';
    }
    var lista = receitasCombinadas();
    if (!lista.length) return '<div class="vazio">Nenhuma receita leva esses ingredientes. Tente escolher outros.</div>';
    var n = quero.length;
    var h = '<div class="placar"><b>' + lista.length + '</b> receita(s) combinam com o que você quer comer</div><ul class="lista resultado">';
    lista.forEach(function (a) {
      var naLista = sel.indexOf(a.r.id) >= 0, todos = a.combina.length === n;
      h += '<li><div class="linha-receita"><span class="' + (todos ? "ok" : "falta") + '" aria-hidden="true">' + (todos ? ICON.check : a.combina.length) + '</span>' +
        '<span class="flex1"><a class="nome" href="#receita/' + a.r.id + '">' + esc(a.r.nome) + '</a>' +
        '<span class="detalhes">' + (n > 1 ? (todos ? "Leva tudo o que você escolheu: " : "Leva " + a.combina.length + " de " + n + ": ") : "Leva ") +
        a.combina.map(esc).join(", ") + '</span></span>' +
        '<button class="btn mini' + (naLista ? " primario" : "") + '" data-sel="' + a.r.id + '" aria-pressed="' + naLista + '" aria-label="' + (naLista ? "Tirar da lista de compras" : "Adicionar à lista de compras") + ': ' + esc(a.r.nome) + '">' +
        (naLista ? ICON.check + "Na lista" : ICON.plus + "Comprar") + '</button></div></li>';
    });
    return h + '</ul>';
  }

  function chipsQuero() {
    var q = semAcento(termoQuero.trim());
    var produtos = Object.keys(TODOS).filter(function (p) { return BASICOS.indexOf(p) < 0 && (!q || semAcento(p).indexOf(q) >= 0); });
    var grupos = agrupar(produtos, function (p) { return p; });
    return grupos.map(function (g) {
      return '<h3 class="subtitulo">' + g.cat + '</h3><div class="chips">' + g.itens.map(function (p) {
        var tem = quero.indexOf(p) >= 0;
        return '<button class="chip-toggle" data-quero="' + esc(p) + '" aria-pressed="' + tem + '">' + (tem ? ICON.check : "") + esc(p) + '</button>';
      }).join("") + '</div>';
    }).join("") || '<p class="vazio">Nenhum ingrediente encontrado.</p>';
  }

  function telaQuero() {
    return '<h2 class="titulo-secao">O que quero comer</h2>' +
      '<p class="descricao">Escolha os ingredientes que você está com vontade de comer. As receitas que levam mais deles aparecem primeiro.</p>' +
      '<div id="resultado-quero">' + resultadoQuero() + '</div>' +
      '<div class="cabecalho-despensa"><h3 class="subtitulo">Ingredientes escolhidos (' + quero.length + ')</h3>' +
      (quero.length ? '<button class="btn mini" id="limpar-quero">Desmarcar todos</button>' : '') + '</div>' +
      '<label for="busca-quero" class="sr">Buscar ingrediente</label>' +
      '<input id="busca-quero" class="busca" type="search" placeholder="Buscar ingrediente (ex.: banana)" value="' + esc(termoQuero) + '">' +
      '<div id="chips-quero">' + chipsQuero() + '</div>';
  }

  // ---------- roteamento ----------
  function render() {
    var hash = location.hash.replace(/^#/, "") || "receitas";
    var partes = hash.split("/"), aba = partes[0], html;
    if (aba === "receita") { html = telaReceita(partes[1]); aba = "receitas"; }
    else if (aba === "compras") html = telaCompras();
    else if (aba === "quero") html = telaQuero();
    else { html = telaReceitas(); aba = "receitas"; }
    main.innerHTML = html;
    document.querySelectorAll(".abas a").forEach(function (a) {
      if (a.dataset.aba === aba) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    atualizarContador();
  }

  function atualizarContador() {
    var c = document.getElementById("contador");
    c.hidden = sel.length === 0;
    c.textContent = sel.length;
  }

  function rerenderMantendoScroll() {
    var y = window.scrollY;
    var foco = document.activeElement && document.activeElement.id;
    render();
    window.scrollTo(0, y);
    if (foco) { var el = document.getElementById(foco); if (el) el.focus(); }
  }

  // ---------- eventos ----------
  main.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.fav) {
      var ok = alternar(favs, b.dataset.fav); salvarTudo();
      toast(ok ? "Adicionada às favoritas" : "Removida das favoritas");
      rerenderMantendoScroll();
    } else if (b.dataset.sel) {
      var add = alternar(sel, b.dataset.sel); salvarTudo();
      toast(add ? "Adicionada à lista de compras" : "Tirada da lista de compras");
      rerenderMantendoScroll();
    } else if (b.dataset.quero) {
      alternar(quero, b.dataset.quero); salvarTudo(); rerenderMantendoScroll();
    } else if (b.id === "limpar-quero") {
      quero = []; salvarTudo(); rerenderMantendoScroll();
    } else if (b.dataset.filtro) {
      filtro = b.dataset.filtro; rerenderMantendoScroll();
    } else if (b.id === "limpar") {
      sel = []; checks = {}; salvarTudo(); render(); toast("Lista limpa");
    } else if (b.id === "desmarcar") {
      checks = {}; salvarTudo(); rerenderMantendoScroll();
    } else if (b.id === "compartilhar") {
      var texto = listaComoTexto(montarLista());
      if (navigator.share) {
        navigator.share({ title: "Lista de compras", text: texto }).catch(function () {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(texto).then(function () { toast("Lista copiada"); }, function () { toast("Não foi possível copiar"); });
      }
    }
  });

  main.addEventListener("change", function (e) {
    var t = e.target;
    if (t.dataset.check) { if (t.checked) checks[t.dataset.check] = true; else delete checks[t.dataset.check]; salvarTudo(); }
  });

  main.addEventListener("input", function (e) {
    if (e.target.id === "busca") {
      termo = e.target.value;
      document.getElementById("grade").innerHTML = gradeHtml();
    } else if (e.target.id === "busca-quero") {
      termoQuero = e.target.value;
      document.getElementById("chips-quero").innerHTML = chipsQuero();
    }
  });

  window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });
  render();
})();
