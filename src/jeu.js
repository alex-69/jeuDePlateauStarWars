


import{TenueDeGrille} from './tenueDeGrille' 
import{Arme} from './armes'
import{Joueur} from './joueurs'
import{Deplacement} from './mouvement'


class Jeu {
   constructor(ligne, colonne){
     this.ligne = ligne;
     this.colonne = colonne;
     this.app = document.getElementById('app');
     this.joueurTab = [];
      this.longueurGrille = this.ligne * this.colonne;
   }
   creationGrille(){
   
      let table = document.createElement('table')
      let body = document.createElement('tbody')
      let deplacement = new Deplacement()
      let joueur = new Joueur()
       //decide qui joue aléatoirement
      joueur.quiPeutJouer();
      this.joueurTab = joueur.recupererJoueurTab()
     
      table.appendChild(body)

      for(let i = 0; i < this.ligne; i++){

        let tr = document.createElement('tr')
        body.appendChild(tr)
        for(let j = 0; j < this.colonne; j++){
        let td = document.createElement('td')
        td.setAttribute("data-x", j)
        td.setAttribute("data-y", i)
        td.id = "td-" + i+j

        td.addEventListener('click', () => {
          this.joueurTab = deplacement.deplacer(td.id, this.joueurTab)
        })
        tr.appendChild(td)

        }
      }
      this.app.appendChild(table)
      this.creerCaseNonAccess()
      this.creerArme()
      this.creerJoueur()
      
    
   }
  creerCaseNonAccess(){
    let tenueDeGrille = new TenueDeGrille(null, null, null, this.longueurGrille)
    let kase = null
    for(let i = 0; i < 25; i++){
    kase = tenueDeGrille.parcourirTable()
    kase.style.backgroundColor = 'black'
    kase.setAttribute('data-case-nonaccessible', 0)
    }
  }

  creerArme(){
    let armeAleatInt = 0
    let kase = null
    let tenueDeGrille = new TenueDeGrille('data-case-nonaccessible', null, null, this.longueurGrille)
    let arme = new Arme()

    for(let i = 0; i < 10; i++){
      armeAleatInt = Math.floor(Math.random() * 5)
      kase = tenueDeGrille.parcourirTable()

      let nomArmeAleat = arme.selectionneNomAleatoire(armeAleatInt)
      kase.setAttribute('data-arme',nomArmeAleat)
      kase.className = nomArmeAleat
      
    }
  }
  creerJoueur(){
      let tenueDeGrille = new TenueDeGrille('data-case-nonaccessible','data-arme',null,this.longueurGrille)
      let setJoueur = false

      for(let i = 0; i < 2; i++){
        let parcourirTable = tenueDeGrille.parcourirTable()
        this.joueurTab[i].positionId = parcourirTable.id

        if(!setJoueur){
          parcourirTable.className = 'joueur1'
          parcourirTable.setAttribute('data-joueur', this.joueurTab[i].nom)
          parcourirTable.setAttribute('data-class','joueur1')
          setJoueur = true
        }else{
          parcourirTable.className = 'joueur2'
          parcourirTable.setAttribute('data-joueur', this.joueurTab[i].nom)
          parcourirTable.setAttribute('data-class','joueur2')
        }
      }
  }
}

export{Jeu}