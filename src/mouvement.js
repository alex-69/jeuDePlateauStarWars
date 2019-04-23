import{Joueur} from './joueurs'

class Deplacement{

    deplacer(idCase, joueurTab){

        let joueur = null
        let joueur2 = null
        
        for(let i = 0; i < joueurTab.length; i++){
            if(joueurTab[i].deplacer == true)
            {
                joueur = joueurTab[i]

            }else if(joueurTab[i].deplacer == false){

                joueur2 = joueurTab[i]
            }
        }
        //case actuelle du joueur
        let kaseActuelle = document.getElementById(joueur.positionId)
        
        //case ou le joueur doit aller
        let kaseSuivante = document.getElementById(idCase)
        

        this.casesIndisponibles(kaseActuelle, kaseSuivante, joueur, joueur2)

        return joueurTab 
    }

    // vérifier toutes les cases disponibles autour du joueur

    casesIndisponibles(kaseActuelle, kaseSuivante, joueur, joueur2){

        const xkaseSuivante = kaseSuivante.getAttribute('data-x')
        const ykaseSuivante = kaseSuivante.getAttribute('data-y')

        const xkaseActuelle = kaseActuelle.getAttribute('data-x')
        const ykaseActuelle = kaseActuelle.getAttribute('data-y')

        //bloquer les déplacements en diagonale
        if((xkaseSuivante != xkaseActuelle && ykaseActuelle == ykaseSuivante)^(ykaseSuivante != ykaseActuelle && xkaseActuelle == xkaseSuivante)){
                this.Deplacement3cases(xkaseSuivante,ykaseSuivante, xkaseActuelle, ykaseActuelle,kaseActuelle, kaseSuivante, joueur, joueur2)
        }else{
            console.log('diag bloquée')
        }
            }
    //permettre les deplacement de 1 à 3 cases 
    Deplacement3cases(xkaseSuivante,ykaseSuivante, xkaseActuelle, ykaseActuelle,kaseActuelle, kaseSuivante, joueur, joueur2){
        //en ligne
        if((xkaseSuivante - xkaseActuelle <= 3) ^ (xkaseSuivante - xkaseActuelle <= -4)){
            //en colonne
            if((ykaseSuivante - ykaseActuelle <= 3) ^ (ykaseSuivante - ykaseActuelle <= -4)){
                
                this.casesBloquees(kaseActuelle, kaseSuivante, joueur, joueur2)
            }    
        }else{
            console.log('plus de 3 cases')
        }  
    }
    
    //empêcher déplacement sur : cases noires et joueurs
    casesBloquees(kaseActuelle, kaseSuivante, joueur, joueur2, xkaseActuelle,ykaseActuelle){
        if(kaseSuivante.id != kaseActuelle.id && !kaseSuivante.hasAttribute('data-joueur') && ! kaseSuivante.hasAttribute('data-case-nonaccessible')){
           this.bloquerSauts(kaseActuelle, kaseSuivante, joueur,joueur2, xkaseActuelle, ykaseActuelle)
        }else{
            console.log('cases bloquées')
        }
    }

    //empêcher joueurs de sauter case joueur adverse + cases noires
    bloquerSauts(kaseActuelle, kaseSuivante, joueur, joueur2){

        let xKaseActuelleJoueur = kaseActuelle.getAttribute('data-x')
        let xKaseSuivanteJoueur = kaseSuivante.getAttribute('data-x')
        let yKaseActuelleJoueur = kaseActuelle.getAttribute('data-y')
        let yKaseSuivanteJoueur = kaseSuivante.getAttribute('data-y')
        let PasObstacle = true


       for(let i = Math.min(xKaseActuelleJoueur, xKaseSuivanteJoueur); i <= Math.max(xKaseActuelleJoueur,xKaseSuivanteJoueur); i++){

            for(let j = Math.min(yKaseActuelleJoueur, yKaseSuivanteJoueur); j <= Math.max(yKaseActuelleJoueur,yKaseSuivanteJoueur); j++){

                let kaseX = document.getElementById("td-" + yKaseActuelleJoueur + i)
                let kaseY = document.getElementById("td-" + j + xKaseActuelleJoueur)
                let joueur2Position = document.getElementById(joueur2.positionId)
                
               if (kaseX.getAttribute('data-case-nonaccessible')){
                PasObstacle = false
                console.log('saut impossible case x')
               }else if(kaseX === joueur2Position){
                PasObstacle = false
                console.log('saut impossible case joueur x')
               }
               
               if (kaseY.getAttribute('data-case-nonaccessible')){
                    PasObstacle = false
                    console.log('saut impossible case y')     
                }else if(kaseY === joueur2Position){
                    PasObstacle = false
                    console.log('saut impossible case joueur y')  
                }
            }
            
        }
        
        if(PasObstacle){
        this.attributsJoueurAjour(kaseActuelle, kaseSuivante, joueur)
            }
        }
        
    //mettre à jour les attributs après déplacement
    attributsJoueurAjour(kaseActuelle, kaseSuivante, joueur){
        //mettre à jour la nouvelle position du joueur
        kaseSuivante.setAttribute('data-class', kaseActuelle.dataset.class)
        kaseSuivante.setAttribute('data-joueur', joueur.nom)
        kaseSuivante.className = kaseActuelle.dataset.class

        //supprimer l'ancienne position du joueur
        kaseActuelle.classList.remove(kaseActuelle.dataset.class)
        kaseActuelle.removeAttribute('data-class')
        kaseActuelle.removeAttribute('data-joueur')
        kaseActuelle.removeAttribute('class')
        
        joueur.positionId = kaseSuivante.id
    }
}
    


export{Deplacement}
