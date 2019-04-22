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
        

        this.casesIndisponibles(kaseActuelle, kaseSuivante, joueur)

        return joueurTab 
    }

    

    // vérifier toutes les cases disponibles autour du joueur

    casesIndisponibles(kaseActuelle, kaseSuivante, joueur){

        const xkaseSuivante = kaseSuivante.getAttribute('data-x')
        const ykaseSuivante = kaseSuivante.getAttribute('data-y')

        const xkaseActuelle = kaseActuelle.getAttribute('data-x')
        const ykaseActuelle = kaseActuelle.getAttribute('data-y')
        this.AttributsJoueurAjour(kaseActuelle, kaseSuivante, joueur)
        
    }

    AttributsJoueurAjour(kaseActuelle, kaseSuivante, joueur){
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

/* for(let i = Math.min(xkaseActuelle, xkaseSuivante); i <= Math.max(xkaseActuelle,xkaseSuivante); i++){
    for(let j = Math.min(ykaseActuelle, ykaseSuivante); j <= Math.max(ykaseActuelle,ykaseSuivante); j++){
        let idKase = "td-" + i+j 
    
    if( idKase !=  kaseSuivante.hasAttribute('data-case-nonaccessible') ){

         

       
        }else{
            console.log('cases sautées')
        }
        } 
    }

*/
/*
 //cases indisponilbes = cases noires + cases avec un joueur
 if(kaseSuivante.id != kaseActuelle.id && !kaseSuivante.hasAttribute('data-joueur') && ! kaseSuivante.hasAttribute('data-case-nonaccessible')){

    //bloquer les déplacement en diagonale
    if((xkaseSuivante != xkaseActuelle && ykaseActuelle == ykaseSuivante)^(ykaseSuivante != ykaseActuelle && xkaseActuelle == xkaseSuivante)){

        //permettre les deplacement de 1 à 3 cases en ligne
        if((xkaseSuivante - xkaseActuelle <= 3) ^ (xkaseSuivante - xkaseActuelle <= -4)){

            //permettre les deplacement de 1 à 3 cases en colonne
            if((ykaseSuivante - ykaseActuelle <= 3) ^ (ykaseSuivante - ykaseActuelle <= -4)){

                       
                        

                }else{
                    console.log('plus de 3 cases y ')
                }
                
            }else{
                console.log('plus de 3 cases x')
            }
        }else{
            console.log('case en diag')
        }
    }else{
        console.log('cases prises')
    }
    */