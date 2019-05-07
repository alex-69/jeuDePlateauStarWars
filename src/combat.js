class Combat{

    combattre(idBouton, joueurTab, armeTab){

        let joueur1 = null
        let armeDegat = null

        let joueur2 = null
         
        //selectionne qui peut combattre
        for (let i = 0; i < joueurTab.length; i ++){

            if(joueurTab[i].combattre == true){
                
                joueur1 = joueurTab[i]
                

            }else if (joueurTab[i].combattre == false){

                joueur2 = joueurTab[i]
                console.log(joueur2.action)
            }
        }

        for (let i = 0; i < armeTab.length; i++){

            if(joueur1.arme == armeTab[i].nom){
                armeDegat = armeTab[i].degats
                console.log(armeDegat)
               
            }
        }
      
        //le joueur attaque
        if(idBouton.id == "attaquer"){
           
                if(joueur2.action == "defendre" ){
                    joueur2.force = joueur2.force - (armeDegat/2)
                  
                    if(joueur2.force > 0){
                        joueur1.combattre = false
                        joueur2.combattre = true
                        joueur1.action = "attaquer" 
                        
                    }else{
                        alert(joueur2.nom + ' est mort')
                    }

                }else if (joueur2.action == "attaquer"){

                    joueur2.force = joueur2.force - armeDegat
                    console.log(joueur2.force)
                    console.log(joueur2.nom)

                    if(joueur2.force > 0){

                        joueur1.combattre = false
                        joueur2.combattre = true
                        joueur1.action = "attaquer" 
                        

                    }else{
                        alert(joueur2.nom + ' est mort')
                    }
                }
                
        //Le joueur se défend
        }else if (idBouton.id == "défendre"){

                joueur1.action = "defendre" 
                joueur1.combattre = false
                joueur2.combattre = true

        }
    
    }
}

export{Combat}