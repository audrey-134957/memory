var app = {

    init: function init() {

        this.addAnimalsOnCard(); // on crée un tableau pour générer  les animaux que l'on ajoutera par la suite sur les cartes
        this.addCards(); // on ajoute les cartes (jeu de 16 cartes)
    },


    /*
     * on crée un tableau pour générer  les animaux que l'on ajoutera par la suite sur les cartes
     */
    addAnimalsOnCard: function addAnimalsOnCard() {

        // je crée un tableau vide pour les paires de cartes
        let $animalsPair = [];

        // je crée le tb avec le nom des animaux
        let $animalsNamesList = ['antelope', 'giraffe', 'gorilla', 'kangaroo', 'monkey', 'nymph', 'pelican', 'penguin'];

        //je veux créer des cartes pour chaque image ...
        $.each($animalsNamesList, function (key, value) {
            //  => test | console.log(key);
            //  => test | console.log(value);


            // et pour chaque image, il faut une paire. Je récupère $animalsPair pour y ajouter les paires de cartes
            for (p = 1; p <= 2; p++) {

                //je crée la carte en HTML
                var $card = '<div class="card">' +
                    '<img class="animal animal--' + value + '" id="' + value + '-' + p + '" src="/animals/' + value + '.png" alt="">' +
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

        var $quadrillage = $('div.quadrillage');

    
        // on teste si la classe .quadrillage existe
        if ($quadrillage.hasClass('quadrillage')) {

            //si elle existe, je récupère chaque carte ...
            $.each($cardsSet, function (key, value) {

                //...que je vais ajouter dans la div quadrillage
                $quadrillage.append(value);
            });


        } else {
            console.log('no');
        }
    }
};

app.init();