---
title: "Como fazer um campo de cidade e estado no Gravity Forms"
date: 2018-06-02T13:07:04+02:00
draft: false
description: "Passo a passo para colocar uma lista de cidades e estados brasileiras no Gravity Forms"
---
# Como fazer um campo de cidade e estado no Gravity Forms

Nos últimos meses, estou trabalhando para aumentar o tráfego e a geração de leads da [Delta Containers](https://deltacontainers.com.br/).

Estamos usando o Gravity Forms, plugin de formulários para wordpress muito popular, para captar leads. 

Um dos problemas do Gravity Forms é que ele não tem um suporte nativo à campos de localização no Brasil.

Para resolver esse problema, você pode fazer uso do script muito útil, cidades-estados-js ([veja o repositório aqui](https://code.google.com/archive/p/cidades-estados-js/)).

Ficou assim:

![Seletor de Estado e Cidade](/../img/seletor.gif)

{{< subscribe >}}


# Passo a passo:

Primeiro: estou assumindo que você está com o Gravity Forms instalado e funcionando. Se não está, [veja aqui como fazer](http://www.wp24horas.com.br/wp-plugins/gravity-forms-plugin-de-formulario-de-contato-mais-amigavel-ao-iniciante-wordpress). 

Depois, crie um formulário, com os dados que você desejar capturar. No meu caso, coloquei Nome,Sobrenome, E-mail, Telefone, **Estado** e **Cidade**

Os campos **Estado** e **Cidade** devem ser feitos como **Campos Padrão - Lista Suspensa**. 

Coloque uma única opção em ambas, com o mesmo nome do campo (cidade e estado)

Salve o formulário e clique em **Visualizar**

Clique com o botão direito e selecione a opção "Inspecionar Elemento". Utilize o seletor para descobrir o ID do campo. Salve o ID dos campos Estado e Cidade. No meu caso era *input_13_15* e *input_13_16*.
![Inspecionar Elemento](/../img/inspecionar-elemento.gif)

Feche a página de visualização e volte a edição do formulário.

Agora, adicione um **Campo Padrão - HTML**. Deve ser o último elemento do formulário.

Cole o seguinte código, substituindo 'ID-DO-CAMPO-DE-ESTADO' pelo ID que você salvou antes.

    <script src="https://www.adamante.com.br/validator.js"></script>
        <script>
                new dgCidadesEstados({
                    estado: document.getElementById('ID-DO-CAMPO-DE-ESTADO'),
                    cidade: document.getElementById('ID-DO-CAMPO-DE-CIDADE')
                    });
        </script>

PS: Eu estou hospedando o script nessa página. Você pode usar ele sem problemas. Se preferir, baixe ele e hospede no seu próprio servidor.

Atualize o formulário e teste com Visualizar de novo.

Deve estar funcionando! :) 

{{< subscribe >}}
