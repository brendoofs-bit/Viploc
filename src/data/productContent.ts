// Conteúdo exclusivo por produto (chave = product.id). Produtos sem entrada usam o texto padrão de Product.tsx.
// Fatos do serviço usados nos textos: só a cidade do Rio de Janeiro, a partir de 1 diária,
// entrega no mesmo dia sujeita a disponibilidade, orçamento com valor final (entrega e retirada incluídas).

export type ProductContent = {
  customH1?: string;
  idealForTitle?: string;
  idealForSubtitle?: string;
  idealForList?: string[];
  applicationsTitle?: string;
  applicationsIntro?: string;
  applicationsList?: string[];
  comparativeTitle?: string;
  comparativeSubtitle?: string;
  comparativeHeaders?: string[];
  comparativeRows?: { situation: string; mainProd: string; compProd: string }[];
  faqs?: { question: string; answer: string }[];
};

const deliveryFaq = (equipment: string) => ({
  question: `A entrega e a retirada ${equipment} estão inclusas no valor?`,
  answer: 'Sim. O orçamento já vem com o valor final, com entrega e retirada incluídas. O valor varia conforme o bairro de entrega no Rio de Janeiro.',
});

const sameDayFaq = {
  question: 'Vocês entregam no mesmo dia?',
  answer: 'Quando há equipamento disponível, entregamos no mesmo dia em toda a cidade do Rio de Janeiro. Também agendamos a entrega para a data do seu evento.',
};

const minimumPeriodFaq = {
  question: 'Qual é o período mínimo de locação?',
  answer: 'A partir de 1 diária. Também alugamos por fim de semana, por semana ou por mês.',
};

export const productContent: Record<string, ProductContent> = {
  'geladeira-frost-free-brastemp-375l': {
    customH1: 'Locação de Geladeira Frost Free Brastemp 375L no Rio de Janeiro',
    idealForTitle: 'Ideal para',
    idealForSubtitle: 'Esta geladeira é indicada para os seguintes locais e ocasiões:',
    idealForList: [
      'Festas particulares',
      'Eventos corporativos',
      'Casamentos',
      'Food trucks',
      'Restaurantes',
      'Bares',
      'Quiosques',
      'Produções de TV',
      'Feiras',
      'Stands promocionais',
    ],
    applicationsTitle: 'Aplicações Reais',
    applicationsIntro: 'Onde esta geladeira de 375 litros da Brastemp é frequentemente utilizada?',
    applicationsList: [
      'Eventos no Rio de Janeiro',
      'Casas de temporada',
      'Reformas residenciais na cozinha',
      'Substituição temporária de equipamentos quebrados',
      'Restaurantes, lanchonetes e bares',
      'Produções audiovisuais e cenografia',
    ],
    comparativeTitle: 'Comparativo de Soluções',
    comparativeSubtitle: 'Geladeira 375L ou um Frigobar?',
    comparativeHeaders: ['Situação', 'Geladeira Brastemp 375L', 'Frigobar Convencional'],
    comparativeRows: [
      { situation: 'Espaço para Eventos', mainProd: '✅ Perfeito', compProd: '❌ Insuficiente' },
      { situation: 'Uso em Casa Temporária', mainProd: '✅ Completo', compProd: '⚠️ Apenas quebra-galho' },
      { situation: 'Armazenamento de Bebidas', mainProd: '✅ Alta Capacidade', compProd: '✅ Baixa Capacidade' },
    ],
    faqs: [
      { question: 'Como funciona a locação de geladeira Brastemp 375L no Rio de Janeiro?', answer: 'A locação é simples e totalmente sem complicação. Você escolhe o período necessário (diário, semanal ou mensal), entra em contato com nossa equipe via WhatsApp para fechar os detalhes, e nós cuidamos da entrega, instalação inicial e retirada direto no local informado no RJ.' },
      { question: 'Qual é a voltagem da Geladeira Brastemp 375L disponível para aluguel?', answer: 'Todos os nossos equipamentos estão prontos para uso em 220V, garantindo alta eficiência de refrigeração e estabilidade mesmo em dias quentes de verão no Rio de Janeiro.' },
      deliveryFaq('da geladeira'),
      { question: 'Quais são os prazos de entrega para os bairros do Rio de Janeiro?', answer: 'Quando há disponibilidade, entregamos no mesmo dia em toda a cidade do Rio de Janeiro. Também agendamos a entrega para a data específica do seu evento ou reforma.' },
      { question: 'A geladeira é devidamente limpa e higienizada antes da entrega?', answer: 'Sim! Todos os equipamentos da Viploc passam por um rigoroso processo de higienização profissional e testes técnicos de funcionamento antes de serem enviados a qualquer cliente.' },
      { question: 'Como proceder se a geladeira apresentar alguma falha de funcionamento durante a locação?', answer: 'Contamos com um serviço de suporte técnico ágil e humano via WhatsApp. Caso qualquer inconsistência ocorra, nossa equipe realiza o atendimento e, se necessário, efetuamos a substituição rápida do aparelho.' },
      { question: 'Vocês atendem festas e eventos particulares em residências ou salões?', answer: 'Sim, atendemos de pequenos encontros familiares e casamentos até grandes festas corporativas, shows e produções de grande porte em toda a cidade do Rio de Janeiro.' },
      { question: 'Posso alugar a geladeira Brastemp 375L para o período de reforma da minha cozinha?', answer: 'Com certeza! Essa é uma das aplicações mais comuns. Oferecemos pacotes mensais flexíveis para garantir que a sua rotina doméstica não pare enquanto sua cozinha é reformada.' },
      { question: 'Quais as vantagens de alugar uma geladeira de 375 litros em comparação com um frigobar?', answer: 'A geladeira de 375L oferece amplo espaço interno, congelador/freezer de verdade e prateleiras ajustáveis, ideal para armazenar alimentos de refeições completas, bolos, pratos congelados e grandes garrafas que não caberiam em um frigobar convencional.' },
      { question: 'A tecnologia Frost Free faz diferença no aluguel comercial ou residencial temporário?', answer: 'Sim! Como é Frost Free, ela não acumula gelo nas paredes internas do congelador. Isso evita o incômodo de precisar desligar e descongelar o aparelho, garantindo operação constante e sem poças de água.' },
      { question: 'Qual é o período mínimo que posso contratar o aluguel?', answer: 'A partir de 1 diária. Também alugamos por fim de semana, por semana ou em pacotes mensais para obras ou uso residencial prolongado.' },
      { question: 'A geladeira Brastemp 375L passa facilmente em portas e elevadores padrão?', answer: 'Sim, com tamanho equilibrado e design duplex compacto, ela passa bem na maioria das portas residenciais, elevadores de prédios no Rio de Janeiro e corredores de acesso.' },
      { question: 'É necessário deixar algum valor de caução para a locação do equipamento?', answer: 'Não exigimos burocracia excessiva ou cauções complexas. A análise é rápida e transparente, focada na comodidade do cliente.' },
      { question: 'Quais são os cuidados básicos recomendados após ligar o equipamento?', answer: 'Recomendamos aguardar cerca de 2 horas após o transporte antes de ligar a geladeira na tomada de 220V, permitindo que os fluidos internos se estabilizem corretamente antes de iniciar o resfriamento máximo.' },
      { question: 'Vocês emitem nota fiscal e contrato para empresas (Pessoa Jurídica)?', answer: 'Sim! Atendemos demandas corporativas fornecendo toda a documentação fiscal e contratual necessária para o faturamento interno das empresas.' },
      { question: 'A geladeira pode ser transportada pela nossa equipe ou vocês fazem todo o frete?', answer: 'Para garantir a perfeita integridade física e mecânica dos sistemas de refrigeração, o transporte é efetuado de forma exclusiva pela expedição própria da Viploc.' },
      { question: 'O que está incluso na garantia de suporte técnico da locação?', answer: 'Qualquer manutenção preventiva, corretiva ou substituição por desgaste natural está totalmente coberta sem custos adicionais ao longo do tempo do seu contrato.' },
      { question: 'Como faço para solicitar a cotação rápida da geladeira Brastemp 375L?', answer: 'Basta clicar em qualquer botão de orçamento por WhatsApp da página e você falará em minutos com um consultor comercial pronto para passar valores sob medida.' },
    ],
  },

  'geladeira-consul-duplex-375l': {
    customH1: 'Locação de Geladeira Consul Duplex 375L no Rio de Janeiro',
    idealForTitle: 'Ideal para',
    idealForSubtitle: 'Uma geladeira completa para quem precisa de refrigerador e congelador separados por alguns dias ou meses:',
    idealForList: [
      'Reforma de cozinha',
      'Geladeira quebrada aguardando conserto',
      'Imóveis de temporada e Airbnb',
      'Festas em casa',
      'Refeitórios de obra',
      'Escritórios e salas comerciais',
      'Buffets e cozinhas de apoio',
      'Produções e camarins',
    ],
    applicationsTitle: 'Aplicações Reais',
    applicationsIntro: 'Situações em que a Consul Duplex 375L resolve sem precisar comprar uma geladeira nova:',
    applicationsList: [
      'Manter a rotina da casa durante a reforma da cozinha',
      'Substituir a geladeira que quebrou enquanto o conserto ou a compra não sai',
      'Equipar um apartamento de temporada por um período curto',
      'Guardar comida e sobremesas de uma festa em casa',
      'Atender a equipe de uma obra ou canteiro',
      'Dar apoio a buffets e cozinhas montadas para eventos',
    ],
    comparativeTitle: 'Geladeira ou freezer?',
    comparativeSubtitle: 'Quando a geladeira duplex resolve e quando vale somar um freezer',
    comparativeHeaders: ['Situação', 'Geladeira Consul Duplex 375L', 'Freezer horizontal'],
    comparativeRows: [
      { situation: 'Comida do dia a dia', mainProd: '✅ Ideal', compProd: '❌ Não refrigera alimentos frescos' },
      { situation: 'Gelo e congelados', mainProd: '✅ Congelador separado', compProd: '✅ Volume muito maior' },
      { situation: 'Muitas bebidas para festa', mainProd: '⚠️ Espaço limitado', compProd: '✅ Indicado' },
    ],
    faqs: [
      { question: 'A Geladeira Consul Duplex 375L é Frost Free?', answer: 'Sim. Ela não acumula gelo nas paredes do congelador, então não precisa ser desligada para descongelar durante a locação.' },
      { question: 'Qual a voltagem da geladeira?', answer: 'Ela funciona em 220V. Confira se o local tem tomada 220V antes da entrega e evite adaptadores e extensões finas.' },
      deliveryFaq('da geladeira'),
      sameDayFaq,
      minimumPeriodFaq,
      { question: 'Posso alugar por mês enquanto minha geladeira está no conserto?', answer: 'Sim. A locação mensal é uma das mais procuradas para reforma de cozinha ou geladeira quebrada. Você pode renovar o período pelo WhatsApp.' },
      { question: 'Quanto tempo depois da entrega posso ligar a geladeira?', answer: 'Recomendamos aguardar cerca de 2 horas após o transporte antes de ligar. Depois disso, ela leva algumas horas para atingir a temperatura ideal, então ligue com antecedência antes de guardar os alimentos.' },
    ],
  },

  'freezer-consul-534l': {
    customH1: 'Locação de Freezer Horizontal Consul 534L no Rio de Janeiro',
    idealForTitle: 'Ideal para',
    idealForSubtitle: 'O maior freezer horizontal do catálogo, para quem precisa de muito volume:',
    idealForList: [
      'Festas e casamentos grandes',
      'Eventos corporativos',
      'Bares e quiosques na alta temporada',
      'Buffets e catering',
      'Estoque de congelados em comércio',
      'Gelo para eventos',
      'Festas juninas e quermesses',
      'Shows e produções',
    ],
    applicationsTitle: 'Aplicações Reais',
    applicationsIntro: 'Onde o Freezer Consul 534L costuma ser usado no Rio de Janeiro:',
    applicationsList: [
      'Gelar e estocar bebidas para festas com muitos convidados',
      'Guardar sacos de gelo para o bar do evento',
      'Estocar carnes e congelados para churrascos e buffets',
      'Reforçar o estoque de bares e quiosques no verão',
      'Armazenar produtos congelados em comércio durante uma reforma',
      'Apoiar cozinhas industriais temporárias',
    ],
    comparativeTitle: 'Qual tamanho escolher?',
    comparativeSubtitle: 'Freezer Consul 534L ou o modelo de 309L?',
    comparativeHeaders: ['Situação', 'Freezer Consul 534L', 'Freezer Consul 309L'],
    comparativeRows: [
      { situation: 'Evento com mais de 100 convidados', mainProd: '✅ Indicado', compProd: '⚠️ Pode faltar espaço' },
      { situation: 'Bebidas e gelo no mesmo freezer', mainProd: '✅ Cabe os dois', compProd: '⚠️ Apertado' },
      { situation: 'Local com pouco espaço', mainProd: '⚠️ Ocupa mais chão', compProd: '✅ Mais compacto' },
    ],
    faqs: [
      { question: 'Quantas latas cabem no Freezer Consul 534L?', answer: 'Como estimativa, cerca de 650 latas de 350 ml em pé, sem gelo. O número real varia com a arrumação, o espaço do degrau do compressor e a quantidade de gelo. Se precisar de um número exato, fale com a gente pelo WhatsApp.' },
      { question: 'O freezer 534L é dupla ação?', answer: 'Sim. Na posição de refrigerador ele mantém as bebidas geladas sem congelar; na posição de freezer ele congela alimentos e gelo.' },
      { question: 'Para quantos convidados ele serve?', answer: 'Usando a referência de 4 a 6 latas por adulto que bebe em uma festa de 4 a 5 horas, as cerca de 650 latas atendem algo entre 110 e 160 convidados. Para mais gente, combine com uma cervejeira ou um segundo freezer.' },
      deliveryFaq('do freezer'),
      sameDayFaq,
      minimumPeriodFaq,
      { question: 'Com quanto tempo de antecedência devo ligar o freezer?', answer: 'Aguarde cerca de 2 horas após a entrega para ligar. Para gelar bebidas em volume, o ideal é receber o freezer no dia anterior ou na manhã do evento e já colocar as bebidas para gelar.' },
    ],
  },

  'freezer-consul-309l': {
    customH1: 'Locação de Freezer Horizontal Consul 309L no Rio de Janeiro',
    idealForTitle: 'Ideal para',
    idealForSubtitle: 'Um freezer horizontal de tamanho médio, fácil de posicionar:',
    idealForList: [
      'Festas em casa e aniversários',
      'Churrascos',
      'Eventos de médio porte',
      'Quiosques e lanchonetes',
      'Estoque de congelados em pequenos comércios',
      'Gelo para o bar',
      'Confraternizações de empresa',
      'Casas de temporada',
    ],
    applicationsTitle: 'Aplicações Reais',
    applicationsIntro: 'Situações em que o Freezer Consul 309L costuma ser a escolha certa:',
    applicationsList: [
      'Gelar a bebida de festas de aniversário e churrascos em casa',
      'Guardar gelo e congelados em eventos de médio porte',
      'Reforçar o estoque de quiosques e lanchonetes',
      'Ter um freezer extra em casas de temporada',
      'Estocar alimentos durante uma reforma ou mudança',
      'Apoiar buffets menores e confraternizações de empresa',
    ],
    comparativeTitle: 'Qual tamanho escolher?',
    comparativeSubtitle: 'Freezer Consul 309L ou o modelo de 534L?',
    comparativeHeaders: ['Situação', 'Freezer Consul 309L', 'Freezer Consul 534L'],
    comparativeRows: [
      { situation: 'Festa com até cerca de 80 convidados', mainProd: '✅ Indicado', compProd: '⚠️ Sobra espaço' },
      { situation: 'Varanda, cozinha ou área pequena', mainProd: '✅ Mais compacto', compProd: '⚠️ Ocupa mais chão' },
      { situation: 'Evento grande com bebidas e gelo', mainProd: '⚠️ Pode faltar espaço', compProd: '✅ Indicado' },
    ],
    faqs: [
      { question: 'Quantas latas cabem no Freezer Consul 309L?', answer: 'Como estimativa, cerca de 380 latas de 350 ml em pé, sem gelo. O número real varia com a arrumação e com a quantidade de gelo.' },
      { question: 'Para quantos convidados ele serve?', answer: 'Usando a referência de 4 a 6 latas por adulto que bebe em uma festa de 4 a 5 horas, as cerca de 380 latas atendem algo entre 60 e 90 convidados.' },
      { question: 'Qual a voltagem do freezer?', answer: 'Ele funciona em 220V. Confira se o local tem tomada 220V e evite extensões finas ou benjamins.' },
      deliveryFaq('do freezer'),
      sameDayFaq,
      minimumPeriodFaq,
    ],
  },

  'freezer-vertical-consul-246l': {
    customH1: 'Locação de Freezer Vertical Consul 246L no Rio de Janeiro',
    idealForTitle: 'Ideal para',
    idealForSubtitle: 'Um freezer em pé, com gavetas, para organizar congelados ocupando pouco espaço no chão:',
    idealForList: [
      'Cozinhas de restaurantes e lanchonetes',
      'Buffets e catering',
      'Cozinhas de apoio em eventos',
      'Estoque de congelados em casa',
      'Refeitórios',
      'Reformas e mudanças',
      'Produções e camarins',
      'Escritórios',
    ],
    applicationsTitle: 'Aplicações Reais',
    applicationsIntro: 'Quando o freezer vertical faz mais sentido que o horizontal:',
    applicationsList: [
      'Organizar porções, carnes e congelados por gaveta',
      'Cozinhas com pouco espaço no chão',
      'Equipes que abrem o freezer muitas vezes ao dia',
      'Guardar alimentos congelados durante uma reforma',
      'Cozinhas montadas para buffets e eventos',
      'Refeitórios de empresas e obras',
    ],
    comparativeTitle: 'Vertical ou horizontal?',
    comparativeSubtitle: 'Freezer vertical 246L ou um freezer horizontal?',
    comparativeHeaders: ['Situação', 'Freezer vertical 246L', 'Freezer horizontal'],
    comparativeRows: [
      { situation: 'Organização por gavetas', mainProd: '✅ Fácil de achar tudo', compProd: '⚠️ Itens ficam empilhados' },
      { situation: 'Pouco espaço no chão', mainProd: '✅ Ocupa menos área', compProd: '❌ Precisa de mais área' },
      { situation: 'Grande volume de bebidas', mainProd: '⚠️ Limitado', compProd: '✅ Indicado' },
    ],
    faqs: [
      { question: 'Qual a diferença entre freezer vertical e horizontal?', answer: 'O vertical tem gavetas e ocupa pouco espaço no chão, então é melhor para organizar congelados e acessar rápido. O horizontal tem mais volume útil e é melhor para bebidas e grandes quantidades.' },
      { question: 'O freezer vertical serve para gelar bebidas de festa?', answer: 'Serve para pequenas quantidades. Para gelar muitas bebidas, o freezer horizontal ou uma cervejeira rendem bem mais.' },
      { question: 'Qual a voltagem do freezer vertical?', answer: 'Ele funciona em 220V. Confira se o local tem tomada 220V antes da entrega.' },
      deliveryFaq('do freezer'),
      sameDayFaq,
      minimumPeriodFaq,
    ],
  },

  'freezer-vidro-292l': {
    customH1: 'Locação de Freezer Metalfrio 292L com Tampa de Vidro no Rio de Janeiro',
    idealForTitle: 'Ideal para',
    idealForSubtitle: 'Um freezer horizontal com tampa de vidro, feito para mostrar o produto e vender:',
    idealForList: [
      'Venda de sorvetes e picolés',
      'Venda de gelo',
      'Eventos ao ar livre',
      'Feiras e festivais',
      'Quiosques e lojas',
      'Lançamentos e ações promocionais',
      'Festas infantis',
      'Lanchonetes',
    ],
    applicationsTitle: 'Aplicações Reais',
    applicationsIntro: 'Onde a tampa de vidro faz diferença:',
    applicationsList: [
      'Pontos de venda de sorvete e picolé em eventos',
      'Venda de gelo em quiosques e festas',
      'Exposição de produtos congelados em feiras',
      'Ações promocionais de marcas de sorvete e bebidas',
      'Sorveterias temporárias na alta temporada',
      'Festas infantis com mesa de sorvetes',
    ],
    comparativeTitle: 'Tampa de vidro ou tampa comum?',
    comparativeSubtitle: 'Metalfrio 292L com tampa de vidro ou um freezer de tampa comum?',
    comparativeHeaders: ['Situação', 'Metalfrio 292L tampa de vidro', 'Freezer de tampa comum'],
    comparativeRows: [
      { situation: 'Cliente vê o produto sem abrir', mainProd: '✅ Sim', compProd: '❌ Não' },
      { situation: 'Venda de sorvete e picolé', mainProd: '✅ Indicado', compProd: '⚠️ Funciona, mas não expõe' },
      { situation: 'Só estocar bebidas da festa', mainProd: '✅ Funciona', compProd: '✅ Mais volume pelo mesmo espaço' },
    ],
    faqs: [
      { question: 'Para que serve a tampa de vidro?', answer: 'Ela deixa o cliente ver o produto sem abrir o freezer. Isso ajuda a vender e reduz a perda de frio, porque a tampa fica menos tempo aberta.' },
      { question: 'Posso usar para vender sorvete em evento?', answer: 'Sim, esse é o uso mais comum. Para sorvete, ligue o freezer com antecedência para ele chegar à temperatura certa antes de receber o produto.' },
      { question: 'Qual a voltagem?', answer: 'Ele funciona em 220V. Confira se o local do evento tem tomada 220V.' },
      deliveryFaq('do freezer'),
      sameDayFaq,
      minimumPeriodFaq,
    ],
  },
};
