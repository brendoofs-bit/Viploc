// Artigos do blog. "content" é Markdown (títulos ##, listas, **negrito** e [links](/locacao/...)).
// Fatos do serviço usados nos textos: só a cidade do Rio de Janeiro, a partir de 1 diária,
// entrega no mesmo dia sujeita a disponibilidade, orçamento com valor final (entrega e retirada incluídas).

const IMG = 'https://res.cloudinary.com/dt8fp7f6t/image/upload';
const IMAGES = {
  festaFreezer: { src: `${IMG}/v1784590460/festa-ar-livre-refeicoes-bebidas-refrigerador-de-gelo-aberto_n3lvxs.webp`, alt: 'Festa ao ar livre com freezer aberto cheio de bebidas geladas' },
  festaTropical: { src: `${IMG}/v1780350882/festa-ao-ar-livre-tropical-convidados-ilha-de-bebidas-ao-por-do-sol_wqjewg.webp`, alt: 'Convidados em festa ao ar livre ao redor de uma ilha de bebidas ao pôr do sol' },
  quiosque: { src: `${IMG}/v1781217697/pessoas-pepegando-bebidas-em-quiosque-de-praia-com-refri-aberto_shkpnq.webp`, alt: 'Pessoas pegando bebidas em um expositor refrigerado de quiosque de praia' },
  equipeVan: { src: `${IMG}/v1780352564/funcionarios-uniforme-van-transporte-comportimento-aberto-equipamento-montanha-rio-de-janeiro_ownivl.webp`, alt: 'Equipe da Viploc com a van de entrega de equipamentos no Rio de Janeiro' },
  geladeiras: { src: `${IMG}/v1780352153/categoria-geladeiras-viploc_dso1sc.png`, alt: 'Geladeiras para locação da Viploc' },
  freezers: { src: `${IMG}/v1780352153/categoria-freezer-viploc_jqndgw.png`, alt: 'Freezers para locação da Viploc' },
  cervejeiras: { src: `${IMG}/v1780352152/categoria-cervejeira-viploc_vgqnow.png`, alt: 'Cervejeiras para locação da Viploc' },
  expositores: { src: `${IMG}/v1780352153/categoria-expositor-bebidas-viploc_bbwl6y.png`, alt: 'Expositores de bebidas para locação da Viploc' },
};

export const blogPosts = [
  {
    slug: 'como-escolher-freezer-horizontal-eventos-rj',
    title: 'Como escolher freezer horizontal para eventos no RJ',
    description: 'Quantas latas cabem, qual tamanho escolher para o número de convidados e os cuidados no dia: guia para alugar freezer horizontal para festas no Rio.',
    date: '2023-10-01',
    updated: '2026-10-24',
    category: 'Freezers',
    tags: ['eventos', 'dicas', 'freezer'],
    image: IMAGES.festaFreezer,
    content: `Em festa no Rio de Janeiro, a bebida esquenta antes do previsto. Caixa térmica com gelo resolve por algumas horas, mas para um evento inteiro o freezer horizontal é a solução mais segura: ele gela grandes volumes, guarda o gelo do bar e aguenta o entra e sai de bebidas sem perder o frio. Este guia mostra como escolher o tamanho certo e como usar o freezer no dia.

## Por que o freezer horizontal funciona melhor em eventos
O freezer horizontal abre por cima. Como o ar frio é mais pesado que o ar quente, ele continua dentro do freezer quando a tampa é aberta, e a temperatura se recupera rápido. Em um freezer vertical, que abre pela frente, o ar frio escapa pela porta a cada abertura.

Ele também tem mais volume útil. Latas, garrafas e sacos de gelo ocupam bem o espaço de um freezer horizontal, enquanto as gavetas de um vertical dividem o volume em partes menores. Se a sua dúvida é entre os dois tipos, veja o artigo [Diferença entre freezer vertical e horizontal](/blog/diferenca-freezer-vertical-horizontal).

## Quantas bebidas você vai precisar
Uma referência comum é planejar de 4 a 6 latas de 350 ml por adulto que bebe, numa festa de 4 a 5 horas. No calor do verão carioca, fique mais perto de 6. Depois some:

- água e refrigerante para quem não bebe álcool e para as crianças;
- o gelo do bar, se houver drinks;
- uma margem de segurança de cerca de 20%, porque sempre aparece mais bebida do que o planejado.

## Qual tamanho escolher
Com essa conta em mãos, compare com a capacidade aproximada de cada freezer:

- **Até cerca de 80 convidados:** o [Freezer Consul 309L](/locacao/freezers/freezer-consul-309l-cha31fb) comporta cerca de 380 latas e cabe bem em varandas e áreas de churrasqueira.
- **De 100 a 160 convidados:** o [Freezer Consul 534L](/locacao/freezers/freezer-consul-534l-chb53eb) comporta cerca de 650 latas e é dupla ação, então também funciona como refrigerador.
- **Acima disso:** combine dois freezers, ou um freezer para o estoque e uma [cervejeira](/locacao/cervejeiras) para servir.

As contagens são estimativas com as latas em pé e sem gelo. O número real muda com a arrumação, com o degrau do compressor e com a quantidade de gelo que você colocar junto.

## Freezer, refrigerador ou cervejeira?
No modo freezer, a bebida gela rápido, mas pode congelar se ficar esquecida. O freezer de 534 litros tem dupla ação: na posição de refrigerador, ele mantém a cerveja gelada sem congelar, o que é útil em festas longas.

Se a festa tem um bar com cerveja sendo servida o tempo todo, a [cervejeira](/locacao/cervejeiras) é a parceira ideal do freezer: o freezer guarda o estoque e o gelo, e a cervejeira deixa as garrafas prontas para servir, à vista dos convidados.

## Onde posicionar
- Escolha um lugar plano, à sombra e longe da churrasqueira ou do fogão.
- Deixe alguns centímetros de folga atrás e dos lados para a ventilação do motor.
- Garanta uma tomada 220V perto do local. No Rio, muitas tomadas de casa são 127V; veja as [dicas de instalação elétrica segura](/blog/dicas-instalacao-eletrica-segura).
- Evite deixar o freezer exposto à chuva em festas ao ar livre.

## Cuidados no dia
- Receba o freezer na véspera ou na manhã do evento e aguarde cerca de 2 horas antes de ligar.
- Coloque as bebidas para gelar logo em seguida. Elas levam algumas horas para chegar à temperatura certa, então não deixe para gelar tudo uma hora antes.
- Reponha as bebidas aos poucos durante a festa, sempre colocando as quentes no fundo e as geladas em cima.
- Mantenha a tampa fechada o máximo possível.

## Como alugar
Na Viploc, o [aluguel de freezer](/locacao/freezers) é a partir de 1 diária, com entrega e retirada em toda a cidade do Rio de Janeiro. O orçamento já vem com o valor final, e, quando há equipamento disponível, a entrega pode ser no mesmo dia. É só chamar no WhatsApp com a data, o bairro e o número de convidados.
`,
  },
  {
    slug: 'geladeira-festa-quanto-tempo-antes-reservar',
    title: 'Geladeira para festa: quanto tempo antes reservar',
    description: 'Com quanta antecedência reservar a geladeira da festa, quando receber, como combinar com freezer e cervejeira e o que conferir antes da entrega no Rio.',
    date: '2023-10-05',
    updated: '2026-10-24',
    category: 'Geladeiras',
    tags: ['festas', 'planejamento', 'geladeira'],
    image: IMAGES.geladeiras,
    content: `Na festa, a geladeira guarda o que não pode esquentar: salgados, doces, sobremesas, frios e parte das bebidas. A geladeira da casa quase nunca dá conta, e o erro mais comum é deixar a reserva do equipamento extra para a última hora. Veja quando reservar, quando receber e o que conferir antes.

## Com quanto tempo de antecedência reservar
Sugerimos reservar com **pelo menos 7 dias de antecedência**. Em algumas épocas, reserve antes ainda:

- **verão**, quando o calor aumenta a procura por refrigeração;
- **fim de ano**, com confraternizações de empresa, Natal e Réveillon;
- **Carnaval** e feriados prolongados.

A Viploc também entrega no mesmo dia quando há equipamento disponível, o que ajuda em imprevistos. Mas reservar antes garante o modelo que você quer na data certa.

## Quando receber a geladeira
O melhor é receber **na véspera** ou **na manhã da festa**. Depois da entrega:

1. aguarde cerca de 2 horas antes de ligar, para o sistema de refrigeração se estabilizar depois do transporte;
2. ligue e espere algumas horas até ela gelar por completo;
3. só então guarde a comida e as bebidas.

Se a festa é à noite, receber de manhã costuma funcionar. Se é cedo, prefira a véspera.

## Geladeira, freezer ou os dois?
Cada equipamento tem uma função na festa:

- **Comida, doces e sobremesas:** [geladeira duplex 375L](/locacao/geladeiras), que tem refrigerador e congelador separados.
- **Muita bebida e gelo:** [freezer horizontal](/locacao/freezers), que gela grandes volumes.
- **Cerveja servida no bar:** [cervejeira](/locacao/cervejeiras), que deixa as garrafas bem geladas e à vista.
- **Camarim, quarto ou mesa de apoio:** [frigobar](/locacao/frigobar/frigobar-consul-117l).

Na maioria das festas em casa, a combinação de geladeira para a comida e freezer para as bebidas resolve tudo. Em casamentos e eventos maiores, acrescente uma cervejeira ou um [expositor de bebidas](/locacao/expositores-de-bebidas) perto do bar. O [checklist de refrigeração para eventos](/blog/checklist-refrigeracao-eventos-rio) ajuda a montar a lista completa.

## Como organizar a geladeira na festa
- Deixe as prateleiras de cima para sobremesas e doces, que precisam de espaço e não podem ser amassados.
- Guarde salgados e frios em travessas tampadas, para não pegar cheiro.
- Use o congelador para gelo e sorvete.
- Evite abrir a porta toda hora: monte as bandejas de reposição de uma vez.

## Antes de fechar a locação
- **Tomada:** as geladeiras do catálogo funcionam em 220V. Confira se há uma tomada 220V perto de onde a geladeira vai ficar.
- **Acesso:** meça portas, corredor e elevador. A geladeira de 375 litros passa na maioria dos acessos residenciais, mas é bom confirmar.
- **Espaço:** deixe alguns centímetros de folga atrás e dos lados para a ventilação.
- **Bairro e horário:** informe o endereço e a janela de horário. O orçamento já vem com o valor final, com entrega e retirada incluídas.

## Quanto tempo alugar
Para festas, a diária ou o fim de semana costumam bastar. A locação é a partir de 1 diária, e a retirada é combinada para o dia seguinte ao evento ou para quando for melhor para você.

Veja os modelos disponíveis em [aluguel de geladeira](/locacao/geladeiras) e peça o orçamento pelo WhatsApp.
`,
  },
  {
    slug: 'cervejeira-bar-eventos-vantagens',
    title: 'Cervejeira para bar e eventos: vantagens e cuidados',
    description: 'Por que alugar cervejeira para o bar do evento, qual modelo escolher (410L, 570L ou Full Black) e como manter a cerveja bem gelada sem congelar.',
    date: '2023-10-10',
    updated: '2026-10-24',
    category: 'Cervejeiras',
    tags: ['cerveja', 'bar', 'eventos'],
    image: IMAGES.cervejeiras,
    content: `Cerveja quente é a reclamação mais comum em festa. A cervejeira resolve esse problema de um jeito que geladeira e freezer não resolvem: ela mantém a cerveja bem gelada o tempo todo, sem congelar, e ainda deixa as garrafas à vista pela porta de vidro. Veja quando vale alugar uma e como escolher o modelo.

## O que é uma cervejeira
A cervejeira é um refrigerador vertical feito para bebidas. Ela trabalha com temperaturas mais baixas que uma geladeira comum, controladas por um termostato ou controlador eletrônico, e tem porta de vidro e prateleiras para garrafas e latas.

A diferença para o freezer está no controle: no freezer, a cerveja esquecida pode congelar e estourar; na cervejeira, a temperatura fica estável no ponto certo para servir.

## Vantagens no bar e em eventos
- **Cerveja sempre pronta para servir:** o bartender pega a garrafa já gelada, sem esperar.
- **Exposição:** a porta de vidro mostra as marcas e ajuda a vender em bares e quiosques.
- **Organização:** prateleiras separam tipos de cerveja, refrigerantes e águas.
- **Menos gelo:** a cervejeira reduz a dependência de gelo para manter as bebidas na temperatura.
- **Visual:** modelos pretos e com iluminação combinam com bares, camarotes e eventos mais elegantes.

## Qual modelo escolher
O catálogo da Viploc tem três cervejeiras Gelopar:

- **[Cervejeira Gelopar 410L](/locacao/cervejeiras/cervejeira-gelopar-410l-grba400):** branca, de tamanho médio, boa para festas, food trucks e serviços de bar menores.
- **[Cervejeira Gelopar 570L](/locacao/cervejeiras/cervejeira-gelopar-570l-pr):** preta, com controlador eletrônico e mais capacidade, indicada para bares, festas grandes e eventos esportivos.
- **[Cervejeira Gelopar Full Black 570L](/locacao/cervejeiras/cervejeira-gelopar-full-black-570l):** toda preta e com iluminação em LED, para camarotes, eventos premium e bares sofisticados.

Para festas grandes, a combinação mais eficiente é **cervejeira para servir e freezer para o estoque**. O [freezer horizontal](/locacao/freezers) guarda as caixas e o gelo, e a cervejeira é reabastecida aos poucos. O artigo [Como escolher freezer horizontal para eventos](/blog/como-escolher-freezer-horizontal-eventos-rj) ajuda a calcular o volume de bebidas.

## Cervejeira ou expositor de bebidas?
Os dois têm porta de vidro, mas a cervejeira trabalha mais fria e é pensada para cerveja. O [expositor de bebidas](/locacao/expositores-de-bebidas) é ideal para refrigerantes, águas, sucos e produtos variados em pontos de venda. Se o foco é cerveja bem gelada, escolha a cervejeira. Se o foco é vender um mix de bebidas, o expositor costuma ser melhor. Veja mais em [Expositor de bebidas: ideal para eventos e pontos de venda](/blog/expositor-de-bebidas-ideal).

## Cuidados para a cerveja ficar no ponto
- **Ligue com antecedência:** aguarde cerca de 2 horas após a entrega para ligar e coloque as bebidas para gelar logo depois. Receber na véspera ou na manhã do evento é o ideal.
- **Não lote as prateleiras:** deixe espaço para o ar frio circular entre as garrafas.
- **Reponha aos poucos:** coloque as bebidas quentes no fundo e as geladas na frente.
- **Abra a porta só o necessário:** cada abertura longa faz a temperatura subir.
- **Posicione bem:** longe do sol direto e da churrasqueira, com folga atrás para a ventilação.
- **Tomada 220V:** as cervejeiras do catálogo funcionam em 220V. Confira a tomada antes da entrega.

## Como alugar
A [locação de cervejeira](/locacao/cervejeiras) na Viploc é a partir de 1 diária, com entrega e retirada em toda a cidade do Rio de Janeiro. O orçamento já vem com o valor final e, quando há equipamento disponível, a entrega pode ser no mesmo dia. Chame no WhatsApp com a data, o bairro e o tamanho do evento.
`,
  },
  {
    slug: 'locacao-geladeira-emergencia',
    title: 'Locação de geladeira em emergência: o que considerar',
    description: 'Sua geladeira quebrou? Veja o que fazer nas primeiras horas, como alugar uma geladeira com entrega no mesmo dia no Rio e por quanto tempo vale alugar.',
    date: '2023-10-15',
    updated: '2026-10-24',
    category: 'Geladeiras',
    tags: ['emergência', 'doméstico', 'dicas'],
    image: IMAGES.geladeiras,
    content: `Geladeira quebrada com comida dentro é uma corrida contra o relógio. O conserto pode levar dias, a peça pode demorar e a compra de uma geladeira nova nem sempre chega rápido. Alugar uma geladeira nesse intervalo evita perder alimentos e mantém a rotina da casa. Veja o que fazer e como funciona a locação de emergência.

## O que fazer nas primeiras horas
- **Mantenha a porta fechada.** Uma geladeira fechada segura o frio por mais algumas horas. Cada abertura acelera a perda de temperatura.
- **Separe o que estraga primeiro.** Carnes, peixes, laticínios, ovos e comida pronta são os mais sensíveis.
- **Use caixas térmicas com gelo** para o que for mais perecível, se tiver em casa.
- **Desconfie do que esquentou.** Alimentos perecíveis que ficaram muito tempo fora da refrigeração podem não ser seguros. Na dúvida, descarte.
- **Chame o técnico e a locação ao mesmo tempo.** Enquanto você descobre o defeito, a geladeira alugada já pode estar a caminho.

## Como funciona a locação de emergência
Na Viploc, a [locação de geladeira](/locacao/geladeiras) é feita pelo WhatsApp:

1. você informa o bairro, o endereço e o período que imagina precisar;
2. recebe o orçamento com o valor final, com entrega e retirada incluídas;
3. aprova e combinamos o horário da entrega.

Quando há equipamento disponível, entregamos **no mesmo dia** em toda a cidade do Rio de Janeiro. O atendimento comercial funciona de segunda a sexta, das 8h às 18h, e aos sábados, das 8h às 12h. Quanto mais cedo você chamar, maior a chance de receber no mesmo dia.

## Qual geladeira escolher
O catálogo tem dois modelos duplex de 375 litros, com refrigerador e congelador separados:

- **[Geladeira Frost Free Brastemp 375L](/locacao/geladeiras/geladeira-frost-free-brastemp-375l)**
- **[Geladeira Consul Duplex 375L](/locacao/geladeiras/geladeira-consul-duplex-375l)**

As duas são Frost Free, então não acumulam gelo e não precisam ser descongeladas durante a locação. Uma geladeira de 375 litros dá conta da rotina de uma família de 4 ou 5 pessoas.

## Por quanto tempo alugar
- **Conserto rápido:** alugue por alguns dias. A locação é a partir de 1 diária, e você pode renovar pelo WhatsApp se o técnico atrasar.
- **Espera pela peça ou pela compra da geladeira nova:** a locação por semana costuma sair mais em conta que a diária.
- **Reforma de cozinha ou mudança:** a locação por mês cobre o período inteiro sem que você precise comprar um eletrodoméstico.

## O que conferir antes da entrega
- **Tomada 220V:** as geladeiras do catálogo funcionam em 220V. No Rio, muitas tomadas de casa são 127V, então confirme se há uma tomada 220V perto do lugar da geladeira. Veja as [dicas de instalação elétrica segura](/blog/dicas-instalacao-eletrica-segura).
- **Acesso:** meça a porta, o corredor e o elevador.
- **Espaço:** se a geladeira quebrada vai continuar no lugar até o conserto, separe outro canto com folga atrás e dos lados para a ventilação.

## Depois da entrega
1. Aguarde cerca de 2 horas antes de ligar, para o sistema se estabilizar depois do transporte.
2. Ligue e espere algumas horas até ela gelar.
3. Passe os alimentos das caixas térmicas para a geladeira alugada, começando pelos mais perecíveis.

Se precisar de mais espaço para congelados durante a emergência, um [freezer vertical](/locacao/freezers/freezer-vertical-consul-246l) também pode ser alugado junto. Tire suas dúvidas sobre entrega e retirada no [FAQ de prazos e entrega](/blog/faq-completo-prazos-entrega-rj).
`,
  },
  {
    slug: 'expositor-de-bebidas-ideal',
    title: 'Expositor de bebidas: ideal para eventos e pontos de venda',
    description: 'Como o expositor de bebidas ajuda a vender em quiosques, lojas e eventos, qual tamanho escolher (96L, 410L ou 570L) e como organizar as prateleiras.',
    date: '2023-10-20',
    updated: '2026-10-24',
    category: 'Expositores',
    tags: ['vendas', 'expositor', 'comércio'],
    image: IMAGES.quiosque,
    content: `Quem vende bebida sabe: o cliente compra o que vê. O expositor de bebidas, com porta de vidro e prateleiras iluminadas, deixa os produtos à vista e na temperatura certa, o que ajuda a vender em quiosques, lojas, lanchonetes e eventos. Veja quando ele vale a pena e como escolher o tamanho.

## O que é um expositor de bebidas
É um refrigerador vertical com porta de vidro, feito para guardar e mostrar bebidas e produtos refrigerados. Diferente da geladeira comum, ele foi pensado para abrir e fechar muitas vezes ao dia e para deixar tudo visível sem que o cliente precise abrir a porta para escolher.

## Por que o expositor ajuda a vender
- **Compra por impulso:** a bebida gelada à vista chama o cliente, principalmente no calor do Rio.
- **Escolha mais rápida:** o cliente vê as opções e decide antes de abrir a porta, o que agiliza a fila.
- **Organização por marca e preço:** prateleiras separam refrigerantes, águas, sucos e energéticos.
- **Menos perda de frio:** com a escolha feita do lado de fora, a porta fica menos tempo aberta.
- **Apresentação:** em ações de marca e lançamentos, o expositor vira parte da vitrine.

## Onde o expositor é mais usado
- quiosques de praia e lanchonetes na alta temporada;
- lojas e mercados que precisam de capacidade extra no verão;
- eventos com venda de bebidas, feiras e festivais;
- ações promocionais e lançamentos de produtos;
- festas corporativas, com bebidas à disposição dos convidados.

## Qual tamanho escolher
O catálogo da Viploc tem três expositores:

- **[Expositor de Bebidas Midea Flex 96L](/locacao/expositores-de-bebidas/expositora-midea-flex-96l):** compacto e preto, cabe embaixo de balcões. Bom para drink bars, camarins e degustações.
- **[Expositor Gelopar 410L](/locacao/expositores-de-bebidas/expositor-gelopar-410l-gptu40):** tamanho médio, para sucos, refrigerantes, águas e sobremesas em quiosques, pontos de venda e festas corporativas.
- **[Expositor de Bebidas Gelopar 570L](/locacao/expositores-de-bebidas/expositor-gelopar-570l-br):** o maior, para comércios e eventos com alto volume de venda.

Se o espaço é pequeno, comece pelo Midea. Se a venda é o foco do evento, o de 570 litros reduz a quantidade de reposições ao longo do dia.

## Expositor ou cervejeira?
A [cervejeira](/locacao/cervejeiras) trabalha mais fria e é pensada para servir cerveja bem gelada. O expositor é melhor para um mix de bebidas e produtos. Em eventos grandes, é comum usar os dois: a cervejeira no bar e o expositor no ponto de venda de refrigerantes e águas. Saiba mais em [Cervejeira para bar e eventos](/blog/cervejeira-bar-eventos-vantagens).

## Como organizar as prateleiras
- Coloque os produtos que mais vendem na altura dos olhos.
- Agrupe por tipo: águas, refrigerantes, sucos, energéticos.
- Deixe os rótulos virados para a frente.
- Não lote: o ar frio precisa circular entre os produtos.
- Reponha colocando os produtos quentes no fundo e os gelados na frente.
- Para o estoque, use um [freezer horizontal](/locacao/freezers) ou uma geladeira de apoio, e reabasteça o expositor ao longo do dia.

## Cuidados com a instalação
- Posicione longe do sol direto e de fontes de calor.
- Deixe folga atrás e dos lados para a ventilação.
- Os expositores do catálogo funcionam em 220V; confira a tomada antes da entrega.
- Aguarde cerca de 2 horas após a entrega para ligar e espere ele gelar antes de abastecer.

## Como alugar
O [aluguel de expositor de bebidas](/locacao/expositores-de-bebidas) na Viploc é a partir de 1 diária, com entrega e retirada em toda a cidade do Rio de Janeiro. Também alugamos por semana ou por mês, o que ajuda comércios na alta temporada. O orçamento já vem com o valor final; é só chamar no WhatsApp.
`,
  },
  {
    slug: 'checklist-refrigeracao-eventos-rio',
    title: 'Checklist de refrigeração para eventos no Rio',
    description: 'Checklist completo para planejar a refrigeração do seu evento no Rio: público, bebidas, gelo, equipamentos, tomadas, entrega e retirada.',
    date: '2023-10-25',
    updated: '2026-10-24',
    category: 'Eventos',
    tags: ['eventos', 'planejamento', 'rj'],
    image: IMAGES.festaTropical,
    content: `No calor do Rio, a refrigeração define boa parte do sucesso de um evento. Faltar gelo, esquentar a cerveja ou perder um doce por falta de geladeira são problemas que um bom planejamento evita. Use este checklist para dimensionar os equipamentos da sua festa, casamento ou evento corporativo.

## 1. Defina o tamanho do evento
- **Número de convidados**, separando adultos que bebem, quem não bebe e crianças.
- **Duração**, em horas. Uma festa de 8 horas consome bem mais que uma de 4.
- **Horário e local.** Evento de dia e ao ar livre esquenta mais as bebidas que evento noturno em salão.
- **Época do ano.** No verão, aumente as quantidades.

## 2. Calcule bebidas e gelo
- Uma referência comum é planejar de **4 a 6 latas de 350 ml por adulto que bebe** em uma festa de 4 a 5 horas.
- Some água e refrigerante para todos os convidados.
- Se houver drinks, calcule o gelo do bar à parte.
- Acrescente uma margem de cerca de **20%**.

## 3. Escolha os equipamentos
Cada equipamento tem uma função:

- **[Freezer horizontal](/locacao/freezers):** estoque de bebidas e gelo. O de 309 litros comporta cerca de 380 latas e o de 534 litros, cerca de 650.
- **[Cervejeira](/locacao/cervejeiras):** cerveja bem gelada e pronta para servir no bar.
- **[Expositor de bebidas](/locacao/expositores-de-bebidas):** refrigerantes, águas e sucos à vista, bom para pontos de venda.
- **[Geladeira](/locacao/geladeiras):** comida, doces, sobremesas e frios.
- **[Frigobar](/locacao/frigobar/frigobar-consul-117l):** camarim, noivos, palco ou mesa de apoio.
- **[Purificador de água](/locacao/purificador-de-agua/purificador-consul-bivolt):** água para a equipe e os convidados.

Uma combinação comum em festas de médio porte é: um freezer para o estoque, uma cervejeira no bar e uma geladeira para a cozinha. Em eventos grandes, multiplique o freezer e acrescente um expositor.

## 4. Confira o espaço
- Meça portas, corredores, elevadores e escadas por onde os equipamentos vão passar.
- Reserve um lugar plano, à sombra e protegido da chuva para cada equipamento.
- Deixe folga atrás e dos lados para a ventilação.
- Mantenha os equipamentos longe da churrasqueira, do fogão e do palco.

## 5. Confira a parte elétrica
- Os equipamentos de refrigeração do catálogo funcionam em **220V**. Confirme se o local tem tomadas 220V suficientes.
- Prefira uma tomada para cada equipamento. Evite benjamins e extensões finas.
- Converse com o responsável pelo salão ou pelo som para não sobrecarregar o mesmo circuito.
- Veja as [dicas de instalação elétrica segura](/blog/dicas-instalacao-eletrica-segura).

## 6. Planeje a entrega
- **Reserve com antecedência**, de preferência uma semana antes, e mais cedo no verão, no fim de ano e no Carnaval.
- **Receba na véspera ou na manhã do evento.** Os equipamentos precisam de cerca de 2 horas de descanso antes de ligar e de algumas horas para gelar.
- **Combine quem recebe** e o melhor horário de acesso ao local.
- **Combine a retirada**, normalmente no dia seguinte ao evento.

## 7. No dia do evento
- Ligue os equipamentos assim que o tempo de descanso terminar.
- Coloque as bebidas para gelar logo em seguida.
- Defina uma pessoa para repor as bebidas e manter as tampas e portas fechadas.
- Tenha o WhatsApp do suporte à mão para qualquer imprevisto.

## 8. Depois do evento
- Esvazie os equipamentos antes do horário da retirada.
- Deixe o acesso livre para a equipe.

## Como a Viploc ajuda
A Viploc aluga todos esses equipamentos a partir de 1 diária, com entrega e retirada em toda a cidade do Rio de Janeiro. O orçamento já vem com o valor final, e, quando há equipamento disponível, a entrega pode ser no mesmo dia. Mande pelo WhatsApp a data, o bairro e o número de convidados que ajudamos a montar a combinação certa. Veja todo o catálogo em [locação de equipamentos](/locacao).
`,
  },
  {
    slug: 'como-economizar-com-locacao-custo-beneficio',
    title: 'Como economizar com locação (custo-benefício)',
    description: 'Quando alugar geladeira, freezer ou cervejeira sai mais barato que comprar, quais custos a locação evita e como escolher o período certo.',
    date: '2023-11-01',
    updated: '2026-10-24',
    category: 'Economia',
    tags: ['custo-benefício', 'aluguel', 'economia'],
    image: IMAGES.expositores,
    content: `Comprar uma geladeira, um freezer ou uma cervejeira para usar alguns dias ou meses raramente compensa. Além do preço do aparelho, existem custos que só aparecem depois: transporte, manutenção, espaço para guardar e a desvalorização. Veja quando a locação é a escolha mais econômica e como aproveitar melhor.

## Os custos que a compra esconde
- **Preço do equipamento:** o maior gasto, pago de uma vez, mesmo que você use poucas vezes.
- **Transporte:** levar um freezer ou uma cervejeira até o evento e trazer de volta exige frete.
- **Manutenção:** um defeito fora da garantia é por sua conta.
- **Espaço:** depois do evento, o equipamento precisa ficar guardado em algum lugar.
- **Desvalorização:** um equipamento usado vale bem menos na revenda.
- **Tempo:** pesquisar, comprar, receber, instalar e depois vender ou guardar.

Na locação, você paga só pelo período de uso, e o equipamento chega higienizado, testado e com suporte.

## Quando alugar é a melhor escolha
- **Festas e eventos:** casamentos, aniversários, formaturas e confraternizações que acontecem uma vez.
- **Reforma de cozinha:** a casa precisa de geladeira por algumas semanas ou meses.
- **Geladeira quebrada:** enquanto o conserto ou a compra não sai. Veja [o que fazer em uma emergência](/blog/locacao-geladeira-emergencia).
- **Imóveis de temporada:** equipar um apartamento por um período curto.
- **Picos de venda:** quiosques, bares e lojas que precisam de capacidade extra no verão.
- **Obras e produções:** refeitórios de canteiro, gravações, feiras e stands.

## Quando comprar faz mais sentido
Se o equipamento vai ser usado todos os dias por anos, comprar costuma ser melhor. A locação é ideal para o que é temporário, sazonal ou incerto, e para testar um tamanho de equipamento antes de decidir uma compra.

## Como pagar menos na locação
- **Escolha o período certo.** A locação é a partir de 1 diária, mas, se você vai usar por mais tempo, pergunte pelos valores por semana ou por mês, que costumam sair mais em conta por dia.
- **Dimensione bem.** Um freezer grande demais custa mais do que o necessário; um pequeno demais obriga a alugar outro às pressas. Use o guia de [como escolher freezer horizontal](/blog/como-escolher-freezer-horizontal-eventos-rj) para acertar o tamanho.
- **Combine os equipamentos em um só pedido.** Geladeira, freezer e cervejeira entregues juntos simplificam a logística.
- **Reserve com antecedência.** Garante o modelo certo e evita soluções de última hora.
- **Compare o valor final.** Na Viploc, o orçamento já vem com o valor final, com entrega e retirada incluídas, então não há surpresa no fim.

## O que está incluso na locação da Viploc
- entrega e retirada no endereço, em toda a cidade do Rio de Janeiro;
- equipamento higienizado e testado antes de cada locação;
- suporte pelo WhatsApp e substituição do equipamento se um defeito não puder ser resolvido rapidamente;
- entrega no mesmo dia, quando há equipamento disponível.

## Comece pelo catálogo
Veja todos os equipamentos em [locação de equipamentos](/locacao): [geladeiras](/locacao/geladeiras), [freezers](/locacao/freezers), [cervejeiras](/locacao/cervejeiras), [expositores de bebidas](/locacao/expositores-de-bebidas), frigobares, micro-ondas, purificadores e TVs. Depois, é só pedir o orçamento pelo WhatsApp.
`,
  },
  {
    slug: 'diferenca-freezer-vertical-horizontal',
    title: 'Diferença entre freezer vertical e horizontal',
    description: 'Freezer vertical ou horizontal? Compare capacidade, espaço, organização e consumo de frio e veja qual alugar para festa, cozinha ou venda de sorvete.',
    date: '2023-11-05',
    updated: '2026-10-24',
    category: 'Freezers',
    tags: ['freezer', 'dicas', 'comparativo'],
    image: IMAGES.freezers,
    content: `Os dois congelam, mas foram feitos para usos diferentes. Escolher o tipo certo evita falta de espaço na festa, bagunça na cozinha ou um freezer ocupando mais área do que o local comporta. Veja as diferenças e qual alugar em cada situação.

## Freezer horizontal
O freezer horizontal tem formato de baú e abre por cima.

- **Segura melhor o frio:** como o ar frio é mais pesado, ele continua dentro do freezer quando a tampa é aberta.
- **Mais volume útil:** cabe mais lata, garrafa, saco de gelo e caixa grande.
- **Ocupa mais área no chão** e exige espaço para abrir a tampa.
- **Itens ficam empilhados:** para pegar o que está no fundo, é preciso tirar o que está em cima.

É o indicado para festas, eventos, bares, quiosques e estoque de bebidas e gelo.

No catálogo da Viploc:
- [Freezer Consul 534L](/locacao/freezers/freezer-consul-534l-chb53eb): o maior, com dupla ação (freezer ou refrigerador);
- [Freezer Consul 309L](/locacao/freezers/freezer-consul-309l-cha31fb): tamanho médio, ideal para festas em casa e churrascos;
- [Freezer Metalfrio 292L com tampa de vidro](/locacao/freezers/freezer-horizontal-vidro-292l-metalfrio): feito para expor e vender sorvete, picolé e gelo.

## Freezer vertical
O freezer vertical tem formato de geladeira, abre pela frente e tem gavetas.

- **Ocupa pouco espaço no chão:** cabe em cozinhas e áreas de serviço apertadas.
- **Organização por gavetas:** fica fácil achar porções, carnes e congelados.
- **Acesso rápido:** ideal para quem abre o freezer muitas vezes ao dia.
- **Perde mais frio a cada abertura,** porque o ar frio escapa pela porta.

É o indicado para cozinhas de restaurantes, buffets, refeitórios e uso doméstico.

No catálogo da Viploc: [Freezer Vertical Consul 246L](/locacao/freezers/freezer-vertical-consul-246l).

## Comparação rápida
- **Capacidade para bebidas:** horizontal leva vantagem.
- **Espaço no chão:** vertical ocupa menos.
- **Organização:** vertical, por causa das gavetas.
- **Manter o frio com a tampa ou a porta abrindo muito:** horizontal.
- **Venda de sorvete:** horizontal com tampa de vidro.

## Qual escolher em cada situação
- **Festa, casamento ou churrasco:** horizontal. Use o guia de [como escolher freezer horizontal para eventos](/blog/como-escolher-freezer-horizontal-eventos-rj) para acertar o tamanho.
- **Bar ou quiosque na alta temporada:** horizontal para o estoque, combinado com uma [cervejeira](/locacao/cervejeiras) ou um [expositor](/locacao/expositores-de-bebidas) para servir.
- **Cozinha de restaurante ou buffet:** vertical, pela organização.
- **Estoque de congelados em casa durante uma reforma:** vertical, que ocupa menos espaço.
- **Venda de sorvete, picolé ou gelo:** horizontal com tampa de vidro.

## Cuidados que valem para os dois
- Aguarde cerca de 2 horas após a entrega para ligar.
- Deixe folga atrás e dos lados para a ventilação.
- Os freezers do catálogo funcionam em 220V. Confira a tomada e evite extensões finas.
- Mantenha longe do sol direto e de fontes de calor.

## Como alugar
O [aluguel de freezer](/locacao/freezers) na Viploc é a partir de 1 diária, com entrega e retirada em toda a cidade do Rio de Janeiro. O orçamento já vem com o valor final e, quando há equipamento disponível, a entrega pode ser no mesmo dia.
`,
  },
  {
    slug: 'dicas-instalacao-eletrica-segura',
    title: 'Dicas de instalação elétrica segura',
    description: 'Como ligar geladeira, freezer e cervejeira com segurança: tomada 220V, extensões, benjamins, circuitos, áreas externas e tempo de espera após o transporte.',
    date: '2023-11-10',
    updated: '2026-10-24',
    category: 'Segurança',
    tags: ['instalação', 'dicas', 'segurança'],
    image: IMAGES.equipeVan,
    content: `Equipamentos de refrigeração funcionam o tempo todo e precisam de uma instalação elétrica adequada. Uma tomada errada, uma extensão fina ou um circuito sobrecarregado podem desligar o equipamento no meio da festa ou causar um acidente. Veja como ligar geladeiras, freezers, cervejeiras e expositores com segurança.

## 1. Confira a voltagem da tomada
As geladeiras, freezers, cervejeiras, expositores e o frigobar do catálogo da Viploc funcionam em **220V**. Já as TVs e o purificador de água são **bivolt**.

No Rio de Janeiro, muitas tomadas residenciais são **127V**. Ligar um equipamento 220V numa tomada 127V faz ele funcionar mal ou nem ligar. Antes da entrega:

- confira se há tomadas 220V no local, de preferência com a voltagem identificada;
- na dúvida, peça para um eletricista ou para o responsável pelo salão confirmar;
- se o local só tiver tomadas 127V, resolva isso com um eletricista antes do evento.

## 2. Uma tomada para cada equipamento
- **Evite benjamins e "Ts".** Eles esquentam com equipamentos de alto consumo e podem causar mau contato.
- **Evite ligar vários equipamentos de refrigeração na mesma tomada.**
- **Use tomadas firmes,** que seguram bem o plugue. Tomada frouxa esquenta.

## 3. Cuidado com extensões
Se a tomada estiver longe, a extensão precisa ser adequada para a potência do equipamento:

- use extensão de fio grosso, feita para equipamentos de maior consumo;
- desenrole a extensão por completo, porque o cabo enrolado esquenta;
- não passe a extensão por baixo de tapetes, em áreas de passagem ou em poças de água;
- evite emendas.

Extensões finas, dessas usadas para abajur e carregador, não servem para geladeira, freezer ou cervejeira.

## 4. Não sobrecarregue o circuito
Em festas, é comum ligar som, iluminação, chopeira, micro-ondas e equipamentos de refrigeração no mesmo circuito. Isso pode desarmar o disjuntor.

- Converse com o responsável pelo local sobre quais tomadas estão em circuitos diferentes.
- Separe os equipamentos de refrigeração do som e da iluminação, quando possível.
- Saiba onde fica o quadro de disjuntores e quem pode religar um disjuntor se precisar.

## 5. Áreas externas e chuva
- Proteja equipamentos e tomadas da chuva e de respingos.
- Não deixe extensões e plugues no chão molhado.
- Prefira lugares cobertos, à sombra e com piso nivelado.

## 6. Espere antes de ligar
Depois do transporte, aguarde **cerca de 2 horas** antes de ligar geladeiras, freezers, cervejeiras e expositores. Isso dá tempo para o sistema de refrigeração se estabilizar. Por isso, o ideal é receber os equipamentos na véspera ou na manhã do evento.

## 7. Ventilação também é segurança
- Deixe alguns centímetros de folga atrás e dos lados de cada equipamento.
- Não encoste o equipamento em paredes quentes, fornos ou churrasqueiras.
- Não cubra o equipamento com toalhas ou decoração.

Um motor sem ventilação trabalha mais, esquenta e gela menos.

## 8. Se algo der errado
- Se o equipamento não ligar, confira a tomada com outro aparelho e veja se algum disjuntor desarmou.
- Se sentir cheiro de queimado ou ver o plugue esquentando, desligue da tomada.
- Chame o suporte da Viploc pelo WhatsApp. Se o problema não puder ser resolvido rapidamente, fazemos a substituição do equipamento.

## Planeje junto com a locação
Ao pedir o orçamento, informe onde os equipamentos vão ficar e quais tomadas existem no local. Isso ajuda a escolher a combinação certa. O [checklist de refrigeração para eventos](/blog/checklist-refrigeracao-eventos-rio) reúne todos os pontos para planejar a festa, e o catálogo completo está em [locação de equipamentos](/locacao).
`,
  },
  {
    slug: 'faq-completo-prazos-entrega-rj',
    title: 'FAQ completo: prazos, entrega e retirada no RJ',
    description: 'Respostas sobre a locação na Viploc: onde entregamos, entrega no mesmo dia, valor do frete, período mínimo, horários, retirada, higienização e suporte.',
    date: '2023-11-15',
    updated: '2026-10-24',
    category: 'Guia',
    tags: ['faq', 'suporte', 'rj'],
    image: IMAGES.equipeVan,
    content: `Reunimos aqui as perguntas mais comuns sobre como funciona a locação na Viploc, da reserva à retirada. Se a sua dúvida não estiver na lista, chame a gente no WhatsApp.

## Onde vocês entregam?
Entregamos e retiramos em **toda a cidade do Rio de Janeiro**: Zona Sul, Zona Norte, Zona Oeste e Centro. Veja as [áreas atendidas](/rio-de-janeiro).

## Vocês entregam no mesmo dia?
Sim, **quando há equipamento disponível**. Quanto mais cedo você chamar, maior a chance de receber no mesmo dia. Para eventos, o mais seguro é reservar com antecedência e agendar a entrega para a data certa.

## Com quanta antecedência devo reservar?
Para eventos, recomendamos reservar com **pelo menos 7 dias de antecedência**, e mais cedo no verão, no fim de ano e no Carnaval. Para emergências, como geladeira quebrada, chame assim que precisar. Veja [quanto tempo antes reservar a geladeira da festa](/blog/geladeira-festa-quanto-tempo-antes-reservar).

## Como é calculado o frete?
O valor da entrega e da retirada varia conforme o bairro, mas **o orçamento já vem com o valor final**, com entrega e retirada incluídas. Não há cobrança separada de frete depois.

## Qual é o período mínimo de locação?
A partir de **1 diária**. Também alugamos por fim de semana, por semana e por mês. Períodos mais longos costumam sair mais em conta por dia.

## Posso renovar o período?
Sim. Se precisar ficar mais tempo com o equipamento, avise pelo WhatsApp antes da data de retirada.

## Como faço a reserva?
1. Chame no WhatsApp e informe o equipamento, a data, o bairro e o período.
2. Receba o orçamento com o valor final.
3. Aprove e combine o horário de entrega.

## Qual o horário de atendimento?
O atendimento comercial funciona de **segunda a sexta, das 8h às 18h**, e aos **sábados, das 8h às 12h**.

## Preciso estar no local na entrega?
Sim, alguém precisa receber o equipamento e indicar onde ele vai ficar. Combine com antecedência o acesso ao prédio, salão ou casa, principalmente em condomínios que exigem autorização.

## Quanto tempo depois da entrega posso ligar o equipamento?
Aguarde **cerca de 2 horas** antes de ligar geladeiras, freezers, cervejeiras e expositores. Depois, eles levam algumas horas para gelar. Por isso, para eventos, o ideal é receber na véspera ou na manhã do dia.

## Qual a voltagem dos equipamentos?
Geladeiras, freezers, cervejeiras, expositores e frigobar funcionam em **220V**. TVs e o purificador de água são **bivolt**. Confira as tomadas do local antes da entrega; veja as [dicas de instalação elétrica segura](/blog/dicas-instalacao-eletrica-segura).

## Os equipamentos são higienizados?
Sim. Todos passam por higienização e teste de funcionamento antes de cada locação.

## E se o equipamento apresentar defeito?
Fale com o suporte pelo WhatsApp. Se o problema não puder ser resolvido rapidamente no local, fazemos a substituição do equipamento.

## Como funciona a retirada?
A retirada é agendada para o fim do período contratado. Antes do horário combinado:

- esvazie o equipamento;
- desligue da tomada;
- deixe o acesso livre para a equipe.

## Vocês atendem empresas?
Sim. Atendemos eventos corporativos, comércios, obras, produções e escritórios, com locação por diária, semana ou mês.

## Quais equipamentos vocês alugam?
[Geladeiras](/locacao/geladeiras), [freezers](/locacao/freezers), [cervejeiras](/locacao/cervejeiras), [expositores de bebidas](/locacao/expositores-de-bebidas), [frigobares](/locacao/frigobar), [micro-ondas](/locacao/micro-ondas), [purificadores de água](/locacao/purificador-de-agua) e [TVs](/locacao/tv). Veja o catálogo completo em [locação de equipamentos](/locacao).
`,
  },
];

export type BlogPost = (typeof blogPosts)[number];

// Tempo de leitura estimado (200 palavras por minuto).
export const readingMinutes = (content: string) => Math.max(1, Math.round(content.split(/\s+/).filter(Boolean).length / 200));
