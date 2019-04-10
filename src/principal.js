

let ligne;
let colonne;
const longueur = 10;
const $carte = $("#map");
//this.cible = '';
let tab_position = [];

function nb_aleat(max) {
    return Math.floor((Math.random() * max) + 1);
  }

// returne l'index du perso passé en argument, function utilisé dans game.js toucheEnfonce()
function getIndexPerso(perso) {
    ligne = parseInt(perso.elm.css('top')) / 100; // position en x
    colonne = parseInt(perso.elm.css('left')) / 100; // position en Y
    return getIndex(ligne, colonne, longueur);
  }
  
  // retourne un index en prenant en argumant ligne / colonne / longueur, function utilisé dans game.js toucheEnfonce()
  function getIndex(laLigne, laColonne, laLongueur) {
    laLongueur = longueur;
    return (laLigne * laLongueur + laColonne);
  }