class Joueur{
  constructor(){
    this.nom = null;
    this.force = 100;
    this.arme = null;
    this.deplacer = false;
    this.positionId = null;
    this.combattre = false;
    this.action = null;
    this.joueurTab = [
      {
        "id":0,
        "nom": "Luke",
        "force": this.force,
        "arme": this.arme,
        "deplacer": this.deplacer,
        "positionId": this.positionId,
        "combattre": this.combattre,
        "action": this.action
      },
      {
        "id":1,
        "nom":"Vador",
        "force":this.force,
        "arme": this.arme,
        "deplacer": this.deplacer,
        "positionId": this.positionId,
        "combattre": this.combattre,
      }
    ]
  }

  RecupererNom(){
    return this.nom
  } 

  RecupererForce(){
    return this.force
  }

  RecupererArme(){
    return this.arme
  }

  recupererDeplacer(){
    return this.deplacer
  }

  RecupererPositionId(){
    return this.positionId
  }
  
  modifierNom(nom){
    this.nom = nom
  }

  modifierForce(force){
    this.force = force
  }

  modifierArme(arme){
    this.arme = arme
  }

  modifierDeplacer(deplacer){
    this.deplacer = deplacer
  }
  modifierPositionId(id){
    this.positionId = id
  }


  quiPeutJouerAuDepart()
  {
    let aleatInt = null;
    for(let i = 0; i < 2; i++)
    {
       aleatInt = Math.floor(Math.random()*2)
    }
    
    this.joueurTab[aleatInt].deplacer = true;
  }

  quiPeutCombattreAuDepart()
  {
    let aleatInt = null;
    for(let i = 0; i < 2; i++)
    {
      aleatInt = Math.floor(Math.random()*2)
    }
    this.joueurTab[aleatInt].deplacer = true;
  }



  recupererJoueurTab(){
    return this.joueurTab
    }

}

export{Joueur}