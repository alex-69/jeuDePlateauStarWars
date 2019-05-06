


import{TenueDeGrille} from './tenueDeGrille' 
import{Arme} from './armes'
import{Joueur} from './joueurs'
import{Deplacement} from './mouvement'
import{Combat} from './combat'



class Jeu {
   constructor(ligne, colonne){
     this.ligne = ligne;
     this.colonne = colonne;
     this.app = document.getElementById('app');
     this.joueurTab = [];
     this.armeTab = [];
     
     
      this.longueurGrille = this.ligne * this.colonne;
   }
   creationGrille(){
   
      let table = document.createElement('table')
      let body = document.createElement('tbody')
      let deplacement = new Deplacement()
      let joueur = new Joueur()
      
       //decide qui joue aléatoirement
      joueur.quiPeutJouerAuDepart();
      joueur.quiPeutCombattreAuDepart();
  
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
        
        
        td.addEventListener('click', event => { 

          if(this.joueurTab[0].deplacer == false && this.joueurTab[1].deplacer == false){
           console.log('combat engagé')
          }else{
            deplacement.deplacer(td.id, this.joueurTab)
          }
        })
      
        tr.appendChild(td)

        }
      }

      this.app.appendChild(table)
      this.creerCaseNonAccess()
      this.creerArme()
      this.creerJoueur() 
      this.verifierPositionJoueur()
      this.engagerCombat
      //this.InitialiserCheminsJoueurPossibles()
   }
  
  engagerCombat(){
    let joueur = new Joueur()
    let arme = new Arme()
    let combat = new Combat()
    this.joueurTab = joueur.recupererJoueurTab()
    this.armeTab = arme.recupererArme()
    let idBouton = document.getElementsByTagName("button")

    idBouton.addEventListener('click', event => {

      combat.combattre(idBouton, this.joueurTab, this.armeTab)
    })
  }
  InitialiserCheminsJoueurPossibles(){
    let deplacement = new Deplacement()
    let kase = null
    let id = null
    for(let i = 0; i < this.longueurGrille; i++){
      if(i<10){
        id = 'td-0'
      }else{
        id = 'td-'
      }
      kase = id +i
      deplacement.deplacer(kase, this.joueurTab) 
    }
  }
  

  creerCaseNonAccess(){
    let tenueDeGrille = new TenueDeGrille(null, null, null, this.longueurGrille)
    let kase = null
    for(let i = 0; i < 10; i++){
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
    let setJoueur = true
    let kase = null
    
        for(let i = 0; i < 2; i++){

          kase = tenueDeGrille.parcourirTable()
          this.joueurTab[i].positionId = kase.id
          let arme = new Arme;

          if(setJoueur){
            kase.className = 'joueur1'
            kase.setAttribute('data-joueur', this.joueurTab[i].nom)
            kase.setAttribute('data-arme', this.joueurTab[i].arme = arme.recupererNom(5))
            kase.setAttribute('data-class','joueur1')
            setJoueur = false
          }else{
            kase.className = 'joueur2'
            kase.setAttribute('data-joueur', this.joueurTab[i].nom)
            kase.setAttribute('data-arme', this.joueurTab[i].arme = arme.recupererNom(4))
            kase.setAttribute('data-class','joueur2')
          }
        }
        this.verifierPositionJoueur()
  
  
  }

  verifierPositionJoueur(){

    
    let PositionJoueur1 = this.joueurTab[0].positionId
    let PositionJoueur2 = this.joueurTab[1].positionId
    let idJoueur1 = document.getElementById(PositionJoueur1)
    let idJoueur2 = document.getElementById(PositionJoueur2)
     
       if((idJoueur1.getAttribute('data-x') == idJoueur2.getAttribute('data-x')) ||(idJoueur1.getAttribute('data-y') == idJoueur2.getAttribute('data-y'))){
           
            idJoueur1.removeAttribute('data-arme')
            idJoueur2.removeAttribute('data-arme')

            idJoueur1.classList.remove('joueur1')
            idJoueur2.classList.remove('joueur2')

            idJoueur1.removeAttribute('data-joueur')
            idJoueur2.removeAttribute('data-joueur')

            idJoueur1.removeAttribute('data-class')
            idJoueur2.removeAttribute('data-class')

           this.creerJoueur()
           
          
          }else{
            this.InitialiserCheminsJoueurPossibles()
          } 
          
  }
      
  
  
}

export{Jeu}