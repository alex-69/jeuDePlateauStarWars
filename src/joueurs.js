class Joueur{
  constructor(){
    this.Nom = null;
    this.force = 100;
    this.arme = null;
    this.deplacer = false;
    this.positionId = null;
    this.joueurTab = [
      {
        "id":0,
        "nom": "Luke",
        "force": this.force,
        "arme": this.arme,
        "deplacer": this.deplacer,
        "positionId": this.positionId,
      },
      {
        "id":1,
        "non":"Vador",
        "force":this.force,
        "arme": this.arme,
        "deplacer": this.deplacer,
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


  quiPeutJouer()
  {
    let aleatInt = null;
    for(let i = 0; i < 2; i++)
    {
       aleatInt = Math.floor(Math.random()*2)
    }
    this.joueurTab[aleatInt].move = true;
  }

  recupererQuiPeutJouer()
  {
    for(let i = 0; i < 2; i++)
    {
      if(this.joueurTab[i].move == true)
      {
        return this.joueurTab[i]
      }
    }

    return null
  }

  permettreDeplacementJoueur(joueurs, joueur)
  {
    joueur.compterDeplacement = 0
    if(joueurs[0] == true){
      joueurs[0] == false
      joueurs[1] == true
      console.log(joueur[1])
    }else if (joueurs[1] == true){
      joueurs[1] == false
      joueurs[0] == true
      console.log(joueur[0])
    }
    console.log(joueurs)
    return joueurs
    
  }

  recupererJoueurTab(){
    return this.joueurTab
    }

}

export{Joueur}