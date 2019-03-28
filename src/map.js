
$(document).ready(function() {
    
function nb_aleat(max) {
    return Math.floor((Math.random() * max) + 1);
  }
let tab_position = [];
const $carte = $("#map");
 

 function map(nombre_case_X, nombre_case_Y) {

    this.nbre_case_X = nombre_case_X;
    this.nbre_case_Y = nombre_case_Y;

    //création de la map
this.genere_carte_aleatoire = function() {
    for (let i = 0; i < this.nbre_case_X; i++){
        for (let j = 0; j< this.nbre_case_Y; j++){

            const random = nb_aleat(20); // nbre aléatoire entre 1 et 20

            if ((random == 7 || random == 13 || random == 9 || random == 15)) { //on insert un bloc
                $carte.append("<div class='casepleine'></div>"); // ajout d'une case pleine
                tab_position.push(1);
              } else { // pour tout autre valeur de random on insert systématiquement une case vide
                $carte.append("<div class='casevide'></div>"); //ajout d'une case vide
                tab_position.push(0); 
              }
        }
    }
}
}
}); 

export {$};