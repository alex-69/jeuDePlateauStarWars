class Combat{

    combattre(idBouton, joueurTab, armeTab){

        
        let joueur1 = null
        let armeDegat = null
        let joueur2 = null
        
        //selectionne qui peut combattre
        for (let i = 0; i < joueurTab.length; i ++){

            if(joueurTab[i].combattre == true){
                
                joueur1 = joueurTab[i]
               
                if((joueur1).nom == 'Luke'){

                    $('#attaquer-luke').css('visibility', 'hidden')
                    $('#défendre-luke').css('visibility', 'hidden')
                    $('#attaquer-vador').css('visibility', 'visible')
                    $('#défendre-vador').css('visibility', 'visible')
                }else if ((joueur1).nom == 'Vador'){

                    $('#attaquer-luke').css('visibility', 'visible')
                    $('#défendre-luke').css('visibility', 'visible')
                    $('#attaquer-vador').css('visibility', 'hidden')
                    $('#défendre-vador').css('visibility', 'hidden')
                }
            }else if(joueurTab[i].combattre == false) {
                
                joueur2 = joueurTab[i]
                
            }
        }
        
        //récupère la puissance de dégats de l'arme
        for (let i = 0; i < armeTab.length; i++){

            if(joueur1.arme == armeTab[i].nom){
                armeDegat = armeTab[i].degats

            }
        }
      
        //Si le joueur attaque
        if(idBouton.id == "attaquer-luke" ^ idBouton.id == "attaquer-vador"){

                //si le joueur adverse est postion défense
                if(joueur2.action == "defendre" ){

                    joueur2.force = joueur2.force - (armeDegat/2)

                   if(joueur2.nom == 'Luke'){

                        $('#vie-luke').text(joueur2.force + ' points de vie')

                   }else if(joueur2.nom == 'Vador'){

                        $('#vie-vador').text(joueur2.force + ' points de vie')
                   }
                    if(joueur2.force > 0){

                        joueur1.combattre = false
                        joueur2.combattre = true
                        joueur1.action = "attaquer" 
                        
                    }else{
                        //si la vie du joueur est inférieur ou égal à 0, le joueur est mort
                        alert(joueur2.nom + ' est mort')
                        $('button').css('visibility', 'hidden')

                        if(joueur2.nom == 'Luke'){

                            $('#vie-luke').text(joueur2.nom + ' est mort')

                        }else if(joueur2.nom == 'Vador'){

                            $('#vie-vador').text(joueur2.nom + ' est mort')
                        }
                        
                    }
                //si le joueur adverse n'est pas en position défense
                }else if (joueur2.action == "attaquer"){

                    joueur2.force = joueur2.force - armeDegat

                    if(joueur2.nom == 'Luke'){

                        $('#vie-luke').text(joueur2.force + ' points de vie')

                    }else if(joueur2.nom == 'Vador'){

                        $('#vie-vador').text(joueur2.force + ' points de vie')
                    }
                   
                    if(joueur2.force > 0){

                        joueur1.combattre = false
                        joueur2.combattre = true
                        joueur1.action = "attaquer"    

                    }else{
                        alert(joueur2.nom + ' est mort')

                        $('button').css('visibility', 'hidden')

                        if(joueur2.nom == 'Luke'){

                            $('#vie-luke').text(joueur2.nom + ' est mort')

                        }else if(joueur2.nom == 'Vador'){
                            
                            $('#vie-vador').text(joueur2.nom + ' est mort')
                        }
                        $('#vie-luke').text(joueur2.nom + ' est mort')
                    }
                }
                
        //Le joueur se défend
        }else if (idBouton.id == "défendre-luke" ^ idBouton.id == "défendre-vador"){

                joueur1.action = "defendre" 
                joueur1.combattre = false
                joueur2.combattre = true

        }
    
    }

}

export{Combat}