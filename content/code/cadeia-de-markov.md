---
title: "Criando um Gerador de Letras com Cadeias de Markov em Python"
date: 2018-09-29T16:49:03+02:00
draft: false
description: "Usando Python e alguma criativdade, você consegue gerar letras bastante engraçadas."
H1: "Aprenda a usar Cadeias de Markov criando um gerador de letras que mistura Gospel e Funk Proibidão"
SEOTitle: "Fazendo Cadeia de Markov em Python gerar letras de música"
metaDescription: "Como eu misturei Funk proibidão e música gospel para gerar letras novas com uma Cadeia de Markov em Python."
---
Um pouco de humor nerd:

Eu estava estudando **Cadeias de Markov** e como usar Python para trabalhar com elas.

Acabei fazendo um gerador de letras de música. 

Naturalmente, eu resolvi misturar um **funk proibidão com música gospel** pra ver o que sai.

(*Obs: Se você não acha isso tão engraçado quanto eu, provavelmente você é uma pessoa normal e eu tenho um senso de humor bem esquisito.*)

Essa foi uma das letras:

> Os humilhados serão exaltados  
> Sou O Melhor Dj Que Tu Vai Conhece  
> E liberdade de estar com você beijar você  
> Mas entreguei tudo isso  
> E que te amo, amo mais ainda  
>   
> É vida de quem perdeu não foi em vão  
> Derramou azeite, vinho em suas mãos  
> Tá colocando a mão pro alto  
> Quem não gosta não conhece,  
> Um bom malandro age na tranquilidade  
> E o que é dor no seu olhar  
>   
> Os humilhados serão exaltados  
> Sou O Melhor Dj Que Tu Vai Conhece  
> E liberdade de estar com você beijar você  
> Mas entreguei tudo isso  
> E que te amo, amo mais ainda  
>   
> É vida de quem perdeu não foi em vão  
> Derramou azeite, vinho em suas mãos  
> Tá colocando a mão pro alto  
> Quem não gosta não conhece,  
> Um bom malandro age na tranquilidade  
> E o que é dor no seu olhar  

Não é muito coerente (não consegui fazer rimar!), mas foi ótimo para rir e aprender Cadeias de Markov.

Como eu fiz: criei um scraper que baixou as letras do Vagalume, depois usei uma cadeia simples para gerar as letras. 

Aí descobri que tinha uma biblioteca que faz 10x melhor. (*óbvio!*)

## O que é uma Cadeia de Markov?

Uma **Cadeia de Markov** é um modelo que **calcula uma sequência de eventos.**

Essa sequência é calculada de forma que **a probabilidade de ocorrer um evento depende do anterior**.

Esse modelo é genial para trabalhar com textos: ele gera frases escolhendo palavras baseadas nas anteriores, calculando quais palavras têm maior probabilidade de as suceder.  

![Cadeia de Markov Simples](/../img/cadeia-de-markov.png) 

> Cada evento calcula sua probabilidade em separado 

## Como criar uma Cadeia de Markov em Python

Agora, vamos ao nosso gerador de letras de música. 

A primeira parte do processo envolve ter **muitas letras** em um arquivo de texto, para treinar nossa cadeia com as probabilidades envolvendo sequências de palavras. 

Para isso, eu fiz um scraper do site Vagalume, que baixa todas as letras de um artista em um arquivo de texto. Logo escrevo detalhando como fazer isso. Enquanto isso, você pode olhar o [código final](#).

A segunda parte do processo é escrever a Cadeia de Markov em si:

Começamos gerando uma palavra aleatória.

Depois disso, todas as outras são geradas baseado na probabilidade de suceder a anterior.

Vamos começar? 

    import random
    import os

    #Abrindo e lendo um arquivo de texto com as letras
    lyrics = open("letras.txt","r")
    lyrics = corpusLetras.read()

    ## Criando uma lista de palavras baseado no texto. 
    ## Aqui nós: substituímos as quebras de linha por espaços
    ## separamos o string pelos espaços, 
    ## usamos um filtro para remover valores vazios da lista
 
    wordList = lyrics.replace('\n', ' ') 
    wordList = wordList.split(' ') 
    wordList = list(filter(None, wordList))

Já temos uma lista tratada com todas as palavras no nosso arquivo de texto. O próximo passo é transformar ela em um dicionário de probabilidades:

    index = 1
    chain = {} ## nosso dicionário
    wordCount = 5 ## o número de palavras geradas

    ## um loop que busca todas as palavras na nossa lista, e coloca no dicionário uma nova chave com cada palavra, e seu valores, todas as palavras que as sucedem 
    for word in wordList[index:]:
        key = wordList[index - 1]
        if key in chain:
            chain[key].append(word)
        else:
            chain[key] = [word]
        index += 1

Agora, iniciamos a gerar as letras:

    #Uma palavra inicial aleatória
    notCapitalized = True
    
    while notCapitalized:
        firstWord = random.choice(list(chain.keys()))
        if firstWord[0].isupper():
            notCapitalized = False

Fazemos um Loop que vai escolher uma palavra aleatória baseada nos sucessores:

    iterations = 0
    while len(line.split(' ')) < wordCount:
        capitalized = True
        while capitalized:
            iterations += 1
            nextWord = random.choice(chain[firstWord])
            if nextWord[0].islower():
                capitalized = False
            if iterations > 15:
                capitalized = False
                iterations = 0
        firstWord = nextWord
        line += ' ' + nextWord

Amarrando tudo em uma função:

    def generateLine():
        wordCount = 5 ## o número de palavras geradas
        notCapitalized = True

        while notCapitalized:
            firstWord = random.choice(list(chain.keys()))
            if firstWord[0].isupper():
                notCapitalized = False

        line = firstWord
        iterations = 0

        while len(line.split(' ')) < wordCount:
            capitalized = True
            while capitalized:
                iterations += 1
                nextWord = random.choice(chain[firstWord])
                if nextWord[0].islower():
                    capitalized = False
                if iterations > 15:
                    capitalized = False
                    iterations = 0
            firstWord = nextWord
            line += ' ' + nextWord
        return line

Agora, nós escrevemos um Loop que gera estrofes baseado nessas linhas:

    index = 0
    verseList = list()

    while index < 12:
        verseList.append(generateLine())
        if index == 5:
            firstVerse = verseList
            verseList = list()
            print("\n")
        if index == 11:
            for y in firstVerse:
                print(y)
            print("\n")
            for y in verseList:
                print(y)
            print("\n")        
            for y in firstVerse:
                print(y)
            print("\n")
            for y in verseList:
                print(y)
        index += 1

## Código:

No fim, eu acabei encontrando uma biblioteca chamada pymarkovchain, que deixou as letras mais coerentes. 

Se você está interessado apenas em usar cadeias de markov para aprender, é muito mais produtivo fazer do começo, mas se você quer criar algo mais coerente, vale dar uma olhada nas bibliotecas já existentes. 

### Cadeia de Markov:

    import random
    import os

    #Abrindo e lendo um arquivo de texto com as letras
    lyrics = open("letras.txt","r")
    lyrics = corpusLetras.read()

    ## Criando uma lista de palavras baseado no texto. 
    ## Aqui nós: substituímos as quebras de linha por espaços
    ## separamos o string pelos espaços, 
    ## usamos um filtro para remover valores vazios da lista

    wordList = lyrics.replace('\n', ' ') 
    wordList = wordList.split(' ') 
    wordList = list(filter(None, wordList))

    index = 1
    chain = {} ## nosso dicionário
    wordCount = 5 ## o número de palavras geradas

    ## um loop que busca todas as palavras na nossa lista, e coloca no dicionário uma nova chave com cada palavra, e seu valores, todas as palavras que as sucedem 
    for word in wordList[index:]:
        key = wordList[index - 1]
        if key in chain:
            chain[key].append(word)
        else:
            chain[key] = [word]
        index += 1

    ## nossa função que encontra as palavras seguintes aleatoriamente, baseado no dicionário e nas anteriores 
    def generateLine():
        wordCount = 5 ## o número de palavras geradas
        notCapitalized = True

        while notCapitalized:
            firstWord = random.choice(list(chain.keys()))
            if firstWord[0].isupper():
                notCapitalized = False

        line = firstWord
        iterations = 0

        while len(line.split(' ')) < wordCount:
            capitalized = True
            while capitalized:
                iterations += 1
                nextWord = random.choice(chain[firstWord])
                if nextWord[0].islower():
                    capitalized = False
                if iterations > 15:
                    capitalized = False
                    iterations = 0
            firstWord = nextWord
            line += ' ' + nextWord
        return line


    ## a função que gera estrofes:
    index = 0
    verseList = list()

    while index < 12:
        verseList.append(generateLine())
        if index == 5:
            firstVerse = verseList
            verseList = list()
            print("\n")
        if index == 11:
            for y in firstVerse:
                print(y)
            print("\n")
            for y in verseList:
                print(y)
            print("\n")        
            for y in firstVerse:
                print(y)
            print("\n")
            for y in verseList:
                print(y)
        index += 1

### BeautifulSoup como Scraper + pymarkovchain 

    import os
    from bs4 import BeautifulSoup
    from pymarkovchain import MarkovChain
    import urllib.request

    ## Vamos buscar o nome de todas as músicas do Mc Daleste

    htmlArtista = urllib.request.urlopen("https://www.vagalume.com.br/mc-daleste/")
    soup = BeautifulSoup(htmlArtista, 'html.parser')
    nameBox = soup.find("ul", attrs={"class": "tracks"})
    nameBox = nameBox.find_all("a")


    ## Colocando em uma lista somente as urls para facilitar o trabalho
    nameList = list()
    for i in nameBox:   
        nameList.append(i['href'])

    ## Agora, nós usamos a urllib para fazer o download de todas as páginas. (você também pode usar requests)
    htmlList = list()
    for name in nameList:
        htmlList.append(urllib.request.urlopen("https://www.vagalume.com.br" + name))    


    ## Aqui, extraímos letra das páginas 
    songList = list()
    for page in htmlList:
        soup = BeautifulSoup(page, 'html.parser')
        nameBox = soup.find("div", attrs={"itemprop": "description"})
        lines = str(name_box).replace("<br/>", "\n")
        lines = lines.replace('<div itemprop="description">', '')
        lines = lines.replace('</div>', '')
        songList.append(lines)

    ## e finalmente salvamos o resultado em um arquivo de texto, para facilitar a manipulação posterior
    file = open("daleste.txt","w") 
    for letra in song_list:
        file.write(letra)

    ## Agora começamos com a Markov Chain
    mc = MarkovChain("./markov")

    ## eu juntei algumas letras diferentes usando o scraper de cima.

    songlist = open("todas_letras_gospel.txt","r")
    songlist2 = open("todas_letras.txt","r")
    songlist3 = open("todas_letras_bk.txt","r")
    songlist4 = open("mr-catra.txt","r")
    songlist5 = open("daleste.txt","r")

    ## eu sei que isso é feio..

    read = songlist.read()
    read2 = songlist2.read()
    read3 = songlist3.read()
    read4 = songlist4.read()
    read5 = songlist5.read()

    read6 = read + read2 + read3 + read4 + read5

    #geramos uma database usando todo esse texto que está junto:
    mc.generateDatabase(read6)

    # isso deve gerar uma estrofe - pra mim saiu: 'Ou me mama porque tu me abraça forte e não solte jamais' 
    mc.generateString()

    #aí eu faço esse loopzinho pra gerar uma letra completa:

    i = 0
    verseList = list()
    while i < 12:
        verseList.append(mc.generateString())
        if i == 5:
            firstVerse = verseList
            verseList = list()
            print("\n")
        if i == 11:
            for y in firstVerse:
                print(y)
            print("\n")
            for y in verseList:
                print(y)
            print("\n")        
            for y in firstVerse:
                print(y)
            print("\n")
            for y in verseList:
                print(y)
        i = i + 1

Mais uma letra de bônus pra quem chegou até aqui:

>Esse tesão  
>Gaiola dos 11, Jd  
>Vida, você entrou na minha alma espera em Deus  
>Ai meu Deus é o terror com as droga ele parou  
>Olha você ta se enganando  
>Quando vai chegar  
>
>Nunca deixe alguém dizer  
>é o cotidiano  
>as vítimas  
>Muito lenga lenga, blá blá blá blá e tititi  
>E agora escute bem vou lhe dizer  
>Resumindo meu medo  
>
>Esse tesão  
>Gaiola dos 11, Jd  
>Vida, você entrou na minha alma espera em Deus  
>Ai meu Deus é o terror com as droga ele parou  
>Olha você ta se enganando  
>Quando vai chegar  
>
>Nunca deixe alguém dizer  
>é o cotidiano  
>as vítimas  
>Muito lenga lenga, blá blá blá blá e tititi  
>E agora escute bem vou lhe dizer  
>Resumindo meu medo  