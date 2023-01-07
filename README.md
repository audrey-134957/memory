# Jeu du memory 🧩

## C'est quoi ?

jeu de 10 carte dont 5 cartes ayant chacune 1 paire.

____
## Ce qu'il faut pour ce jeu:


### Version 1:
* un quadrillage 4*4 ✅
* un bouton pour démarrer la partie
* un bouton pour quitter le jeu
* un bouton rejouer

### Version 2:
* un compteur de points
* un message de réussite
* un message d'avant départ du jeu

### Version 3:

* un bouton reset
    * un message qui veut que le joueur confirme son départ du jeu
* un bouton nouvelle partie
    * un message qui veut que le joueur confirme son départ du jeu

___
## La logique:

### Version 1:
* les cartes doivent être face caché
* lorsque qu'une carte correspond à son paire, elle disparait ✅
* les cartes doivent être disposées de façon aléatoire et à chaque début de jeu uniquement. ✅
* il doit y avoir connexion entre les paires ✅
* si deux cartes = non paires, elle doivent rester et se retourner
* je ne dois choisir que 2 cartes ✅


### Version 2:

* lorsque que je trouve la paire du premier coup, je gagne 3 points
* lorsque qu'il me faut +1 fois pour trouver la paire, je gagne 1 point


### Version 3:

___
## Procédé:

1) je clique sur le bouton jouer

2) les cartes sont disposées de façon aléatoire sur le quadrillage, face cachée

3) je décide de retourner deux cartes:

    3.1) si 2 cartes = paire

        3.1.1) si trouvé du premier coup

            3.1.1.1) les cartes disparaissent

            3.1.1.2) 3 points offerts

        3.1.2) si trouvé après +1 tentative

            3.1.1.1) les cartes disparaissent

            3.1.2.1) 1 point offert

    3.2) si 2 cartes = impaire

        3.2.1) les cartes se retournent, face caché

4) si plus de carte

    4.1) jeu fini

    4.2) bouton rejouer

___
## Ressources:


### Images

Pack animaux sauvages 

* https://www.flaticon.com/stickers-pack/wildlife-85

Les animaux choisis

* gorilla = https://www.flaticon.com/free-sticker/gorilla_4497947
* penguin = https://www.flaticon.com/free-sticker/penguin_4497826
* perroquet = https://www.flaticon.com/free-sticker/nymph_4497849
* antilope = https://www.flaticon.com/free-sticker/animals_5906889
* giraffe = https://www.flaticon.com/free-sticker/animals_5906877
* kangourou = https://www.flaticon.com/free-sticker/animals_5906900
* monkey = https://www.flaticon.com/free-sticker/animals_5906802
* pelican = https://www.flaticon.com/free-sticker/animals_5906866
