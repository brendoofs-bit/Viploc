// Conteúdo editorial das páginas de categoria (chave = category.id). Textos aceitam **negrito** e [links](/locacao/...).
// Categorias sem entrada mostram só a listagem, os fatos do serviço e o FAQ padrão.
// Fatos do serviço usados nos textos: só a cidade do Rio de Janeiro, a partir de 1 diária,
// entrega no mesmo dia sujeita a disponibilidade, orçamento com valor final (entrega e retirada incluídas).

export type CategoryContent = {
  introTitle: string;
  intro: string[];
  guideTitle: string;
  guide: { title: string; text: string }[];
  table?: { title: string; intro?: string; headers: string[]; rows: string[][]; note?: string };
  useCasesTitle: string;
  useCases: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  relatedPostSlugs: string[];
};

const minimumPeriodFaq = (equipment: string) => ({
  question: `Por quanto tempo posso alugar ${equipment}?`,
  answer: 'A partir de 1 diária. Também alugamos por fim de semana, por semana ou por mês, e você pode renovar o período pelo WhatsApp.',
});

const sameDayFaq = (equipment: string) => ({
  question: `Vocês entregam ${equipment} no mesmo dia?`,
  answer: 'Sim, quando há equipamento disponível. Entregamos em toda a cidade do Rio de Janeiro: Zona Sul, Zona Norte, Zona Oeste e Centro. Também dá para agendar a entrega para a data do evento.',
});

const deliveryFaq = {
  question: 'A entrega e a retirada estão inclusas no valor?',
  answer: 'Sim. O orçamento já vem com o valor final, com entrega e retirada incluídas. O valor varia conforme o bairro de entrega.',
};

const voltageFaq = (equipment: string) => ({
  question: `Qual a voltagem ${equipment}?`,
  answer: 'Os modelos do catálogo funcionam em 220V. No Rio, muitas tomadas de casa são 127V, então confirme se o local tem uma tomada 220V perto de onde o equipamento vai ficar. Evite benjamins e extensões finas.',
});

export const categoryContent: Record<string, CategoryContent> = {
  geladeiras: {
    introTitle: 'Aluguel de geladeira no Rio de Janeiro',
    intro: [
      'O **aluguel de geladeira** resolve situações em que comprar não compensa: uma festa em casa, a reforma da cozinha, a geladeira que quebrou e ainda não foi consertada, um apartamento de temporada ou a cozinha de apoio de um evento. Na Viploc, a locação de geladeira é feita pelo WhatsApp, a partir de 1 diária, com entrega e retirada em toda a cidade do Rio de Janeiro.',
      'Hoje temos dois modelos duplex de 375 litros: a [Geladeira Frost Free Brastemp 375L](/locacao/geladeiras/geladeira-frost-free-brastemp-375l) e a [Geladeira Consul Duplex 375L](/locacao/geladeiras/geladeira-consul-duplex-375l). As duas têm congelador separado e são Frost Free, então não precisam ser descongeladas durante a locação.',
      'Todas as geladeiras chegam higienizadas e testadas. O orçamento já vem com o valor final, com entrega e retirada incluídas, e o valor varia conforme o bairro.',
    ],
    guideTitle: 'Como escolher a geladeira para alugar',
    guide: [
      { title: 'Capacidade', text: 'Uma geladeira de 375 litros dá conta do dia a dia de uma família de 4 ou 5 pessoas e da comida de uma festa em casa. Se o plano é gelar muita bebida, ela fica pequena: combine com um [freezer horizontal](/locacao/freezers) ou uma [cervejeira](/locacao/cervejeiras).' },
      { title: 'Duplex e Frost Free', text: 'No modelo duplex, o congelador fica separado do refrigerador, com espaço para gelo, carnes e sobremesas. O Frost Free evita o acúmulo de gelo, então a geladeira funciona o tempo todo sem precisar ser desligada.' },
      { title: 'Tomada 220V', text: 'As geladeiras do catálogo funcionam em 220V. No Rio, muitas tomadas de casa são 127V, então confirme se existe uma tomada 220V perto de onde a geladeira vai ficar.' },
      { title: 'Espaço e acesso', text: 'Meça a porta, o elevador e o espaço onde ela vai ficar, e deixe alguns centímetros de folga atrás e dos lados para a ventilação. Na dúvida, mande as medidas pelo WhatsApp.' },
      { title: 'Antecedência', text: 'Depois da entrega, aguarde cerca de 2 horas para ligar e mais algumas horas até ela gelar por completo. Para festas, receba a geladeira na véspera ou na manhã do evento.' },
      { title: 'Período', text: 'Para eventos, a diária ou o fim de semana costumam bastar. Para reforma de cozinha ou geladeira no conserto, a locação por semana ou por mês sai mais em conta.' },
    ],
    table: {
      title: 'O que alugar em cada situação',
      headers: ['Situação', 'O que alugar'],
      rows: [
        ['Reforma de cozinha ou geladeira quebrada', '[Geladeira duplex 375L](/locacao/geladeiras/geladeira-consul-duplex-375l), por semana ou por mês'],
        ['Festa em casa', 'Geladeira para a comida e [freezer horizontal](/locacao/freezers) para bebidas e gelo'],
        ['Evento com bar ou venda de bebidas', '[Cervejeira](/locacao/cervejeiras) ou [expositor de bebidas](/locacao/expositores-de-bebidas), com freezer para o estoque'],
        ['Apartamento de temporada', '[Geladeira Frost Free 375L](/locacao/geladeiras/geladeira-frost-free-brastemp-375l)'],
        ['Quarto, escritório ou camarim', '[Frigobar 117L](/locacao/frigobar/frigobar-consul-117l)'],
      ],
    },
    useCasesTitle: 'Quem aluga geladeira com a Viploc',
    useCases: [
      { title: 'Festas e eventos', text: 'Comida, sobremesas e bebidas no lugar certo, sem lotar a geladeira da casa.' },
      { title: 'Reforma de cozinha', text: 'A rotina da casa não para enquanto a cozinha está em obra. A locação mensal cobre o período inteiro.' },
      { title: 'Geladeira quebrada', text: 'Enquanto o conserto ou a compra não sai, a geladeira alugada evita perder comida. Com disponibilidade, entregamos no mesmo dia.' },
      { title: 'Temporada e Airbnb', text: 'Equipe o imóvel por alguns dias ou meses sem comprar um eletrodoméstico.' },
      { title: 'Obras e empresas', text: 'Refeitórios de obra, escritórios e salas comerciais com geladeira completa pelo tempo que precisar.' },
      { title: 'Produções e feiras', text: 'Cozinhas de apoio, camarins e stands em gravações, feiras e congressos.' },
    ],
    faqs: [
      minimumPeriodFaq('uma geladeira'),
      sameDayFaq('a geladeira'),
      deliveryFaq,
      voltageFaq('das geladeiras'),
      { question: 'Quanto tempo depois da entrega posso ligar a geladeira?', answer: 'Aguarde cerca de 2 horas após o transporte para ligar. Depois disso, ela leva algumas horas para atingir a temperatura ideal, então ligue com antecedência antes de guardar os alimentos.' },
      { question: 'Minha geladeira quebrou. Posso alugar só até o conserto?', answer: 'Sim. Você aluga pelo tempo que precisar e pode renovar o período pelo WhatsApp se o conserto atrasar.' },
      { question: 'As geladeiras são higienizadas?', answer: 'Sim. Todas passam por higienização e teste de funcionamento antes de cada locação.' },
      { question: 'E se a geladeira apresentar defeito durante a locação?', answer: 'Fale com o suporte pelo WhatsApp. Se o problema não for resolvido rapidamente no local, fazemos a substituição do equipamento.' },
      { question: 'Qual a diferença entre alugar geladeira, freezer ou cervejeira?', answer: 'A geladeira guarda comida e bebida em temperatura de refrigerador e tem um congelador menor. O freezer congela ou gela grandes volumes, como bebidas e gelo de uma festa. A cervejeira mantém a cerveja bem gelada sem congelar e mostra as bebidas pela porta de vidro.' },
    ],
    relatedPostSlugs: ['locacao-geladeira-emergencia', 'geladeira-festa-quanto-tempo-antes-reservar', 'checklist-refrigeracao-eventos-rio'],
  },

  freezers: {
    introTitle: 'Aluguel de freezer no Rio de Janeiro',
    intro: [
      'O **aluguel de freezer** é a forma mais simples de gelar bebida em quantidade, guardar gelo e estocar congelados em festas, eventos e comércios. Na Viploc, a locação de freezer é a partir de 1 diária, com entrega e retirada em toda a cidade do Rio de Janeiro e, quando há disponibilidade, entrega no mesmo dia.',
      'O catálogo tem freezers horizontais de [534 litros](/locacao/freezers/freezer-consul-534l-chb53eb) e de [309 litros](/locacao/freezers/freezer-consul-309l-cha31fb), o [freezer vertical de 246 litros](/locacao/freezers/freezer-vertical-consul-246l), com gavetas, e o [Metalfrio de 292 litros com tampa de vidro](/locacao/freezers/freezer-horizontal-vidro-292l-metalfrio), feito para expor e vender sorvetes.',
      'Os freezers chegam higienizados e testados. O orçamento já vem com o valor final, com entrega e retirada incluídas, e o valor varia conforme o bairro.',
    ],
    guideTitle: 'Como escolher o freezer para alugar',
    guide: [
      { title: 'Horizontal ou vertical', text: 'O horizontal tem mais volume útil e segura melhor o frio quando é aberto, por isso é o mais usado para bebidas e gelo. O vertical tem gavetas e ocupa pouco espaço no chão, então funciona melhor para organizar congelados em cozinhas.' },
      { title: 'Tamanho pelo número de convidados', text: 'Uma referência comum é planejar de 4 a 6 latas de 350 ml por adulto que bebe, numa festa de 4 a 5 horas. Assim, o freezer de 309 litros atende algo entre 60 e 90 convidados, e o de 534 litros, entre 110 e 160.' },
      { title: 'Dupla ação', text: 'O [freezer horizontal de 534 litros](/locacao/freezers/freezer-consul-534l-chb53eb) é dupla ação: na posição de refrigerador, gela a cerveja sem congelar; na posição de freezer, congela gelo e alimentos.' },
      { title: 'Tampa de vidro para vender', text: 'Para vender sorvete, picolé ou gelo, o [Metalfrio 292L com tampa de vidro](/locacao/freezers/freezer-horizontal-vidro-292l-metalfrio) deixa o cliente ver o produto sem abrir o freezer.' },
      { title: 'Antecedência', text: 'Aguarde cerca de 2 horas após a entrega para ligar. Bebidas levam horas para gelar, então receba o freezer na véspera ou na manhã do evento. No modo freezer, latas e garrafas esquecidas por muito tempo podem congelar e estourar.' },
      { title: 'Tomada 220V', text: 'Os freezers do catálogo funcionam em 220V. No Rio, muitas tomadas de casa são 127V, então confirme se existe uma tomada 220V no local e evite extensões finas.' },
    ],
    table: {
      title: 'Quantas latas cabem em cada freezer',
      intro: 'Estimativa para planejar a festa. Para um número exato, fale com a gente pelo WhatsApp.',
      headers: ['Freezer', 'Latas de 350 ml', 'Convidados (só bebidas)', 'Melhor uso'],
      rows: [
        ['[Consul 534L horizontal](/locacao/freezers/freezer-consul-534l-chb53eb)', 'cerca de 650', '110 a 160', 'Festas grandes, bebidas e gelo'],
        ['[Consul 309L horizontal](/locacao/freezers/freezer-consul-309l-cha31fb)', 'cerca de 380', '60 a 90', 'Festas em casa e churrascos'],
        ['[Metalfrio 292L tampa de vidro](/locacao/freezers/freezer-horizontal-vidro-292l-metalfrio)', 'não indicado', 'não indicado', 'Venda de sorvete, picolé e gelo'],
        ['[Consul 246L vertical](/locacao/freezers/freezer-vertical-consul-246l)', 'não indicado', 'não indicado', 'Congelados organizados em gavetas'],
      ],
      note: 'Estimativa com latas em pé e sem gelo, usando a referência de 4 a 6 latas por adulto que bebe. O número real muda com a arrumação e com o espaço do compressor.',
    },
    useCasesTitle: 'Quem aluga freezer com a Viploc',
    useCases: [
      { title: 'Festas e casamentos', text: 'Bebida gelada e gelo de sobra do começo ao fim, sem depender de caixas térmicas.' },
      { title: 'Churrascos e aniversários', text: 'Um freezer de 309 litros resolve a maioria das festas em casa.' },
      { title: 'Bares e quiosques', text: 'Estoque extra na alta temporada e nos fins de semana de verão.' },
      { title: 'Buffets e catering', text: 'Congelados e sobremesas guardados perto da cozinha do evento.' },
      { title: 'Venda de sorvete e gelo', text: 'Freezer com tampa de vidro para expor o produto em eventos e feiras.' },
      { title: 'Comércio e estoque', text: 'Capacidade extra durante reformas, mudanças ou datas de pico.' },
    ],
    faqs: [
      { question: 'Freezer horizontal ou vertical: qual alugar?', answer: 'Para bebidas, gelo e grandes volumes, o horizontal. Para organizar congelados em gavetas ocupando pouco espaço no chão, o vertical.' },
      { question: 'Quantas latas cabem em um freezer?', answer: 'Como estimativa, cerca de 380 latas de 350 ml no freezer de 309 litros e cerca de 650 no de 534 litros, com as latas em pé e sem gelo. O número real varia com a arrumação.' },
      { question: 'A cerveja congela no freezer?', answer: 'Pode congelar se ficar muito tempo no modo freezer. No freezer de 534 litros, use a posição de refrigerador para gelar a bebida sem congelar. Nos outros, vá repondo as bebidas ao longo da festa.' },
      { question: 'Com quanto tempo de antecedência devo receber o freezer?', answer: 'O ideal é receber na véspera ou na manhã do evento. Aguarde cerca de 2 horas após a entrega para ligar e coloque as bebidas para gelar logo em seguida.' },
      minimumPeriodFaq('um freezer'),
      sameDayFaq('o freezer'),
      deliveryFaq,
      voltageFaq('dos freezers'),
      { question: 'Vocês alugam freezer para vender sorvete?', answer: 'Sim. O [Metalfrio 292L com tampa de vidro](/locacao/freezers/freezer-horizontal-vidro-292l-metalfrio) é o mais indicado para sorvete, picolé e gelo, porque o cliente vê o produto sem abrir o freezer.' },
    ],
    relatedPostSlugs: ['como-escolher-freezer-horizontal-eventos-rj', 'diferenca-freezer-vertical-horizontal', 'checklist-refrigeracao-eventos-rio'],
  },
};
