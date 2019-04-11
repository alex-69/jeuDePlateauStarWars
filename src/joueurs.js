class Joueur{
  constructor(){
    this.Nom = null;
    this.force = 100;
    this.positionId = null;
    this.jouerTab[
      {
        "id":0,
        "nom": "Luke",
        "force": this.force,
        "arme": this.arme,
        "positionId": this.positionId,
      },
      {
        "id":1,
        "non":"Vador",
        "force":this.force,
        "arme": this.arme,
        "positionId": this.positionId,
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

  modifierPositionId(id){
    this.positionId = id
  }

}RecupererJoueurTab(){
  return this.jouerTab
}

export{Joueur}