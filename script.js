var app = {

    init: function init(){
        this.addAnimalsOnCard(); // on crée un tableau pour générer  les animaux que l'on ajoutera par la suite sur les cartes
        this.addCards(); // on ajoute les cartes (jeu de 16 cartes)
    },

    
    /*
     * on crée un tableau pour générer  les animaux que l'on ajoutera par la suite sur les cartes

     il faut ajouter 3 images supplémentaires pour avoir un total de 8 images

     il faudrait ajouter une class pour la paire,

        ex: 2 img avec la meme classe. class= img-daim, chaque imag avec id différent id = daim--1 id= daim--2
     */ 
    addAnimalsOnCard : function addAnimalsOnCard(){

        $animalsList = [];

        $animalNamesList = ['daim', 'giraffe', 'baleine'];

        const $animalName = 'animal-' ;

        for($animalNb = 1; $animalNb <= 8; $animalNb++){
            $animalsList.push($animalName + $animalNb);
        };

        // test => console.log($animalsList);

        return $animalsList;
    },

    /*
     * on ajoute les cartes (jeu de 16 cartes)
     */ 
    addCards: function addCards(){

        var $quadrillage = $('div.quadrillage');


        $.each( $animalsList, function( key , value) {
            
            // var $animalValue = value;
for(p=1; p<=2; p++){
    var $card = '<div class="card">'+
    '<img class="animal daim" id="' $animalNamesList + p +'" src="/animals/'+ value + '.png" alt="">'+
    '</div>';
}
            

            // à la place dans img, il faut le nom de l'animal et à la place du premier value dans 'card', il faut remplacement par le nom de l'animal

            console.log(value);
            // console.log($card);

          });

        //   var $cardTst = '<div class="card">'+
        //         '<img class="animal daim" id="daim-1" src="/animals/animal-1.png" alt="">'+
        //         '</div>';


        //   for(o=1; o<=2; o++){
        //     var $card = '<div class="card">'+
        //         '<img class="animal daim" id="' + $animalValue + o + '" src="/animals/'+ $animalValue + '.png" alt="">'+
        //         '</div>';

        // }

        //   return $card;
        

        // on crée les cartes. Il ne faut pas oublier d'y ajouter les paires.
        // var $card = '<div class="card">'+
        //             '<img class="animal'+ animalValue +'" id="' + animalValue + '" src="/animals/animal-1.png" alt="">'+
        //             '</div>';

        // on teste si la classe .quadrillage existe
        if($quadrillage.hasClass('quadrillage')){
            console.log('ok');

        // on génère 16 cartes
        // for(i = 1; i<=16; i++){
        //     $quadrillage.append($cardTst);
        // }



        }else{
            console.log('no');
        }
    }
  };

app.init();