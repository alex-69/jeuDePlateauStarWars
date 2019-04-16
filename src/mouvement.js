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
        let kaseActuel = document.getElementById(joueur.positionId)

        //case ou le joueur doit aller
        let kaseSuivante = document.getElementById(idCase)

        this.casesDisponibles(kaseActuel, kaseSuivante, joueur, joueurTab)
        return joueurTab
        
    }

}