class Combat{

    combattre(idBouton, joueurTab, armeTab){

        let joueur1 = null
        let armeDegat = null

        let joueur2 = null
         
        //selectionne qui peut combattre
        for (let i = 0; i < joueurTab.length; i ++){

            if(joueurTab[i].combattre == true){
                
                joueur1 = joueurTab[i]
                

            }else if (joueurTab[i].combattre == true){

                joueur2 = joueurTab[i]
            }
        }

        for (let i = 0; i < armeTab.length; i++){

            if(joueur1.arme = armeTab[i].nom){
                armeDegat = armeTab[i].degats
            }else{
                console/log("pas d'arme")
            }
        }
        
        let AttaquerOuDefendre = document.getElementById(idBouton)

        switch(AttaquerOuDefendre.id){
            case "attaquer":
            
                if(joueur2.action = "defendre"){
                    joueur2.force = this.force - (armeDegat/2)
                    if(joueur2.force > 0){
                        joueur1.combattre = false
                        joueur2.combattre = true
                    }else{
                        alert("combat terminé")
                    }
                }else{
                    joueur2.force = this.force - armeDegat
                    if(joueur2.force > 0){
                        joueur1.combattre = false
                        joueur2.combattre = true
                    }else{
                        alert("combat terminé")
                    }
                }
                joueur1.action = "attaquer"
            break;

            case "defendre":

                joueur1.action = "defendre" 
            break;       
        }

        
    }
}

export{Combat}