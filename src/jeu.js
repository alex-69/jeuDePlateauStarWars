


import{TenueDeGrille} from './tenueDeGrille' 


class Jeu {
   constructor(ligne, colonne){
     this.ligne = ligne;
     this.colonne = colonne;
     this.app = document.getElementById('app');
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
    
   }
creerCaseNonAccess(){
 let tenueDeGrille = new TenueDeGrille(null, null, null, this.longueurGrille)
  let kase = null
  for(let i = 0; i < 50; i++){
    kase = tenueDeGrille.parcourirTable()
    kase.style.backgroundColor = 'black'
    kase.setAttribute('donnees-caseaccess', 0)
  

  }

}
}



export{Jeu}