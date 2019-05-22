


class Arme{
  constructor(){
    this.armeTab = [
      {
        "nom": "Blaster",
        "degats": 5
      },
      {
        "nom": "Eclair",
        "degats": 20
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
       "degats": 10
      },
      {
        "nom": "SabreBleu",
        "degats": 10
      },

    ];
  }

  recupererArme()
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