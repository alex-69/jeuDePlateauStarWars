


import{TenueDeGrille} from './tenueDeGrille' 
import{Arme} from './armes'
import{Joueur} from './joueurs'


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
      this.creerArme()
      this.creerJoueur()
      
    
   }
  creerCaseNonAccess(){
    let tenueDeGrille = new TenueDeGrille(null, null, null, this.longueurGrille)
    let kase = null
    for(let i = 0; i < 50; i++){
    kase = tenueDeGrille.parcourirTable()
    kase.style.backgroundColor = 'black'
    kase.setAttribute('donnee-case-nonaccessible', 0)
    }
  }

  creerArme(){
    let armeAleatInt = 0
    let kase = null
    let tenueDeGrille = new TenueDeGrille('donnee-case-nonaccessible', null, null, this.longueurGrille)
    let arme = new Arme()

    for(let i = 0; i < 10; i++){
      armeAleatInt = Math.floor(Math.random() * 5)
      kase = tenueDeGrille.parcourirTable()

      let nomArmeAleat = arme.selectionneNomAleatoire(armeAleatInt)
      kase.setAttribute('donnee-arme',nomArmeAleat)
      kase.className = nomArmeAleat
      
    }
  }
creerJoueur(){
    let tenueDeGrille = new TenueDeGrille
    let setJoueur = false

    for(let i = 0; i < 2; i++){
      let parcourirTable = tenueDeGrille.parcourirTable()
      this.JouerTab[i].postionId = parcourirTable.id

      if(!setJoueur){
        parcourirTable.className = 'joueur1'
        parcourirTable.setAttribute('donnee-joueur', this.joueurTab[i].nom)
        parcourirTable.setAttribute('donnee-class','joueur-1')
        setJoueur = true
      }else{
        parcourirTable.className = 'joueur2'
        parcourirTable.setAttribute('donnee-joueur', this.joueurTab[i].nom)
        parcourirTable.setAttribute('donnee-class','joueur-2')
      }
    }
}

}

export{Jeu}