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
        
        if(kaseSuivante.id != kaseActuelle.id && !kaseSuivante.hasAttribute('data-joueur') && ! kaseSuivante.hasAttribute('data-case-nonaccessible')){
            const xkaseSuivante = kaseSuivante.getAttribute('data-x')
            const ykaseSuivante = kaseSuivante.getAttribute('data-y')

            const xkaseActuelle = kaseActuelle.getAttribute('data-x')
            const ykaseActuelle = kaseActuelle.getAttribute('data-y')
            
            
            if((xkaseSuivante != xkaseActuelle && ykaseActuelle == ykaseSuivante)^(ykaseSuivante != ykaseActuelle && xkaseActuelle == xkaseSuivante)){
                if((xkaseSuivante - xkaseActuelle <= 3) ^ (xkaseSuivante - xkaseActuelle <= -4)){
                if((ykaseSuivante - ykaseActuelle <= 3) ^ (ykaseSuivante - ykaseActuelle <= -4)){
                kaseSuivante.setAttribute('data-class', kaseActuelle.dataset.class)
                kaseSuivante.setAttribute('data-joueur', joueur.nom)
                kaseSuivante.className = kaseActuelle.dataset.class

                //supprimer l'ancienne position du joueur
                kaseActuelle.classList.remove(kaseActuelle.dataset.class)
                kaseActuelle.removeAttribute('data-class')
                kaseActuelle.removeAttribute('data-joueur')
                joueur.positionId = kaseSuivante.id 
                }else{console.log("nony")}
            }else{console.log("nonx")}
            }
            else{
                console.log('non diag')
                
            }
        }
        }
    }





export{Deplacement}
