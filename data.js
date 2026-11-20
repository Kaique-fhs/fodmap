// Receitas low FODMAP. Cada ingrediente é [texto, produto do mercado, opcional?].
// produto null = não entra na lista de compras (ex.: água).
// As porções seguem as quantidades baixas em FODMAP da Monash University; confira sempre com a sua nutricionista.

window.FONTES = {
  monash: { nome: "Monash University – receitas low FODMAP", url: "https://www.monashfodmap.com/recipe/" },
  michigan: { nome: "Michigan Medicine – receitas low FODMAP", url: "https://www.michiganmedicine.org/health-lab/5-easy-low-fodmap-diet-recipes-every-meal" },
  tuasaude: { nome: "Tua Saúde – cardápio FODMAP", url: "https://www.tuasaude.com/dieta-fodmap-para-sindrome-do-intestino-irritavel/" },
  vitat: { nome: "Vitat – dieta FODMAP e cardápio", url: "https://vitat.com.br/dieta-fodmap/" },
  nutritotal: { nome: "Nutritotal – receitas low FODMAP", url: "https://nutritotal.com.br/publico-geral/material/receita-low-fodmap-rolinho-de-camarao-oriental/" },
  lista: { nome: "Monash University – lista de compras low FODMAP", url: "https://monashfodmap.com/blog/low-fodmap-shopping-list/" }
};

// Categoria de cada produto na lista de compras
window.PRODUTOS = {
  "Banana (firme, pouco madura)": "Hortifrúti", "Morango": "Hortifrúti", "Kiwi": "Hortifrúti", "Limão": "Hortifrúti",
  "Laranja": "Hortifrúti", "Mirtilo (blueberry)": "Hortifrúti", "Abacaxi": "Hortifrúti", "Mamão papaia": "Hortifrúti",
  "Cenoura": "Hortifrúti", "Abobrinha": "Hortifrúti", "Batata": "Hortifrúti", "Batata-doce": "Hortifrúti",
  "Abóbora cabotiá": "Hortifrúti", "Tomate": "Hortifrúti", "Espinafre": "Hortifrúti", "Pepino": "Hortifrúti",
  "Pimentão vermelho": "Hortifrúti", "Alface": "Hortifrúti", "Cebolinha (só a parte verde)": "Hortifrúti",
  "Gengibre": "Hortifrúti", "Manjericão": "Hortifrúti", "Salsinha": "Hortifrúti", "Coentro": "Hortifrúti",
  "Broto de feijão": "Hortifrúti", "Berinjela": "Hortifrúti", "Chuchu": "Hortifrúti",
  "Ovos": "Proteínas", "Peito de frango": "Proteínas", "Carne moída": "Proteínas", "Carne para panela (acém ou músculo)": "Proteínas",
  "Salmão": "Proteínas", "Filé de peixe branco (tilápia ou pescada)": "Proteínas",
  "Leite sem lactose": "Laticínios sem lactose", "Iogurte natural sem lactose": "Laticínios sem lactose",
  "Queijo muçarela": "Laticínios sem lactose", "Queijo parmesão": "Laticínios sem lactose",
  "Creme de leite sem lactose": "Laticínios sem lactose", "Manteiga": "Laticínios sem lactose",
  "Aveia em flocos": "Mercearia", "Arroz": "Mercearia", "Macarrão de arroz": "Mercearia", "Quinoa": "Mercearia",
  "Fubá (polenta)": "Mercearia", "Goma de tapioca": "Mercearia", "Polvilho azedo": "Mercearia", "Farinha de arroz": "Mercearia",
  "Tortilha de milho": "Mercearia", "Pasta de amendoim (sem açúcar)": "Mercearia", "Amendoim torrado sem sal": "Mercearia",
  "Semente de chia": "Mercearia", "Gergelim": "Mercearia", "Cacau em pó": "Mercearia", "Chocolate 70%": "Mercearia",
  "Açúcar mascavo": "Mercearia", "Fermento químico em pó": "Mercearia", "Molho shoyu": "Mercearia",
  "Milho para pipoca": "Mercearia", "Tomate pelado em lata": "Mercearia", "Azeite de oliva": "Mercearia",
  "Azeite aromatizado com alho": "Mercearia", "Óleo vegetal": "Mercearia", "Essência de baunilha": "Mercearia",
  "Sal": "Temperos", "Pimenta-do-reino": "Temperos", "Canela em pó": "Temperos", "Cúrcuma (açafrão-da-terra)": "Temperos",
  "Páprica": "Temperos", "Orégano": "Temperos", "Cominho": "Temperos", "Louro": "Temperos"
};

window.TIPOS = { cafe: "Café da manhã", principal: "Almoço e jantar", lanche: "Lanches e doces" };

window.RECEITAS = [
  // ---------- Café da manhã ----------
  {
    id: "overnight-oats-amendoim", nome: "Overnight oats de pasta de amendoim e banana", tipo: "cafe", tempo: "5 min + geladeira", rendimento: "1 porção", fonte: "michigan",
    ingredientes: [["1/2 xícara de aveia em flocos (45g)", "Aveia em flocos"], ["1/2 xícara de leite sem lactose", "Leite sem lactose"],
      ["1 colher de sopa de semente de chia", "Semente de chia"], ["2 colheres de sopa de pasta de amendoim", "Pasta de amendoim (sem açúcar)"],
      ["1/2 banana firme em rodelas", "Banana (firme, pouco madura)"], ["Canela em pó a gosto", "Canela em pó", true]],
    preparo: ["Num pote com tampa, misture a aveia, o leite e a chia.", "Junte a pasta de amendoim e mexa bem.", "Feche e deixe na geladeira de um dia para o outro (mínimo 4 horas).", "Na hora de comer, cubra com a banana e a canela."],
    dica: "Banana bem madura tem mais FODMAP. Prefira a banana ainda firme, sem pintinhas."
  },
  {
    id: "mingau-aveia-morango", nome: "Mingau de aveia com morango", tipo: "cafe", tempo: "10 min", rendimento: "1 porção", fonte: "monash",
    ingredientes: [["1/2 xícara de aveia em flocos (45g)", "Aveia em flocos"], ["1 xícara de leite sem lactose", "Leite sem lactose"],
      ["5 morangos picados", "Morango"], ["1 colher de chá de açúcar mascavo", "Açúcar mascavo", true], ["Canela em pó a gosto", "Canela em pó", true]],
    preparo: ["Leve a aveia e o leite ao fogo baixo, mexendo sempre.", "Cozinhe por 4 a 5 minutos, até engrossar.", "Desligue, adoce com o açúcar mascavo se quiser e cubra com os morangos e a canela."]
  },
  {
    id: "panqueca-banana-aveia", nome: "Panqueca de banana e aveia", tipo: "cafe", tempo: "15 min", rendimento: "1 porção (3 panquecas)", fonte: "monash",
    ingredientes: [["1 banana firme", "Banana (firme, pouco madura)"], ["2 ovos", "Ovos"], ["4 colheres de sopa de aveia em flocos", "Aveia em flocos"],
      ["1 colher de chá de canela em pó", "Canela em pó"], ["Óleo para untar", "Óleo vegetal", true], ["Morangos ou mirtilos para servir", "Morango", true]],
    preparo: ["Amasse a banana com um garfo.", "Junte os ovos, a aveia e a canela e misture até ficar homogêneo.", "Unte uma frigideira antiaderente e coloque porções pequenas da massa em fogo baixo.", "Quando aparecerem bolhinhas, vire e doure o outro lado.", "Sirva com as frutas."]
  },
  {
    id: "omelete-espinafre", nome: "Omelete de espinafre e queijo", tipo: "cafe", tempo: "10 min", rendimento: "1 porção", fonte: "tuasaude",
    ingredientes: [["2 ovos", "Ovos"], ["1 xícara de folhas de espinafre", "Espinafre"], ["2 fatias de queijo muçarela picadas", "Queijo muçarela"],
      ["1 colher de sopa de cebolinha (só a parte verde)", "Cebolinha (só a parte verde)"], ["1 colher de chá de azeite aromatizado com alho", "Azeite aromatizado com alho"],
      ["Sal e pimenta-do-reino a gosto", "Sal"]],
    preparo: ["Aqueça o azeite e murche o espinafre por 1 minuto.", "Bata os ovos com sal, pimenta e a cebolinha.", "Despeje sobre o espinafre, espalhe o queijo e cozinhe em fogo baixo com a panela tampada.", "Dobre ao meio e sirva."],
    dica: "O azeite aromatizado com alho dá o sabor do alho sem o FODMAP: os frutanos do alho não passam para o óleo. Só não pode ter pedaços de alho dentro."
  },
  {
    id: "tapioca-ovo-queijo", nome: "Tapioca com ovo e queijo", tipo: "cafe", tempo: "10 min", rendimento: "1 porção", fonte: "vitat",
    ingredientes: [["3 colheres de sopa de goma de tapioca", "Goma de tapioca"], ["1 ovo", "Ovos"], ["1 fatia de queijo muçarela", "Queijo muçarela"],
      ["Tomate em rodelas", "Tomate", true], ["Orégano a gosto", "Orégano", true], ["Sal a gosto", "Sal"]],
    preparo: ["Mexa o ovo numa frigideira com uma pitada de sal e reserve.", "Espalhe a goma peneirada numa frigideira antiaderente fria e leve ao fogo médio até a massa grudar.", "Vire, recheie com o ovo, o queijo, o tomate e o orégano.", "Dobre e deixe o queijo derreter."]
  },
  {
    id: "crepioca", nome: "Crepioca", tipo: "cafe", tempo: "10 min", rendimento: "1 porção", fonte: "vitat",
    ingredientes: [["1 ovo", "Ovos"], ["2 colheres de sopa de goma de tapioca", "Goma de tapioca"], ["1 colher de sopa de leite sem lactose", "Leite sem lactose"],
      ["Sal a gosto", "Sal"], ["Recheio: queijo muçarela ou frango desfiado", "Queijo muçarela", true]],
    preparo: ["Bata o ovo com a tapioca, o leite e o sal até ficar liso.", "Despeje numa frigideira antiaderente untada em fogo médio.", "Vire quando soltar do fundo, recheie e dobre."]
  },
  {
    id: "vitamina-banana-aveia", nome: "Vitamina de banana com aveia", tipo: "cafe", tempo: "5 min", rendimento: "1 copo", fonte: "tuasaude",
    ingredientes: [["1 banana firme", "Banana (firme, pouco madura)"], ["1 copo (200ml) de leite sem lactose", "Leite sem lactose"],
      ["2 colheres de sopa de aveia em flocos", "Aveia em flocos"], ["1 colher de chá de pasta de amendoim", "Pasta de amendoim (sem açúcar)", true], ["Canela em pó a gosto", "Canela em pó", true]],
    preparo: ["Bata tudo no liquidificador até ficar cremoso.", "Sirva gelado."]
  },
  {
    id: "iogurte-frutas", nome: "Iogurte com kiwi, morango e sementes", tipo: "cafe", tempo: "5 min", rendimento: "1 porção", fonte: "monash",
    ingredientes: [["1 pote de iogurte natural sem lactose (170g)", "Iogurte natural sem lactose"], ["1 kiwi picado", "Kiwi"], ["4 morangos picados", "Morango"],
      ["1 colher de sopa de semente de chia", "Semente de chia"], ["1 colher de sopa de amendoim picado", "Amendoim torrado sem sal", true]],
    preparo: ["Coloque o iogurte numa tigela.", "Cubra com as frutas, a chia e o amendoim."]
  },
  {
    id: "pao-de-queijo", nome: "Pão de queijo caseiro", tipo: "cafe", tempo: "40 min", rendimento: "20 unidades", fonte: "monash",
    ingredientes: [["2 xícaras de polvilho azedo", "Polvilho azedo"], ["1/2 xícara de leite sem lactose", "Leite sem lactose"], ["1/2 xícara de água", null],
      ["1/3 xícara de óleo", "Óleo vegetal"], ["1 colher de chá de sal", "Sal"], ["2 ovos", "Ovos"], ["1 xícara de queijo parmesão ralado", "Queijo parmesão"]],
    preparo: ["Ferva o leite, a água, o óleo e o sal.", "Despeje sobre o polvilho e misture até escaldar tudo. Deixe amornar.", "Junte os ovos um a um e depois o queijo, sovando até a massa desgrudar das mãos.", "Faça bolinhas, coloque na assadeira e asse a 200 °C por 25 a 30 minutos."],
    dica: "Dá para congelar as bolinhas cruas e assar direto do congelador."
  },
  {
    id: "shakshuka", nome: "Shakshuka (ovos no molho de tomate)", tipo: "cafe", tempo: "25 min", rendimento: "2 porções", fonte: "monash",
    ingredientes: [["1 colher de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"], ["1/2 pimentão vermelho picado", "Pimentão vermelho"],
      ["1 lata de tomate pelado", "Tomate pelado em lata"], ["1 colher de chá de cominho", "Cominho"], ["1 colher de chá de páprica", "Páprica"],
      ["4 ovos", "Ovos"], ["Cebolinha (só a parte verde) e coentro para finalizar", "Cebolinha (só a parte verde)"], ["Sal a gosto", "Sal"]],
    preparo: ["Refogue o pimentão no azeite por 5 minutos.", "Junte o tomate amassado, o cominho, a páprica e o sal e cozinhe por 10 minutos.", "Abra 4 covas no molho e quebre um ovo em cada.", "Tampe e cozinhe em fogo baixo até a clara firmar.", "Finalize com cebolinha e coentro."]
  },

  // ---------- Almoço e jantar ----------
  {
    id: "frango-arroz-legumes", nome: "Frango grelhado com arroz e legumes", tipo: "principal", tempo: "30 min", rendimento: "2 porções", fonte: "tuasaude",
    ingredientes: [["2 filés de peito de frango", "Peito de frango"], ["1 xícara de arroz", "Arroz"], ["1 cenoura em rodelas", "Cenoura"], ["1/2 abobrinha em cubos", "Abobrinha"],
      ["1 colher de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"], ["Suco de 1/2 limão", "Limão"], ["Orégano, sal e pimenta a gosto", "Orégano"]],
    preparo: ["Tempere o frango com limão, sal, pimenta e orégano.", "Cozinhe o arroz como de costume, só com sal e um fio de azeite.", "Grelhe o frango numa frigideira quente com metade do azeite, 5 minutos de cada lado.", "Salteie a cenoura e a abobrinha no restante do azeite até ficarem macias."]
  },
  {
    id: "salmao-batata-limao", nome: "Salmão assado com batata e limão", tipo: "principal", tempo: "40 min", rendimento: "2 porções", fonte: "monash",
    ingredientes: [["2 postas de salmão", "Salmão"], ["3 batatas médias em cubos", "Batata"], ["1 limão (suco e raspas)", "Limão"],
      ["2 colheres de sopa de azeite de oliva", "Azeite de oliva"], ["Salsinha picada", "Salsinha"], ["Sal e pimenta-do-reino a gosto", "Sal"]],
    preparo: ["Misture a batata com metade do azeite e sal e asse a 200 °C por 20 minutos.", "Tempere o salmão com limão, raspas, sal e pimenta.", "Coloque o salmão na assadeira junto com as batatas e asse por mais 12 a 15 minutos.", "Finalize com salsinha e o restante do azeite."]
  },
  {
    id: "peixe-macarrao-arroz", nome: "Peixe grelhado com macarrão de arroz ao sugo", tipo: "principal", tempo: "30 min", rendimento: "2 porções", fonte: "tuasaude",
    ingredientes: [["2 filés de peixe branco", "Filé de peixe branco (tilápia ou pescada)"], ["150g de macarrão de arroz", "Macarrão de arroz"],
      ["1 lata de tomate pelado", "Tomate pelado em lata"], ["1 colher de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"],
      ["Folhas de manjericão", "Manjericão"], ["Suco de 1/2 limão", "Limão"], ["Sal a gosto", "Sal"]],
    preparo: ["Faça o molho: aqueça o azeite, junte o tomate amassado e sal e cozinhe por 15 minutos. Finalize com manjericão.", "Cozinhe o macarrão de arroz conforme a embalagem.", "Tempere o peixe com limão e sal e grelhe 3 a 4 minutos de cada lado.", "Sirva o macarrão com o molho e o peixe por cima."]
  },
  {
    id: "molho-tomate", nome: "Molho de tomate caseiro sem alho e cebola", tipo: "principal", tempo: "30 min", rendimento: "4 porções", fonte: "monash",
    ingredientes: [["6 tomates maduros (ou 2 latas de tomate pelado)", "Tomate"], ["2 colheres de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"],
      ["1 cenoura ralada fina", "Cenoura"], ["1 folha de louro", "Louro"], ["Manjericão a gosto", "Manjericão"], ["1 pitada de açúcar mascavo", "Açúcar mascavo", true], ["Sal a gosto", "Sal"]],
    preparo: ["Pique os tomates sem pele e sem sementes.", "Aqueça o azeite e refogue a cenoura por 3 minutos.", "Junte o tomate, o louro, o sal e o açúcar e cozinhe em fogo baixo por 20 minutos.", "Tire o louro, junte o manjericão. Bata se quiser liso."],
    dica: "Os molhos prontos quase sempre levam alho e cebola. Faça uma panela grande e congele em porções."
  },
  {
    id: "escondidinho-carne", nome: "Escondidinho de carne moída", tipo: "principal", tempo: "45 min", rendimento: "4 porções", fonte: "vitat",
    ingredientes: [["500g de carne moída", "Carne moída"], ["5 batatas médias", "Batata"], ["1/2 xícara de leite sem lactose", "Leite sem lactose"], ["1 colher de sopa de manteiga", "Manteiga"],
      ["2 tomates picados", "Tomate"], ["2 colheres de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"], ["Cebolinha (só a parte verde)", "Cebolinha (só a parte verde)"],
      ["1/2 xícara de queijo muçarela ralado", "Queijo muçarela"], ["Sal, páprica e pimenta a gosto", "Páprica"]],
    preparo: ["Cozinhe as batatas e amasse com o leite, a manteiga e sal até virar purê.", "Doure a carne no azeite, tempere com sal, páprica e pimenta e junte o tomate. Cozinhe por 10 minutos e finalize com cebolinha.", "Numa travessa, coloque a carne, cubra com o purê e o queijo.", "Leve ao forno a 200 °C por 15 minutos para gratinar."]
  },
  {
    id: "frango-xadrez", nome: "Frango xadrez", tipo: "principal", tempo: "30 min", rendimento: "2 porções", fonte: "nutritotal",
    ingredientes: [["2 filés de peito de frango em cubos", "Peito de frango"], ["1/2 pimentão vermelho em cubos", "Pimentão vermelho"], ["1 cenoura em cubos", "Cenoura"],
      ["2 colheres de sopa de molho shoyu", "Molho shoyu"], ["1 colher de chá de gengibre ralado", "Gengibre"], ["1 colher de sopa de amendoim torrado", "Amendoim torrado sem sal"],
      ["1 colher de sopa de óleo", "Óleo vegetal"], ["Cebolinha (só a parte verde)", "Cebolinha (só a parte verde)"], ["1 xícara de arroz para acompanhar", "Arroz"]],
    preparo: ["Doure o frango no óleo bem quente.", "Junte a cenoura e o pimentão e salteie por 4 minutos.", "Acrescente o gengibre, o shoyu e 3 colheres de sopa de água e cozinhe por mais 2 minutos.", "Finalize com amendoim e cebolinha e sirva com arroz."]
  },
  {
    id: "galinhada", nome: "Galinhada com cúrcuma", tipo: "principal", tempo: "40 min", rendimento: "4 porções", fonte: "vitat",
    ingredientes: [["500g de peito de frango em cubos", "Peito de frango"], ["2 xícaras de arroz", "Arroz"], ["2 colheres de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"],
      ["1 colher de chá de cúrcuma", "Cúrcuma (açafrão-da-terra)"], ["1 tomate picado", "Tomate"], ["1 cenoura em cubinhos", "Cenoura"], ["4 xícaras de água quente", null],
      ["Cebolinha (só a parte verde) e salsinha", "Salsinha"], ["Sal a gosto", "Sal"]],
    preparo: ["Doure o frango temperado com sal no azeite.", "Junte o tomate, a cenoura e a cúrcuma e refogue por 2 minutos.", "Acrescente o arroz, mexa e cubra com a água quente.", "Cozinhe com a panela semitampada até secar, uns 20 minutos.", "Finalize com cebolinha e salsinha."]
  },
  {
    id: "pad-thai", nome: "Pad thai de frango", tipo: "principal", tempo: "30 min", rendimento: "2 porções", fonte: "monash",
    ingredientes: [["150g de macarrão de arroz", "Macarrão de arroz"], ["1 filé de peito de frango em tiras", "Peito de frango"], ["2 ovos", "Ovos"],
      ["1 xícara de broto de feijão", "Broto de feijão"], ["1 cenoura em tiras", "Cenoura"], ["2 colheres de sopa de molho shoyu", "Molho shoyu"],
      ["1 colher de sopa de açúcar mascavo", "Açúcar mascavo"], ["Suco de 1 limão", "Limão"], ["2 colheres de sopa de amendoim picado", "Amendoim torrado sem sal"],
      ["1 colher de sopa de óleo", "Óleo vegetal"], ["Cebolinha (só a parte verde) e coentro", "Coentro"]],
    preparo: ["Hidrate o macarrão em água quente conforme a embalagem e escorra.", "Misture o shoyu, o açúcar e o limão para o molho.", "Doure o frango no óleo, empurre para o lado e mexa os ovos na mesma frigideira.", "Junte o macarrão, a cenoura, o broto e o molho e salteie por 2 minutos.", "Sirva com amendoim, cebolinha e coentro."]
  },
  {
    id: "poke-salmao", nome: "Poke de salmão", tipo: "principal", tempo: "25 min", rendimento: "2 porções", fonte: "monash",
    ingredientes: [["1 xícara de arroz (cozido e frio)", "Arroz"], ["250g de salmão fresco em cubos", "Salmão"], ["1 pepino em cubos", "Pepino"], ["1 cenoura ralada", "Cenoura"],
      ["1 kiwi ou 1 fatia de abacaxi em cubos", "Abacaxi", true], ["2 colheres de sopa de molho shoyu", "Molho shoyu"], ["1 colher de chá de gengibre ralado", "Gengibre"],
      ["1 colher de sopa de gergelim", "Gergelim"], ["Cebolinha (só a parte verde)", "Cebolinha (só a parte verde)"]],
    preparo: ["Misture o shoyu com o gengibre e tempere o salmão. Deixe 10 minutos na geladeira.", "Monte as tigelas com arroz no fundo.", "Distribua o salmão, o pepino, a cenoura e a fruta.", "Finalize com gergelim e cebolinha."],
    dica: "Use salmão próprio para consumo cru, ou grelhe rapidamente se preferir."
  },
  {
    id: "polenta-ragu", nome: "Polenta cremosa com ragu de carne", tipo: "principal", tempo: "40 min", rendimento: "3 porções", fonte: "vitat",
    ingredientes: [["1 xícara de fubá", "Fubá (polenta)"], ["4 xícaras de água", null], ["1 colher de sopa de manteiga", "Manteiga"], ["3 colheres de sopa de queijo parmesão", "Queijo parmesão"],
      ["400g de carne moída", "Carne moída"], ["2 xícaras de molho de tomate caseiro", "Tomate pelado em lata"], ["1 colher de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"], ["Sal e orégano a gosto", "Orégano"]],
    preparo: ["Doure a carne no azeite, tempere com sal e orégano, junte o molho e cozinhe por 15 minutos.", "Dissolva o fubá na água fria com sal e leve ao fogo, mexendo sempre, por 20 minutos.", "Desligue e misture a manteiga e o parmesão.", "Sirva a polenta com o ragu por cima."]
  },
  {
    id: "salada-quinoa-frango", nome: "Salada de quinoa com frango", tipo: "principal", tempo: "25 min", rendimento: "2 porções", fonte: "monash",
    ingredientes: [["1/2 xícara de quinoa", "Quinoa"], ["1 filé de peito de frango grelhado em cubos", "Peito de frango"], ["1 tomate em cubos", "Tomate"], ["1/2 pepino em cubos", "Pepino"],
      ["1 xícara de folhas de espinafre ou alface", "Espinafre"], ["2 colheres de sopa de azeite de oliva", "Azeite de oliva"], ["Suco de 1 limão", "Limão"],
      ["Salsinha e cebolinha (só a parte verde)", "Salsinha"], ["Sal a gosto", "Sal"]],
    preparo: ["Lave a quinoa e cozinhe em 1 xícara de água com sal por 15 minutos. Deixe esfriar.", "Misture a quinoa com o frango, o tomate, o pepino e as folhas.", "Tempere com azeite, limão, sal e ervas."]
  },
  {
    id: "lasanha-abobrinha", nome: "Lasanha de abobrinha", tipo: "principal", tempo: "50 min", rendimento: "4 porções", fonte: "vitat",
    ingredientes: [["2 abobrinhas em lâminas finas", "Abobrinha"], ["400g de carne moída", "Carne moída"], ["2 xícaras de molho de tomate caseiro", "Tomate pelado em lata"],
      ["150g de queijo muçarela", "Queijo muçarela"], ["3 colheres de sopa de queijo parmesão", "Queijo parmesão"], ["1 colher de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"],
      ["Manjericão, sal e pimenta a gosto", "Manjericão"]],
    preparo: ["Grelhe as lâminas de abobrinha rapidamente para perderem água.", "Doure a carne no azeite, tempere e junte o molho. Cozinhe por 10 minutos.", "Monte camadas: molho, abobrinha, muçarela, repetindo até acabar.", "Cubra com parmesão e asse a 200 °C por 25 minutos."],
    dica: "A abobrinha é baixa em FODMAP numa porção de cerca de 1/3 de xícara. Dividida em 4 porções, a receita fica dentro do limite."
  },
  {
    id: "tacos-frango", nome: "Tacos de frango com tortilha de milho", tipo: "principal", tempo: "25 min", rendimento: "2 porções (6 tacos)", fonte: "monash",
    ingredientes: [["6 tortilhas de milho", "Tortilha de milho"], ["2 filés de peito de frango em tiras", "Peito de frango"], ["1 colher de chá de cominho", "Cominho"], ["1 colher de chá de páprica", "Páprica"],
      ["Alface picada", "Alface"], ["1 tomate em cubos", "Tomate"], ["1/2 xícara de queijo muçarela ralado", "Queijo muçarela"], ["Suco de 1 limão e coentro", "Limão"],
      ["1 colher de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"], ["Sal a gosto", "Sal"]],
    preparo: ["Tempere o frango com cominho, páprica, sal e limão.", "Doure no azeite por 6 a 8 minutos.", "Aqueça as tortilhas numa frigideira seca.", "Recheie com frango, alface, tomate, queijo e coentro."],
    dica: "Confira o rótulo: a tortilha deve ser de milho e sem trigo, alho ou cebola."
  },
  {
    id: "sopa-legumes-frango", nome: "Sopa de legumes com frango", tipo: "principal", tempo: "40 min", rendimento: "4 porções", fonte: "tuasaude",
    ingredientes: [["300g de peito de frango em cubos", "Peito de frango"], ["2 batatas em cubos", "Batata"], ["2 cenouras em rodelas", "Cenoura"], ["1 chuchu em cubos", "Chuchu"],
      ["1 xícara de abóbora cabotiá em cubos", "Abóbora cabotiá"], ["2 colheres de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"], ["1 litro de água", null],
      ["1 colher de chá de cúrcuma", "Cúrcuma (açafrão-da-terra)", true], ["Cebolinha (só a parte verde) e salsinha", "Salsinha"], ["Sal a gosto", "Sal"]],
    preparo: ["Doure o frango no azeite com sal.", "Junte os legumes, a cúrcuma e a água.", "Cozinhe por 25 minutos, até os legumes ficarem macios.", "Finalize com cebolinha e salsinha."],
    dica: "Caldo em cubo ou tablete quase sempre tem cebola e alho. Use só água e temperos frescos."
  },
  {
    id: "creme-abobora", nome: "Creme de abóbora com gengibre", tipo: "principal", tempo: "35 min", rendimento: "3 porções", fonte: "monash",
    ingredientes: [["500g de abóbora cabotiá em cubos", "Abóbora cabotiá"], ["1 batata em cubos", "Batata"], ["1 colher de chá de gengibre ralado", "Gengibre"],
      ["1 colher de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"], ["3 xícaras de água", null], ["2 colheres de sopa de creme de leite sem lactose", "Creme de leite sem lactose", true],
      ["Sal e pimenta a gosto", "Sal"]],
    preparo: ["Refogue o gengibre no azeite por 1 minuto.", "Junte a abóbora, a batata, a água e o sal e cozinhe por 20 minutos.", "Bata no liquidificador até ficar liso.", "Volte ao fogo, acerte o sal e finalize com o creme de leite."]
  },
  {
    id: "carne-panela", nome: "Carne de panela com batata e cenoura", tipo: "principal", tempo: "1h (panela de pressão)", rendimento: "4 porções", fonte: "vitat",
    ingredientes: [["700g de carne para panela em cubos", "Carne para panela (acém ou músculo)"], ["3 batatas em cubos grandes", "Batata"], ["2 cenouras em rodelas", "Cenoura"],
      ["2 tomates picados", "Tomate"], ["2 colheres de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"], ["2 folhas de louro", "Louro"],
      ["1 colher de chá de páprica", "Páprica"], ["Cebolinha (só a parte verde)", "Cebolinha (só a parte verde)"], ["Sal e pimenta a gosto", "Sal"]],
    preparo: ["Doure a carne aos poucos no azeite, na panela de pressão.", "Junte o tomate, a páprica, o louro, sal e pimenta e cubra com água.", "Cozinhe na pressão por 35 minutos.", "Tire a pressão, junte a batata e a cenoura e cozinhe sem pressão até ficarem macias.", "Finalize com cebolinha."]
  },
  {
    id: "strogonoff-frango", nome: "Strogonoff de frango sem lactose", tipo: "principal", tempo: "30 min", rendimento: "3 porções", fonte: "vitat",
    ingredientes: [["500g de peito de frango em cubos", "Peito de frango"], ["1 colher de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"],
      ["3 colheres de sopa de tomate pelado amassado", "Tomate pelado em lata"], ["1 colher de chá de páprica", "Páprica"], ["1 caixinha de creme de leite sem lactose", "Creme de leite sem lactose"],
      ["Sal e pimenta a gosto", "Sal"], ["Arroz e batata assada para acompanhar", "Arroz"]],
    preparo: ["Doure o frango temperado com sal e pimenta no azeite.", "Junte o tomate e a páprica e cozinhe por 5 minutos.", "Desligue o fogo e misture o creme de leite.", "Sirva com arroz e batata assada em vez da batata palha industrializada."],
    dica: "Ketchup e mostarda prontos costumam levar cebola e alho. Esta versão usa só tomate e páprica."
  },
  {
    id: "berinjela-recheada", nome: "Berinjela recheada com carne", tipo: "principal", tempo: "45 min", rendimento: "2 porções", fonte: "monash",
    ingredientes: [["1 berinjela grande", "Berinjela"], ["250g de carne moída", "Carne moída"], ["1 tomate picado", "Tomate"], ["1 colher de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"],
      ["1/2 xícara de queijo muçarela ralado", "Queijo muçarela"], ["Orégano, sal e pimenta a gosto", "Orégano"]],
    preparo: ["Corte a berinjela ao meio, retire parte da polpa e pique.", "Doure a carne no azeite, junte a polpa picada, o tomate e os temperos e cozinhe por 10 minutos.", "Recheie as metades, cubra com queijo e asse a 200 °C por 25 minutos."]
  },

  // ---------- Lanches e doces ----------
  {
    id: "bolo-banana-aveia", nome: "Bolo de banana com aveia", tipo: "lanche", tempo: "45 min", rendimento: "8 fatias", fonte: "monash",
    ingredientes: [["3 bananas firmes amassadas", "Banana (firme, pouco madura)"], ["3 ovos", "Ovos"], ["1/3 xícara de óleo", "Óleo vegetal"], ["1/2 xícara de açúcar mascavo", "Açúcar mascavo"],
      ["1 xícara de aveia em flocos", "Aveia em flocos"], ["1 xícara de farinha de arroz", "Farinha de arroz"], ["1 colher de sopa de fermento", "Fermento químico em pó"],
      ["1 colher de chá de canela", "Canela em pó"]],
    preparo: ["Bata as bananas, os ovos, o óleo e o açúcar.", "Misture a aveia, a farinha de arroz e a canela.", "Junte o fermento por último, mexendo devagar.", "Asse em forma untada a 180 °C por 35 a 40 minutos."],
    dica: "Uma fatia por vez: a porção de banana por fatia fica baixa em FODMAP."
  },
  {
    id: "cookie-amendoim", nome: "Cookie de pasta de amendoim (3 ingredientes)", tipo: "lanche", tempo: "20 min", rendimento: "12 cookies", fonte: "monash",
    ingredientes: [["1 xícara de pasta de amendoim", "Pasta de amendoim (sem açúcar)"], ["1/2 xícara de açúcar mascavo", "Açúcar mascavo"], ["1 ovo", "Ovos"],
      ["30g de chocolate 70% picado", "Chocolate 70%", true]],
    preparo: ["Misture a pasta de amendoim, o açúcar e o ovo.", "Junte o chocolate, se quiser.", "Faça bolinhas, achate com um garfo e asse a 180 °C por 10 a 12 minutos.", "Deixe esfriar na assadeira antes de tirar."]
  },
  {
    id: "pipoca-temperada", nome: "Pipoca temperada", tipo: "lanche", tempo: "10 min", rendimento: "2 porções", fonte: "lista",
    ingredientes: [["1/2 xícara de milho para pipoca", "Milho para pipoca"], ["1 colher de sopa de azeite aromatizado com alho", "Azeite aromatizado com alho"],
      ["1 colher de chá de páprica", "Páprica"], ["2 colheres de sopa de queijo parmesão ralado", "Queijo parmesão", true], ["Sal a gosto", "Sal"]],
    preparo: ["Estoure o milho com o azeite numa panela tampada.", "Tempere ainda quente com sal, páprica e parmesão."],
    dica: "A pipoca de micro-ondas costuma ter manteiga e aromas com cebola e alho. Prefira a de panela."
  },
  {
    id: "smoothie-morango", nome: "Smoothie de morango e banana", tipo: "lanche", tempo: "5 min", rendimento: "1 copo", fonte: "monash",
    ingredientes: [["8 morangos congelados", "Morango"], ["1/2 banana firme", "Banana (firme, pouco madura)"], ["1/2 xícara de iogurte natural sem lactose", "Iogurte natural sem lactose"],
      ["1/2 xícara de leite sem lactose", "Leite sem lactose"], ["1 colher de chá de semente de chia", "Semente de chia", true]],
    preparo: ["Bata tudo no liquidificador até ficar cremoso.", "Sirva na hora."]
  },
  {
    id: "muffin-mirtilo", nome: "Muffin de mirtilo com farinha de arroz", tipo: "lanche", tempo: "35 min", rendimento: "10 muffins", fonte: "monash",
    ingredientes: [["1 e 1/2 xícara de farinha de arroz", "Farinha de arroz"], ["1/2 xícara de açúcar mascavo", "Açúcar mascavo"], ["2 ovos", "Ovos"],
      ["1/2 xícara de leite sem lactose", "Leite sem lactose"], ["1/3 xícara de óleo", "Óleo vegetal"], ["1 colher de sopa de fermento", "Fermento químico em pó"],
      ["1 xícara de mirtilos", "Mirtilo (blueberry)"], ["1 colher de chá de essência de baunilha", "Essência de baunilha", true]],
    preparo: ["Bata os ovos, o açúcar, o leite, o óleo e a baunilha.", "Junte a farinha e o fermento e misture só até incorporar.", "Envolva os mirtilos com cuidado.", "Distribua em forminhas e asse a 180 °C por 20 a 25 minutos."]
  },
  {
    id: "salada-frutas", nome: "Salada de frutas tropical", tipo: "lanche", tempo: "10 min", rendimento: "2 porções", fonte: "tuasaude",
    ingredientes: [["1 xícara de abacaxi em cubos", "Abacaxi"], ["1 laranja em gomos", "Laranja"], ["1 kiwi", "Kiwi"], ["1 fatia de mamão papaia", "Mamão papaia"],
      ["Suco de 1/2 limão", "Limão"], ["Folhas de hortelã ou canela a gosto", "Canela em pó", true]],
    preparo: ["Corte as frutas em cubos.", "Misture com o suco de limão e sirva gelada."],
    dica: "Evite maçã, pera, manga e melancia na fase de eliminação: são ricas em FODMAP."
  },
  {
    id: "batata-doce-chips", nome: "Chips de batata-doce assada", tipo: "lanche", tempo: "35 min", rendimento: "2 porções", fonte: "monash",
    ingredientes: [["1 batata-doce média em lâminas finas", "Batata-doce"], ["1 colher de sopa de azeite de oliva", "Azeite de oliva"], ["Páprica, sal e alecrim a gosto", "Páprica"]],
    preparo: ["Misture as lâminas com azeite e temperos.", "Espalhe numa assadeira sem sobrepor.", "Asse a 200 °C por 20 a 25 minutos, virando na metade, até ficarem crocantes."],
    dica: "A batata-doce é baixa em FODMAP em porções de cerca de 1/2 xícara (75g). Não exagere."
  },
  {
    id: "mousse-cacau", nome: "Mousse de cacau sem lactose", tipo: "lanche", tempo: "10 min + geladeira", rendimento: "3 porções", fonte: "monash",
    ingredientes: [["1 caixinha de creme de leite sem lactose", "Creme de leite sem lactose"], ["60g de chocolate 70%", "Chocolate 70%"], ["1 colher de sopa de cacau em pó", "Cacau em pó"],
      ["1 colher de sopa de açúcar mascavo", "Açúcar mascavo"]],
    preparo: ["Derreta o chocolate em banho-maria ou no micro-ondas, de 30 em 30 segundos.", "Misture o creme de leite, o cacau e o açúcar.", "Distribua em potinhos e leve à geladeira por 2 horas."]
  }
];
