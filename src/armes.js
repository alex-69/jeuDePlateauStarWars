


class Arme{
  constructor(){
    this.armeTab = [
      {
        "nom": "sabreRouge",
       "dégats": 20
      },
      {
        "nom": "SabreBleu",
        "dégats": 20
      },
      {
        "nom": "Blaster",
        "dégats": 10
      },
      {
        "nom": "Eclair",
        "dégats": 30
      },
      {
        "nom": "Arbalète laser",
        "dégats": 15
      },
      {
        "non": "Bâton balster",
        "dégats":15
      }
    ];
  }

  SelectionneArme()
  {
    return this.armeTab
  }

  SelectionneNomAleatoire(aleatInt)
  {
    this.armeTab[aleatInt].name
  }
}
export {Arme};