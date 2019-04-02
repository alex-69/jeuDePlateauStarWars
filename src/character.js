export{Perso}

function Perso() {

    // initialise les personnages avec les paramètres nom santé dégât et elm qui correspond à l' élément html.
    this.initPerso = function(nom, sante, degat, elm, posture) {
      this.nom = nom;
      this.sante = sante;
      this.degat = degat;
      this.arme = "";
      this.armeDropped = [];
      this.elm = elm;
      this.posture = 0; // 0 correspond à la posture d' attaque, 1 à la posture de défense.
      if(this.nom == "Luke") {
        this.html = {
          sante:document.getElementById("recapSante1"),
          degat:document.getElementById("recapArme1"),
          posture:document.getElementById("recapPosture1"),
        }
      }
      if(this.nom == "Vador") {
        this.html = {
          sante:document.getElementById("recapSante2"),
          degat:document.getElementById("recapArme2"),
          posture:document.getElementById("recapPosture2"),
        }
      }
    }
}