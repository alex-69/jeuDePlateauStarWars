


import{TenueDeGrille} from './tenueDeGrille' 


class Jeu {
   constructor(ligne, colonne){
     this.ligne = ligne;
     this.colonne = colonne;
     this.app = document.getElementById('app');
      this.longueurGrille = this.ligne * this.colonne;
   }
   creationGrille(){
     console.log('hello')
      let table = document.createElement('table')
      let body = document.createElement('tbody')
      table.appendChild(body)

      for(let i = 0; i < this.ligne; i++){

        let tr = document.createElement('tr')
        body.appendChild(tr)
        for(let j = 0; j < this.colonne; j++){
        let td = document.createElement('td')
        td.setAttribute("data-x", j)
        td.setAttribute("data-y", i)
        td.id = "td-" + i+j
        tr.appendChild(td)

        }
      }
      this.app.appendChild(table)
      this.creerCaseNonAccess()
    
   }
creerCaseNonAccess(){
 /* let tenueDeGrille = new TenueDeGrille(null, null, null, this.longueurGrille)
  let kase = null
  for(let i = 0; i < 50; i++){
    kase = tenueDeGrille.parcourirTable()
    kase.style.backgroundColor = 'black'
    kase.setAttribute('donnees-caseaccess', 0)
  }*/
  console.log('hello')
}

}

/*
   this.app.appendChild(table)
    this.createNoAccess()

    // déclaration des personnages
    this.perso1;
    this.perso2;
    this.perso_actuel;

    //lancement du jeu
    this.lancementJeu = function() {
        //initialise la map
        this.carte.genere_carte_aleatoire();

        // initialise les personnages
        this.perso1 = this.carte.getPerso1();
        this.perso2 = this.carte.getPerso2();
        console.log(this.perso1);

         // choix aléatoire du joueur qui commence la partie
        if (nb_aleat(2) > 1) {
            this.perso_actuel = this.perso1;
            alert(this.perso1.nom + " commence le jeu.");
        } else {
            this.perso_actuel = this.perso2;
            alert(this.perso2.nom + " commence le jeu.");
        }
        this.toucheEnfonce();
    };

    // incrémente le compteur_de_tour et change de this.perso_actuel si > 3
    this.verifieCompteur = function() {
    this.compteur_de_tour++;
    this.perso1.updateInfo();
    this.perso2.updateInfo();
    if (this.compteur_de_tour >= 3) {
      this.perso_actuel == this.perso1 ? this.perso_actuel = this.perso2 : this.perso_actuel = this.perso1;
      this.compteur_de_tour = 0;
      alert("changement de joueur, au tour de "+ this.perso_actuel.nom + " de jouer.");
    }
    };
    this.toucheEnfonce = function() {

        
    $( document ).ready(function() {
        $(document).keydown(function(e) { //où se trouve le perso
    
    
          const old_index = getIndexPerso(this.perso_actuel); // position actuelle du perso avant déplacement
    
          if (e.which == 37) { // vers la gauche
            colonne--; // on se dirige vers la colonne précedante
            if (colonne >= 0) { // ne pas sortir de la map
              const next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
              this.perso_actuel.deplace(old_index, next_index, "gauche", this.carte);
            }
          } else if (e.which == 38) { // vers le haut
            ligne--; // on se dirige vers la ligne précédente
            const next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
            this.perso_actuel.deplace(old_index, next_index, "haut", this.carte);
          } else if (e.which == 39) { // vers la droite
            colonne++; // on se dirige vers la colonne suivant
            if (colonne < this.carte.nombre_case_X) { // ne pas sortir de la map
              const next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
              this.perso_actuel.deplace(old_index, next_index, "droite", this.carte);
            }
          } else if (e.which == 40) { // vers le bas
            ligne++; // on se dirige vers la ligne suivante
            if (ligne < this.carte.nombre_case_Y) { // ne pas sortir de la map
              const next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
              this.perso_actuel.deplace(old_index, next_index, "bas", this.carte);
            }
          }
        });
        });
      };
*/
export{Jeu}