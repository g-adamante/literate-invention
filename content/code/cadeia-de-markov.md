---
title: "Como eu usei uma Cadeia De Markov para misturar as letras de funk proibidão e música gospel"
date: 2018-09-29T16:49:03+02:00
draft: false
---
Um pouco de humor nerd:

Eu estava estudando **Cadeias de Markov** e como usar Python para trabalhar com elas, e acabei fazendo um gerador de letras de música. 

Aí, eu resolvi misturar um **funk proibidão com música gospel**.

Essa foi uma das letras geradas:

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
>

Em breve eu detalho como eu fiz - basicamente foi um scraper que baixou as letras do Vagalume, e usei uma biblioteca chamada pymarkovchain para gerar as letras. 

Código:

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

Mais uma letra:

> Os humilhados serão exaltados  
> O Melhor Dj Que Tu Vai Conhece  
> E liberdade de estar com voçê beijar voçê  
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
> O Melhor Dj Que Tu Vai Conhece  
> E liberdade de estar com voçê beijar voçê  
> Mas entreguei tudo isso  
> E que te amo, amo mais ainda  
>   
> É vida de quem perdeu não foi em vão  
> Derramou azeite, vinho em suas mãos  
> Tá colocando a mão pro alto  
> Quem não gosta não conhece,  
> Um bom malandro age na tranquilidade  
> E o que é dor no seu olhar  