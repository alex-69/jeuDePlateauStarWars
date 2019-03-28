
export{nb_aleat,tab_position, $carte, carte};
import{Arme} from './weapon'
function nb_aleat(max) {
    return Math.floor((Math.random() * max) + 1);
  }
let tab_position = [];
const $carte = $("#map");
 

function carte(nombre_case_X, nombre_case_Y) {
    this.nbre_case_X = nombre_case_X;
    this.nbre_case_Y = nombre_case_Y;
    this.nb_arme_sur_la_carte = 0;
    this.arsenal = [];
   
    
    //création de la map
    this.genere_carte_aleatoire = function() {
        for (let i = 0; i < `${this.nbre_case_X}`; i++){
            for (let j = 0; j< `${this.nbre_case_Y}`; j++){

                const random = nb_aleat(20); // nbre aléatoire entre 1 et 20

                if (random == 3 && this.nb_arme_sur_la_carte < 1) { // si random est égal à 3 et que l' arme1 n'est pas encore sur la carte
                $carte.append("<div id='arme1' class='arme1Class'></div>"); // on ajoute la div arme 1
                this.nb_arme_sur_la_carte++; // on ajoute 1 au nombre d'arme sur la carte
                tab_position.push("arme1Class"); // 2 est l' id des armes
                this.arme1 = new Arme(); // function Arme() 
                this.arme1.initArme("lanceur de bisoux intergalactique", 15, "arme1"); // initialise l' arme 1 à partir du constructor Arme
                this.arsenal["arme1Class"] = this.arme1;
                } else if (random == 3 && this.nb_arme_sur_la_carte < 2) { // si random est égal à 3 et que l' arme2 n'est pas encore sur la map
                $carte.append("<div id='arme2' class='arme2Class'></div>"); // on ajoute la div arme 2
                this.nb_arme_sur_la_carte++;
                tab_position.push("arme2Class");
                this.arme2 = new Arme();
                this.arme2.initArme("lanceur de cailloux intergalactique", 20, "arme2"); // initialise l' arme 2
                this.arsenal["arme2Class"] = this.arme2;
                } else if (random == 3 && this.nb_arme_sur_la_carte < 3) { // si random est égal à 3 et que l' arme3 n'est pas encore sur la map
                $carte.append("<div id='arme3' class='arme3Class'></div>"); // on ajoute la div arme 3
                this.nb_arme_sur_la_carte++;
                tab_position.push("arme3Class");
                this.arme3 = new Arme();
                this.arme3.initArme("patator intergalactique", 25, "arme3"); // initialise l' arme 3
                this.arsenal["arme3Class"] = this.arme3;
                } else if (random == 3 && this.nb_arme_sur_la_carte < 4) { // si random est égal à 3 et que l' arme4 n'est pas encore sur la map
                $carte.append("<div id='arme4' class='arme4Class'></div>"); // on ajoute la div arme 4
                this.nb_arme_sur_la_carte++;
                tab_position.push("arme4Class");
                this.arme4 = new Arme();
                this.arme4.initArme("headshotter intergalactique", 30, "arme4"); // initialise l' arme 4
                this.arsenal["arme4Class"] = this.arme4;
                }
                else if ((random == 7 || random == 13 || random == 9 || random == 15)) { //on insert un bloc
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

