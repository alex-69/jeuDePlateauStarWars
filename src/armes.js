


class Arme{
  constructor(){
    this.armeTab = [
      {
        "nom": "Blaster",
        "degats": 10
      },
      {
        "nom": "Eclair",
        "degats": 30
      },
      {
        "nom": "SoldatClone",
        "degats": 15
      },
      {
        "nom": "R2d2",
        "degats": 15
      },
      {
        "nom": "SabreRouge",
       "degats": 20
      },
      {
        "nom": "SabreBleu",
        "degats": 20
      },

    ];
  }

  selectionneArme()
  {
    return this.armeTab
  }

  selectionneNomAleatoire(aleatInt)
  {
    
    return this.armeTab[aleatInt].nom
  }

  recupererNom(arme){
    return this.armeTab[arme].nom
  } 
}

export {Arme};