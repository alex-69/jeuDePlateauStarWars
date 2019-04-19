import{Joueur} from './joueurs'

class Deplacement{

    deplacer(idCase, joueurTab){
        let joueur = null
        for(let i = 0; i < joueurTab.length; i++){
            if(joueurTab[i].deplacer == true)
            {
                joueur = joueurTab[i]
            }
        }
        //case actuelle du joueur
        let kaseActuelle = document.getElementById(joueur.positionId)
        
        //case ou le joueur doit aller
        let kaseSuivante = document.getElementById(idCase)
        

        this.casesDisponibles(kaseActuelle, kaseSuivante, joueur)

        return joueurTab 
    }

    getDiagIndice(x,y){


    }

    // vérifier toutes les cases disponibles autour du joueur
    
    casesDisponibles(kaseActuelle, kaseSuivante, joueur,){

        //cases indisponilbes = cases noires + cases avec un joueur
        if(kaseSuivante.id != kaseActuelle.id && !kaseSuivante.hasAttribute('data-joueur') && ! kaseSuivante.hasAttribute('data-case-nonaccessible')){

            const xkaseSuivante = kaseSuivante.getAttribute('data-x')
            const ykaseSuivante = kaseSuivante.getAttribute('data-y')

            const xkaseActuelle = kaseActuelle.getAttribute('data-x')
            const ykaseActuelle = kaseActuelle.getAttribute('data-y')
            
            //bloquer les déplacement en diagonale
            if((xkaseSuivante != xkaseActuelle && ykaseActuelle == ykaseSuivante)^(ykaseSuivante != ykaseActuelle && xkaseActuelle == xkaseSuivante)){

                //permettre les deplacement de 1 à 3 cases en ligne
                if((xkaseSuivante - xkaseActuelle <= 3) ^ (xkaseSuivante - xkaseActuelle <= -4)){

                    //permettre les deplacement de 1 à 3 cases en colonne
                    if((ykaseSuivante - ykaseActuelle <= 3) ^ (ykaseSuivante - ykaseActuelle <= -4)){

                        //si case suivante est un arme
                        if(kaseSuivante.id = kaseSuivante.hasAttribute('data-arme-nouvelle')){

                            //mettre à jour les attributs sur la nouvelle position
                            kaseSuivante.setAttribute('data-class', kaseActuelle.dataset.class)
                            kaseSuivante.setAttribute('data-joueur', joueur.nom)
                            kaseSuivante.setAttribute('data-arme',kaseSuivante.dataset.armeNouvelle)
                            kaseSuivante.setAttribute('data-arme-nouvelle',joueur.arme)
                            kaseSuivante.className = kaseActuelle.dataset.class

                            //supprimer l'ancienne position du joueur
                            kaseActuelle.classList.remove(kaseActuelle.dataset.class)
                            kaseActuelle.removeAttribute('data-class')
                            kaseActuelle.removeAttribute('data-joueur')
                            kaseActuelle.removeAttribute('data-arme')
                            kaseActuelle.removeAttribute('class')
                            
                            joueur.positionId = kaseSuivante.id 
                            console.log("case arme")

                       }else{

                            //mettre à jour les attributs sur la nouvelle position
                            kaseSuivante.setAttribute('data-class', kaseActuelle.dataset.class)
                            kaseSuivante.setAttribute('data-joueur', joueur.nom)
                            kaseSuivante.className = kaseActuelle.dataset.class
                            kaseSuivante.setAttribute('data-arme',joueur.arme)

                            //mettre à jour l'ancienne position du joueur
                            kaseActuelle.classList.remove(kaseActuelle.dataset.class)
                            kaseActuelle.removeAttribute('data-class')
                            kaseActuelle.removeAttribute('data-joueur')
                            kaseActuelle.removeAttribute('data-arme')
                            kaseActuelle.removeAttribute('class')
                           

                            joueur.positionId = kaseSuivante.id
                            console.log("case vide")
                            }
                    }else{
                        console.log("nony")}
                }else{
                    console.log("nonx")}
            }
            else{
                console.log('non diag')
                
            }
        }
    }
}





export{Deplacement}
