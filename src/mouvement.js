
class Deplacement{

    cheminsJoueurPossibles(joueur, joueur2){
        
        let id = null
        let idCase = null
       
        for(let j = 0; j < 100; j++){
        if(j<10){
            id = 'td-0'
        }else{
            id = 'td-'
        }
        idCase = id +j
        document.getElementById(idCase).classList.remove("cheminVador")
        document.getElementById(idCase).classList.remove("cheminLuke")
        this.cheminPossibles(idCase, joueur, joueur2) 

        
        }
    }

    deplacer(idCase, joueurTab){

            let joueur = null
            let joueur2 = null
        
            //selectionne joueur qui peut se déplacer
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

    cheminPossibles(idCase, joueur, joueur2){

     
        //case actuelle du joueur
        let kaseActuelle = document.getElementById(joueur2.positionId)
    
    //case ou le joueur doit aller
        let kaseSuivante = document.getElementById(idCase)
        

        this.casesIndisponibles(kaseActuelle, kaseSuivante, joueur, joueur2)

    
       
}
    

    // vérifier toutes les cases indisponibles autour du joueur

    casesIndisponibles(kaseActuelle, kaseSuivante, joueur, joueur2){

        const xkaseSuivante = kaseSuivante.getAttribute('data-x')
        const ykaseSuivante = kaseSuivante.getAttribute('data-y')

        const xkaseActuelle = kaseActuelle.getAttribute('data-x')
        const ykaseActuelle = kaseActuelle.getAttribute('data-y')

        //bloquer les déplacements en diagonale
        if((xkaseSuivante !== xkaseActuelle && ykaseActuelle == ykaseSuivante)^(ykaseSuivante != ykaseActuelle && xkaseActuelle == xkaseSuivante)){
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

        //vérfier qu'il n'y a pas  de case(s) noire(s)/un joueur entre la position actuelle du joueur et la nouvelle position du joueur
       for(let i = Math.min(xKaseActuelleJoueur, xKaseSuivanteJoueur); i <= Math.max(xKaseActuelleJoueur,xKaseSuivanteJoueur); i++){

            for(let j = Math.min(yKaseActuelleJoueur, yKaseSuivanteJoueur); j <= Math.max(yKaseActuelleJoueur,yKaseSuivanteJoueur); j++){

                let kaseX = document.getElementById("td-" + yKaseActuelleJoueur + i)
                let kaseY = document.getElementById("td-" + j + xKaseActuelleJoueur)
                let joueur2Position = null
                
                if(joueur.deplacer == true){
                    joueur2Position = document.getElementById(joueur2.positionId)
                }else{
                    joueur2Position = document.getElementById(joueur.positionId)
                }
        // si une case noire/joueur, empecher le joueur de se déplacer
               if (kaseX.getAttribute('data-case-nonaccessible')){
                PasObstacle = false
                console.log('saut impossible case x')
               }else if(kaseX == joueur2Position){
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
        
        // si pas de joueur/case(s) noires, permettre au joueur de se déplacer
        if(PasObstacle){
       
              if(joueur.deplacer == true){  
                  
                  let idJoueur2 = document.getElementById(joueur2.positionId)
                  let xPositionJoueur2 = idJoueur2.getAttribute('data-x')
                  let yPositionJoueur2 = idJoueur2.getAttribute('data-y')

                if(event & xPositionJoueur2 - xKaseSuivanteJoueur == 1 & yKaseSuivanteJoueur == yPositionJoueur2 || xKaseSuivanteJoueur - xPositionJoueur2 == 1 & yKaseSuivanteJoueur == yPositionJoueur2 || yPositionJoueur2 - yKaseSuivanteJoueur == 1 & xKaseSuivanteJoueur == xPositionJoueur2 || yKaseSuivanteJoueur - yPositionJoueur2 == 1 & xKaseSuivanteJoueur == xPositionJoueur2){
                    
                    ///fight///

                    //le joueur se déplace à coté de l'autre joueur
                    this.attributKaseAjour(kaseActuelle, kaseSuivante, joueur)

                    //les déplacements sont bloqués
                    joueur.deplacer = false

                    //supprimer chemin
                    let id = null
                    let idCase = null
                    for(let j = 0; j < 100; j++){
                    if(j<10){
                        id = 'td-0'
                    }else{
                        id = 'td-'
                    }
                    idCase = id +j
                    document.getElementById(idCase).classList.remove("cheminVador")
                    document.getElementById(idCase).classList.remove("cheminLuke")
                    }                    

                    alert('fight')
                     ///fight///
                }else{ 
                    this.attributKaseAjour(kaseActuelle, kaseSuivante, joueur)
                    joueur.deplacer = false
                    joueur2.deplacer = true
                    this.cheminsJoueurPossibles(joueur, joueur2)
                }

              }else{
                if(joueur2.nom == 'Vador'){
                kaseSuivante.classList.add('cheminVador')
                }else if(joueur2.nom == 'Luke')
                 kaseSuivante.classList.add('cheminLuke')
            }
        }
    }
    //mettre à jour les attributs après déplacement
    attributKaseAjour(kaseActuelle, kaseSuivante, joueur){
        
        //mettre à jour la nouvelle position du joueur
        kaseSuivante.setAttribute('data-class', kaseActuelle.dataset.class)
        kaseSuivante.setAttribute('data-joueur', joueur.nom)
        kaseSuivante.className = kaseActuelle.dataset.class
            //si passe sur une case contenant une arme, récupérer l'arme et remplacer l'arme du joueur
            if(kaseSuivante.getAttribute('data-arme')){
            
            kaseSuivante.setAttribute('data-arme-ancienne',joueur.arme)
            kaseSuivante.setAttribute('data-arme', joueur.arme = kaseSuivante.getAttribute('data-arme'))
            }else{
            kaseSuivante.setAttribute('data-arme', joueur.arme)
            }
        
        //supprimer l'ancienne position du joueur
        kaseActuelle.classList.remove(kaseActuelle.dataset.class)
        kaseActuelle.removeAttribute('data-class')
        kaseActuelle.removeAttribute('data-joueur')
        kaseActuelle.removeAttribute('class')

            //deposer l'ancienne arme du joueur
            if(kaseActuelle.getAttribute('data-arme-ancienne')){
                kaseActuelle.setAttribute('data-arme', kaseActuelle.getAttribute('data-arme-ancienne'))
                kaseActuelle.className = kaseActuelle.getAttribute('data-arme-ancienne')
                kaseActuelle.removeAttribute('data-arme-ancienne')
            }else{
                kaseActuelle.removeAttribute('data-arme')
            }
        joueur.positionId = kaseSuivante.id
    }


}


export{Deplacement}
