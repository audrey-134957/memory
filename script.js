var app = {

    init: function init() {

        this.addAnimalsOnCard(); // on crée un tableau pour générer  les animaux que l'on ajoutera par la suite sur les cartes
        this.addCards(); // on ajoute les cartes (jeu de 16 cartes)
        this.selectTwoCards(); // on sélectionne 2 cartes

    },


    /*
     * on crée un tableau pour générer  les animaux que l'on ajoutera par la suite sur les cartes
     */
    addAnimalsOnCard: function addAnimalsOnCard() {
        // je crée le tb avec le nom des animaux
        const $animalsNamesList = ['antelope', 'giraffe', 'gorilla', 'kangaroo', 'monkey', 'nymph', 'pelican', 'penguin'];

        // je crée un tableau vide pour les paires de cartes
        let $animalsPair = [];

        //je veux créer des cartes pour chaque image ...
        $.each($animalsNamesList, function (key, value) {
            // console.log(key);
            // console.log(value);


            // et pour chaque image, il faut une paire. Je récupère $animalsPair pour y ajouter les paires de cartes
            for (p = 1; p <= 2; p++) {

                //je crée la carte en HTML
                var $card = '<div class="cell">' +
                    '<div class="card card--' + value + '" id="' + value + '-' + p + '">' +
                    '<img class="animal animal--' + value + '" src="/animals/' + value + '.png" alt="">' +
                    '</div>' +
                    '</div>';


                // je vais ajouter chaque carte au tableau $animalsPair
                $animalsPair.push($card);

            };
        });

        // je vais nommer une nouvelle variable, $cardsSet, qui va receuillir le tableau de paire de chaque animal.
        $cardsSet = $animalsPair;

        // je retoune le tableau de jeu de cartes
        return $cardsSet;
    },

    /*
     * on ajoute les cartes (jeu de 16 cartes)
     */
    addCards: function addCards() {

        function randomize(tab) {
            var i, j, tmp;
            for (i = tab.length - 1; i > 0; i--) { // on va venir décrémenter le tableau. "tab.length" annonce la longueur du tableau, soit ici 16 car c'est le nb total d'élements dans le tableau
                j = Math.floor(Math.random() * (i + 1)); // On va générer un indice (ou récupérer une image) aléatoire qui se situe entre 0 et i, qui est ici 16.


                /**
                 * Les 3 dernières lignes échangent les cartes en i-ième et en j-ième position tout comme dans notre premier algorithme naïf, mais ici on ne choisit la carte à échanger que parmi celles qui n’ont pas encore été traitées. Et pour des raisons de simplicité du code, on mélange le tableau “depuis la fin”. [source: https://www.drgoulu.com/2013/01/19/comment-bien-brasser-les-cartes/]
                 *
                 */
                tmp = tab[i];
                tab[i] = tab[j];
                tab[j] = tmp;
            }
            return tab;
        }

        tab = randomize($cardsSet);

        let $grid = $('div.grid');

        // on teste si la classe .grid existe
        if ($grid.hasClass('grid')) {

            $.each($cardsSet, function (key, value) {

                //...que je vais ajouter dans la div grid
                $grid.append(value);

            });

        } else {
            console.log('no');
        }
    },

    /*
     * on sélectionne 2 cartes
     */
    selectTwoCards: function (cardArr) {
        //je prépare un tableau vide, qui va recevoir les deux cartes que je sélectionnerai.
        cardArr = [];

        //je vérifie la longueur du tableau (le nb d'élements qui doit être à 0);
        //console.log(cardArr.length);

        card = $('.card');

        // au clique sur une carte, ...
        card.on('click', function (e) {
            //console.log(!cardArr.includes(e.target));

            // si le tableau contient - de 2 éléments ET ne contient pas déjà une carte sélctionnée précédement
            if (cardArr.length !== 2 && !cardArr.includes(e.currentTarget)) {

                // je vais ajouter au tableau les cartes que j'ai sélectionné
                cardArr.push(e.currentTarget);
            }

            //si le tb a bien 2 elements...
            if (cardArr.length == 2) {
                // on demande je faire agir la fonction suivante
                app.testIfSelectedCardsAreSame(cardArr);

            }

        });
    },

    /**
     * On teste si les deux cartes ds le tb sont paires ou non
     */
    testIfSelectedCardsAreSame: function (cardArr, cardOne, cardTwo) {

        // je viens ajouter la première carte dans une variable
        cardOne = cardArr[0];
        //pareil pour la 2nd
        cardTwo = cardArr[1];

        //j'ajoute leur id (nom de l'animal) sans le n° de la paire (1 ou 2), dans la variable
        cardOneIdValue = cardOne.id.slice(0, -2);
        //pareil pour la 2nd
        cardTwoIdValue = cardTwo.id.slice(0, -2);

        // les deux id sont différentes,
        if (cardOneIdValue !== cardTwoIdValue) {
            //console.log('diff');
        } else {

            //console.log('paire');

            //on vient cacher les 2 cartes
            $(cardOne).remove();
            $(cardTwo).remove();
        }

        //console.log(cardArr);

        //on retire les listeners sur la carte
        card.off();

        //si le tb a tjr 2 éléments...
        if (cardArr.length == 2) {

            //on vide le tableau
            cardArr = [];
            //on appelle de nouveau la fonction des sélection des cartes en lui passant le tb
            app.selectTwoCards(cardArr);
        }
    }
};

app.init();