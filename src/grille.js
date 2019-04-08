
export{carte};
import{Arme} from './weapon';
import{Perso} from './character';
import{nb_aleat} from './main'

const $carte = $("#map");
//this.cible = '';
let tab_position = [];

function carte(nombre_case_X, nombre_case_Y) {
    this.nbre_case_X = nombre_case_X;
    this.nbre_case_Y = nombre_case_Y;
    this.nb_arme_sur_la_carte = 0;
    this.arsenal = [];
    this.perso1_sur_carte = false;
    this.perso2_sur_carte = false;
    this.perso1 = '';
    this.perso2 = '';
    this.getPerso1 = function() {
        return this.perso1;
      }
    this.getPerso2 = function() {
        return this.perso2;
      }

    

    //création de la map
    this.genere_carte_aleatoire = function() {
        for (let i = 0; i < this.nbre_case_X; i++){
            for (let j = 0; j< this.nbre_case_Y; j++){

                const random = nb_aleat(20); // nbre aléatoire entre 1 et 20

                if (random == 1 && this.perso1_sur_carte == false) { // si random est égal à 1 et que le perso1 n'est pas encore sur la map
                $carte.append("<img src='../images/perso1_luke.png' class='persoClass' id='perso1' style='left:" + 100 * j + "px; top:" + 100 * i + "px'>"); // on ajoute la div Luke
                $carte.append("<div class='casevide'></div>"); // on ajoute une div casevide sous la div Luke
                this.perso1_sur_carte = true; //la valeur false devient true
                tab_position.push(3); // 3 est l' id de Luke
                this.perso1 = new Perso(); // function Perso() perso_v2.js
                this.perso1.initPerso("Luke", 100, 10, $("#perso1"), 0); // initialise Luke à partir du constructor Perso
                
                } else if (random == 12 && this.perso2_sur_carte == false) { // si random est égal à 12 et que le perso2 n'est pas encore sur la map
                $carte.append("<img src='../images/perso2_vador.png' class='persoClass' id='perso2' style='left:" + 100 * j + "px; top:" + 100 * i + "px'>"); // on ajoute la div Vador
                $carte.append("<div class='casevide'></div>"); // on ajoute une div casevide sous la div Vador
                this.perso2_sur_carte= true;
                tab_position.push(4); // 4 est l'id de Vador
                this.perso2 = new Perso();
                this.perso2.initPerso("Vador", 100, 10, $("#perso2"), 0); // initialise Vador
                }
                if (random == 3 && this.nb_arme_sur_la_carte < 1) { // si random est égal à 3 et que l' arme1 n'est pas encore sur la carte
                $carte.append("<div id='arme1' class='arme1Class'></div>"); // on ajoute la div arme 1
                this.nb_arme_sur_la_carte++; // on ajoute 1 au nombre d'arme sur la carte
                tab_position.push("arme1Class"); // 2 est l' id des armes
                this.arme1 = new Arme(); // function Arme() 
                this.arme1.initArme("foudre", 15, "arme1"); // initialise l' arme 1 à partir du constructor Arme
                this.arsenal["arme1Class"] = this.arme1;
                } else if (random == 3 && this.nb_arme_sur_la_carte < 2) { // si random est égal à 3 et que l' arme2 n'est pas encore sur la map
                $carte.append("<div id='arme2' class='arme2Class'></div>"); // on ajoute la div arme 2
                this.nb_arme_sur_la_carte++;
                tab_position.push("arme2Class");
                this.arme2 = new Arme();
                this.arme2.initArme("sabre laser rouge", 20, "arme2"); // initialise l' arme 2
                this.arsenal["arme2Class"] = this.arme2;
                } else if (random == 3 && this.nb_arme_sur_la_carte < 3) { // si random est égal à 3 et que l' arme3 n'est pas encore sur la map
                $carte.append("<div id='arme3' class='arme3Class'></div>"); // on ajoute la div arme 3
                this.nb_arme_sur_la_carte++;
                tab_position.push("arme3Class");
                this.arme3 = new Arme();
                this.arme3.initArme("sabre laser bleu", 25, "arme3"); // initialise l' arme 3
                this.arsenal["arme3Class"] = this.arme3;
                } else if (random == 3 && this.nb_arme_sur_la_carte < 4) { // si random est égal à 3 et que l' arme4 n'est pas encore sur la map
                $carte.append("<div id='arme4' class='arme4Class'></div>"); // on ajoute la div arme 4
                this.nb_arme_sur_la_carte++;
                tab_position.push("arme4Class");
                this.arme4 = new Arme();
                this.arme4.initArme("blaster", 30, "arme4"); // initialise l' arme 4
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

