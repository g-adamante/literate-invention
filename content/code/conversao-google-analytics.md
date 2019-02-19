---
title: "O Guia Completo das Conversões no Google Analytics"
date: 2018-11-05T16:49:03+02:00
draft: false
description: "Guia que vai de instalação de tags de conversão utilizando os principais métodos, até temas complexos como modelos de atribuição de conversão."
H1: "O Guia Completo das Conversões no Google Analytics"
SEOTitle: "O Guia Completo das Conversões no Google Analytics"
metaDescription: "Guia que vai de instalação de tags de conversão utilizando os principais métodos, até temas complexos como modelos de atribuição de conversão."
toc: true
---
Quero que você saia dessa página sabendo **tudo o que eu sei sobre as conversões do Google Analytics.**

Esse é um guia completo, que vai de instalação de tags de conversão utilizando os principais métodos, até temas complexos como modelos de atribuição de conversão.

Se você já tem conversões instaladas em seu site e quer saber como usar elas como um profissional, [clique aqui](#) para pular para essa parte do texto. 

Eu também coloquei um **bônus no fim, para usar as conversões com 101% de eficiência**.


Por que tanto ênfase em conversões?

**POR QUE CONVERSÕES SÃO A PARTE MAIS IMPORTANTE DE WEB ANALYTICS**

e também....

**MAIS FACILMENTE IGNORADAS!**

Eu já vi casos de pessoas investindo milhares de reais em Adwords sem medir conversões. 
😠😠😠

Se for pra fazer isso, é melhor queimar seu dinheiro logo.

 ![QUeimando Dinheiro](/../img/burning-money.gif)  

Se você está rodando qualquer tipo de campanha online, produzindo qualquer tipo de conteúdo... você precisa medir suas conversões.

Vou ser mais ousado: **se você tem um site**,

**você precisa medir conversões**.

Se você me conhece na vida real, saiba que aqui este é o momento que eu estaria vermelho..
Exaltado. Enfâtico. 

-**(Eu)** MEÇA AS PORRAS DAS CONVERSÕES, PORRA!

-**(Você)** *Ok, seu maluco..*

-*Mas, o que são conversões?*

### O que são Conversões?

Uma conversão é uma ação, no seu site ou não, que é importante para você. 

Para mim, nesse site, são cadastros na minha lista de e-mail:

{{< subscribe >}}

Eu trabalho com diversas empresas na [Traktor](https://gotraktor.com/), e cada uma mede conversões diferentes.

Para negócios de [Geração de Lead](https://empireflippers.com/lead-gen-business-model-explained/), conversões comuns são:

- Cadastro de Leads em um formulário
- Chamadas Telefonicas ([Você pode medir chamadas assim](#))

Já para quem trabalha com e-commerce, você pode medir conversões como:

- Colocou item no carrinho
- Aplicou x código de Desconto
- Comprou um produto 

Dependendo do tipo de funil que você tem ([alto toque vs baixo toque](https://crankwheel.com/how-to-generate-more-revenue/)), é possível registrar conversões de venda em SaaS e Lead Gen também.

Você também pode medir conversões de conteúdo:

- Download de Material Rico (conversões de topo de funil)
- Cadastro em listas de e-mail
- Visualizações de vídeos em seu site

Resumindo: **descubra as ações importantes para você, e meça elas como conversões**

Até agora, eu espero ter te explicado o que são conversões. Mas eu não dei nenhum motivo para que você acredite que elas são tão importantes.

## Por que as Conversões são importantes

O Google Analytics perde metade da sua utilidade se você não mede conversões. 

Sem elas, você não tem acesso aos relatórios de Conversões. Eles te dizem:

- quais são os canais que mais geram vendas diretas
- quais são os canais que mais geram vendas indiretas
- quanto tempo alguém demora para comprar em seu site
- quantos vezes um usuário entra no seu site antes de uma venda

Isso já é mais do que motivo para se preocupar com elas, mas

**Se você está investindo dinheiro em mídia**

Adwords, Facebook, Instagram ou Twitter

**As conversões têm uma importância 10x maior.**

Pois são elas que vão alimentar os algoritmos de inteligência artificial dessas ferramentas,

***e encontrar seu cliente ideal ao menor CPC possível.***

Medir conversões nessas situações pode fazer com que você aumente seu ROI de forma explosiva.

Para clarificar: as conversões do **Google Analytics** são coisas diferentes das conversões no Adwords, Facebook e no Twitter.

Você até pode integrar o Google Ads e o Google Analytics, para que eles meçam as mesmas conversões.

A definição segue a mesma - conversão é uma ação, no seu site ou não, que é importante para você. 

Porém o Facebook e o Twitter fazem isso de forma diferente, com outros rastreadores.

Eu pretendo escrever tudo o que sei sobre o assunto para cada uma dessas mídias. 

Enquanto eu não faço isso, te deixo com os guias oficiais do:

- [Facebook](https://www.facebook.com/business/help/952192354843755)
- [Twitter](https://business.twitter.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites.html)
- [Google Ads](https://support.google.com/google-ads/answer/1722054?hl=pt)

## Como instalar o Rastreamento de Conversões do Google Analytics

Da forma mais simples possível, você deve escolher qual o melhor **método de rastreio**.

Depois, você implementa ele utilizando:
 
- O Google Tag Manager (meu favorito)
- Plugins de Wordpress
- JavaScript
- Importando dados de vendas

### Como definir o melhor método de rastreio:

Depende da sua conversão.

Lembrando:

    Uma conversão é uma ação, no seu site ou não, que é importante para você. 

Vou cobrir nesse guia os métodos de rastreio mais comuns. 

Se eu deixei passar algo, me mande um [@ no Twitter](https://twitter.com/AAdamante) ou um email e conversamos.

### Conversões por PageView:

Esse é o método mais fácil de se implementar, e é adequado para a maioria dos casos, e é o único que se configura apenas no Analytics.

Você *provavelmente* deve escolher esse método para os casos:

- Cadastro de Leads em um formulário
- Download de Material Rico (conversões de topo de funil)
- Cadastro em listas de e-mail

Funciona assim: **quando o usuário chega em alguma URL, se conta uma conversão.**

Você poderia contar uma conversão de um Lead, por exemplo, **redirecionando seu usuário para uma página após completar um formulário.**

Essa conversão pode ser configurada diretamente do Google Analytics, seguindo esses passos:

#### Passo a passo para Instalar Conversão de Pageview no Google Analytics

Vá em Configurações

![Configurações do  Analytics](/../img/config-analytics.png)  

Na terceira coluna, em Configurações de Vista, clique em **Metas**

![Vistas Metas](/../img/vista-metas.png)  

Clique em nova meta:

![Nova Meta](/../img/nova-meta.png)  

Em configurações da Meta, você irá escolher:

**Um modelo de meta**, ou uma **meta personalizada**.

Se existe algum modelo que descreve exatamente a sua ação, o escolha.

Se não, escolha personalizado.

Depois, em Descrição da Meta:

Escolha um nome fácil e descritivo para sua meta. No meu caso: Lead.

**Escolha o tipo de meta como destino** 

Em detalhes da meta:

![Nova Meta](/../img/detalhes-meta.png)  

Escolha **começa com** e a URL da sua página, **SOMENTE DEPOIS DAS BARRAS**, sem incluir barra no fim.

Por exemplo: essa página é 

    https://www.adamante.com.br/code/conversao-google-analytics/

Ficaria:
    
    code/conversao-google-analytics

Não preencha os valor opcionais, e salve. (A não ser que você tenha calculado o valor de um Lead, então coloque em Valor)

Pronto: você está convertendo

![Age of Empires Monje Wololo](/../img/monk-aoe.jpg)  

### Conversões por Eventos:

Você pode utilizar as ferramentas de Evento do Analytics para registrar conversões.

Elas são muito úteis para os casos em que você não está em uma página web tradicional.

Funciona com Apps e páginas dinâmicas em que os pageviews são virtuais, operadas por JavaScript 

(todos os frameworks: jQuery, VueJs, React, Angular e EmberJs).

Você também pode utilizar isso para registar conversões de visualização de um vídeo.

Ou registrar engajamento com alguma feature do seu site: eu uso aqui no meu [Gerador de botão de WhatsApp](/code/whatsapp-site/).

Eventos devem ser úteis para os casos:	

- Colocou item no carrinho
- Aplicou x código de Desconto
- Comprou um produto 
- Visualizações de vídeos em seu site
- Engajou com conteúdo dinâmico
	

Para fazer isso você deve:

- Configurar um evento no Analytics
- Enviar o evento.

(Como enviar eventos através de: [Google Tag Manager](#), [Plugins de WordPress](#), [JavaScript](#))

### Configurando Metas por Evento no Google Analytics

Você pode seguir as instruções de como [criar uma meta no Google Analytics](#passo-a-passo-para-instalar-conversão-de-pageview-no-google-analytics) até a parte em que selecionamos o **tipo de meta**.

Selecione o tipo de meta **Evento** e o configure com algo similar à:

![Inspecionar Elemento - ID](/../img/conversao-evento-config.png)  

**Lembrando que você que "inventa" as categorias, ações e rótulos. Nós vamos enviar eles através de eventos customizados logo mais.** Não se preocupe muito com o que chama eles no primeiro momento, só tenha certeza que é algo consistente e que está registrando toda a informação que você precisa saber.

### Enviando Eventos com o Google Tag Manager

O Google Tag Manager é uma ótima solução para gerenciar rastreadores do seu site. 

Você também pode registrar eventos utilizando ele.

Para exemplificar, eu vou explicar como registrar um clique de botão como um evento.

Lembrando o HTML básico, um botão estaria marcado da seguinte maneira:

	<button id="clique-em-mim">Clique em mim</button>

Caso você use Boostrap ou algum outro Framework de CSS, também pode ser algo como:

	<a id="botao-clique-em-mim" class="btn btn-primary">Clique em mim</a>

Para registrar um evento com o Googe Tag Manager, você precisa saber o ID do botão.

Nos dois casos, o ID é "botao-clique-em-mim". 

Para descobrir qual o ID do seu botão, você pode clicar com o botão direito do mouse em seu elemento e em **inspecionar elemento**. 

![Inspecionar Elemento - ID](/../img/inspecionar-elemento.png)  

Uma barra lateral irá abrir, com um *node* em destacado em azul. O que está no texto entre ID="" é seu ID. Neste caso, o ID é *botao-header*.

Com isso em mãos, vamos ao Google Tag Manager.

Se você não tiver instalado ele ainda, pode seguir [esse tutorial do Google](https://support.google.com/tagmanager/answer/6103696?hl=ptBr) que ensina a fazer isso.

Após isso, começamos tudo criando um **gatilho**.

No menu lateral direito, clique em Gatilhos, e em Novo.

Coloque um nome no Gatilho, algo como  "Clicou no Botão Clique em Mim".

Clique no bloco central, Configurações de Gatilhos, e selecione **Clique - Todos os elementos**

![Inspecionar Elemento - ID](/../img/clique-todos-elementos.png)  

No bloco central selecione *Este Gatilho dispara em* **Alguns cliques**

Selecione **ID do Clique**, **é igual a**, *o seu ID*.

![Gatilho Finalizado](/../img/click-id-botao-header.png)  

Salve tudo e o gatilho está pronto :) 

Agora, vamos criar uma **Etiqueta** - uma Tag.

No Menu Lateral, **vá até Etiquetas e clique em nova.**

Dê um nome para a Tag. Para nós: **Conversão Analytics - Botão Clique em Mim"

Escolha "Google Analytics - Analytics Universal"

Na primeira opção, coloque Evento.

Configure a Categoria, Ação e Rótulo que [você escolheu](#configurando-metas-por-evento-no-google-analytics) no Google Analytics.

Você pode ignorar os outros campos, mas não esqueça de escolher a configuração do Google Analytics que você fez ao instalar o tag manager.

![Tag Manager Tag](/../img/configuracao-tag-manager-tag.png)  

Salve e desça a rolagem da configuração até chegar em Gatilho.

Selecione o Gatilho que acabamos de criar, e salve.

Está criado seu evento! Junto da configuração de conversão do analytics, você deve estar registrando conversões.

### Enviando Eventos com Plugins de WordPress

Você pode usar o [WP Google Analytics Events](https://wordpress.org/plugins/wp-google-analytics-events/) pra isso.

Ele aceita Scroll Events e Click Events - você pode utilizar o ID como eu expliquei acima para registrar um evento de clique.

Eu realmente não recomendo registrar eventos por um plugin do WordPress. Eu sei que parece sempre a solução mais fácil, mas com cada plugin instalado no WP, você acaba sacrificando um pouco de performance da plataforma, além de se expor à vulneabilidades de segurança. 

A melhor solução acaba sendo o Tag Manager, que facilita a centralização de todas as suas tags e eventos de conversão.

### Enviando Eventos com JavaScript

Se você prefere fazer as coisas através de código e evitar disparar scripts quando possível (como o GTM), essa é uma ótima opção.


Utilizando o seguinte código, você pode enviar o evento para o analytics:

    ga('send', {
      hitType: 'event',
      eventCategory: 'Engagement',
      eventAction: 'generate',
      eventLabel: 'WhatsApp Button'
    });

Só deve se escolher a Categoria, ação, e nome do evento.

Por exemplo, no botão de "Se inscreva" deste site, eu coloquei o código em uma tag HTML onclick:

	<button type="submit" value="Se inscreva" onclick="ga('send', {hitType: 'event',eventCategory: 'Conversion',eventAction: 'signup',eventLabel: 'newsletter'});" ....>

Se você inspecionar esse botão aqui perceberá isso:

{{< subscribe >}}

### Importando dados de Vendas no Google Analytics

Esse é um tipo de conversão mais avançado, que deve ser usado por quem está escalando o negócio e busca performance máxima.

É um dos investimentos de Web Analytics que podem pagar em ouro, principalmente se você utilizar isso em conjunto com Marketing de Performance, compartilhando conversões e delimitando audiências no Google Ads.

Para fazer isso, você deve guardar o ID do Google Analtyics (cid ou uid) em seu CRM ou em algum banco de dados próprio.

Depois, **você alimenta o Analytics com os dados de venda, e se possível, seu valor monetário**.

Você pode fazer isso no **Google Ads** através da importação de um arquivo CSV, porém *no Analytics a implementação é um pouco mais complexa.*  

Devemos usar o **Protocolo de avaliação (Measurement Protocol)** para isso. 

O processo básico é o seguinte:

- [Você registra o ID de um usuário do Analytics em algum sistema](#registrando-o-id-de-um-usu%c3%a1rio-no-analytics)
- Você registra as informações de venda através do seu sistema próprio
- [Você envia os dados para o Google Analytics através do Protocolo de Avaliação](#enviar-os-dados-de-convers%c3%a3o-para-o-analytics-atrav%c3%a9s-do-protocolo-de-avalia%c3%a7%c3%a3o)

OBS: Lembre que você **nunca deve enviar para o Analytics informação identificável de seus usuários**. 

Ou seja: você pode enviar dados de transação, que produtos tal pessoa comprou, quanto gastou, etc. 

Mas **não pode enviar e-mails, telefones, nomes, etc..**; Qualquer informação pessoal não deve ser enviada.


-----
### Registrando o ID de um usuário no Analytics:

O Analytics gera um ID único para cada usuário que acessa seu site. 

Esse ID fica registrado em um cookie, e você pode utilizar um pouco de Javascript para registrar essa informação em formulários, que registram dados dos seus Leads e enviam para um CRM (ou sistema de Ecommerce).

Assim, você iria assignar em seu CRM um ID do Google Analytics à cada cliente.

Se você está usando a última versão do Analytics, você pode usar esse código para descobrir o Client ID:

	ga.getAll()[0].get('clientId');

Como integrar isso com um formulário depende, mas em geral, você irá criar um Input Invisível (Hidden Input), e preencher ele utilizando javascript. Seria algo assim:

HTML:

	<form>
	<input type="text" style="display:none;" id="formClientID" value="">
	</form>

Javascript Vanilla:

	var formClientID = ga.getAll()[0].get('clientId');

	document.getElementById("formClientID").value = formClientID;

O ideal é salvar esse script em um arquivo externo e deferir sua execução.

Agora, você deve estar registrando dados do Analytics em seu CRM.

O próximo passo é...

### Enviar os dados de conversão para o Analytics através do Protocolo de Avaliação

O protocolo de avaliação do Google Analytics funciona como uma API que te permite postar dados.

Vamos supor que você esteja usando um CRM como o [Pipedrive](https://www.pipedrive.com/pt) para gerenciar suas vendas, e você queira enviar esses dados para o Google Analytics.

Você poderia fazer uma [automação](https://zapier.com/apps/pipedrive/integrations) usando o [Zapier](https://zapier.com/), de forma que sempre que um negócio for **Ganho**, você envia as informações dele para o Analytics.

Para enviar as informações, você precisa enviar uma requisição HTTP do tipo POST para http://www.google-analytics.com/collect, com alguns parâmetros no payload:

	v=1              // versão do measurement protocol.
	&tid=UA-XXXXX-Y  // ID de rastreamento / ID da propriedade.
	&cid=555         // O ID do cliente que você registrou 
	&t=              // Tipo de interação. Pode ser pageview, evento, etc.

No caso, vamos registrar um evento de venda. Para isso, você precisa dos seguintes parâmetros:

	&t=event         // Tipo de Hit, evento. Não mude.
	&ec=conversion   // Categoria do evento. É obrigatório.
	&ea=purchase     // Ação do evento. Também é obrigatório.
	&el=		     // Nome do evento. Opcional.
	&ev=300          // Valor do evento. Você usa isso para registrar dados monetários.


O Zapier te permite rodar um script de Python assim que o gatilho do Pipedrive for acionado:

	if input_data:
		cid = input_data['cid']				// Você guarda os dados que puxou do Zapier em variaveis.
		value = input_data['value'] 		// Lembre de NUNCA guardar dados pessoais no Analytics.

	payload = {'v': '1', 'tid': 'UA-XXXXX-Y', 'cid': cid, 't': 'event', 'ec': 'conversion', 'ea': 'purchase','ev': value}
	r = requests.post('http://www.google-analytics.com/collect', params=payload)

Pronto! Você registrou um evento de venda no Analytics usando dados do seu CRM de forma completamente automatizada ;) 


## Como usar Relatórios de Metas como um profissonal:

Depois de algum tempo que instalamos as conversões, começaremos a ter dados para analisar. Aqui que as coisas ficam divertidas :)

Os relatórios de Metas nos proporcionam insights sobre como nossos usuários mais valiosos interagem com o nosso site.

Não vou tocar os relatórios de E-commerce aqui pois isso exige um artigo em separado. 

O primeiro grupo de relatórios, Metas, te dá uma visão mais geral das metas no seu site - em geral são relatórios básicos que não exigem muita explicação.

O relatório que eu considero mais interessante do grupo é **Caminho Reverso da Meta**.
(Vou deixar de lado o Relatório de Funil pois para esse tipo de análise é melhor usar uma ferramenta própria para isso, como o Heap Analytics ou o MixPanel).


### Caminho Reverso da Meta

Aqui, você pode visualizar **a movimentação das pessoas pelas páginas do seu site** antes de completar uma meta. 

Assim, você pode ter uma ideia de quais são os caminhos mais efetivos para converter um Lead, e descobrir qual o processo de consumo de conteúdo no site para que alguém se interesse por seu produto.

Ao combinar isso com a ferramenta de Segmentos, nós conseguimos **delimitar esse mesmo caminho por diversas dimensões**, como Tipo de Dispositivo (Mobile vs Desktop), Canal de Aquisição e etc.

![Caminho Reverso da Meta](/../img/reverse-goal-path.jpg)  

Onde está o número 1, você deve escolher qual meta analisar. Onde está o número dois, escolhemos segmento. 

A primeira coluna é onde a meta foi completada - se você está usando uma página de conversão, será sempre ela. As próximas colunas são as páginas anteriores por onde a pessoa passou. Onde está escrito (entrada) foi onde a pessoa entrou no site.

Supondo que você trabalhe com muito marketing de conteúdo e SEO, se você Segmentar (Onde está o 2 na imagem) o relatório por Tráfego Orgânico 

![Caminho Reverso da Meta](/../img/segmentar.png)  

E apartir daí, entender qual o caminho de descoberta de conteúdo em seu site que leva a mais conversões. Com isso, uma análise de CRO nas páginas chave poderia aumentar sua geração de leads significativamente.

### Canais Multifunil

Esse acredito que esse, junto dos modelos de atribuição, são os meus relatórios favoritos do GA. 

É natural que empresas que vendem e geram leads pela internet tenham funis marketing complexos com muitos canais e pontos de contato envolvidos. 

Um dos grandes poderes do Analytics é conseguir agregar toda essa informação complexa, apontando por onde focar seus esforços de otimização e investimento.

Vamos começar?

Todos os relatórios deste grupo têm as mesmas opções na parte superior:

![Primeira Visão](/../img/conversoes-assistidas-primeiro.png) 

### O Tipo de Conversão

![Tipo de Conversão](/../img/conversoes-assistidas-tipo.png) 

Por padrão, **todas as conversões vêm selecionadas**. Portanto preste atenção, se você deseja ver apenas uma conversão de Lead, ou de venda, tenha certeza que só ela está selecionada.

### O Tempo de Lookback

![Tempo de Lookback](/../img/conversoes-assistidas-lookback-window.png) 

Isso é o **período de tempo passado que você deseja incluir no relatório**.
Você deve ajustar isso de acordo com a jornada de compra do seu cliente.
Normalmente, para produtos B2B, 90 dias é a melhor opção.

### Visão Geral dos Canais Multifunil

Não há muita coisa acontecendo aqui... A não ser este **incrível** diagrama de Venn sobre seus canais de Aquisição de Conversões.  

![Tempo de Lookback](/../img/venn-conversoes.png) 

Minha sugestão aqui é colocar um maior período de tempo para ter mais volume de dados.

Você pode ver por esse diagrama acima, que mesmo que o canal Orgânico seja mais importante no volume de conversões, **a Pesquisa Paga e Pesquisa Orgânica têm uma pequena área em comum**.

Isso quer dizer que **meu investimento de Pesquisa Paga está sendo direcionado para um público diferente do Orgânico, e que nós estamos gerando Leads que não teriam sido gerados sem esse investimento.** 

### Conversões Assistidas

Eu fiz um post específico para esse relatório, que você pode encontrar [aqui](/code/conversoes-assistidas).

### Caminhos de Conversão mais Comuns

Outro relatório muuuuuito divertido. 



	- Metas
		- Overview
		- Goal Completion Location
		- Reverse Goal Path  
		- Funnel Visualization
		- Goal Flow
	- Ecommerce
		- Artigo Próprio
	- Canais Multifunil *O relatório mais poderoso do Google Analytics*
		- Conversões Assistidas (link)
		- Top Conversion Paths
		- Time Lag
		- Path Length
	- Modelos de Atribuição

## BONUS: O segredo de como usar conversões com 101% de eficiência
	- Audiências x Outros Relatórios
	- Outras Dimensões 




- Como usar Relatórios de Conversões como um profissonal:
	- Metas
		- Overview
		- Goal Completion Location
		- Reverse Goal Path 
		- Funnel Visualization
		- Goal Flow
	- Ecommerce
		- Artigo Próprio
	- Canais Multifunil *O relatório mais poderoso do Google Analytics*
		- Conversões Assistidas (link)
		- Top Conversion Paths
		- Time Lag
		- Path Length
	- Modelos de Atribuição
- BONUS: O segredo de como usar conversões com 101% de eficiência
	- Audiências x Outros Relatórios
	- Outras Dimensões 


- O Guia das Conversões no Google Ads
	- Google Ads:
		- Como criar uma conversão
		- Wordpress
		- Google Tag Manager
		- Na mão
		- Conversões de Ligação **
	- Integrar Google Analytics e Google Ads
	- Integrando seu CRM com Google Ads