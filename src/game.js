
export{jeu};
import{nb_aleat,tab_position,$carte,carte} from './map';
    function jeu(){
    this.carte = new carte(10,10);
    //lancement du jeu
    this.lancementJeu = function() {
        //initialise la map
        this.carte.genere_carte_aleatoire();
    }
}


 