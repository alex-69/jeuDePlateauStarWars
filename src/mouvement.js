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

    // vérifier toutes les cases disponibles autour du joueur

    casesDisponibles(kaseActuel, kaseSuivante, joueur, joueurTab){
        const LIMIT_DEPLACER = 3
        let test = new Joueur()
        
        if(kaseSuivante.id != kaseActuel.id && !kaseSuivante.hasAttribute('data-joueur') && ! kaseSuivante.hasAttribute('data-case-nonaccessible')){
            //mettre à jour la position du joueur
            kaseSuivante.SetAttribute('data-class', kaseActuel.dataset.class)
            kaseSuivante.SetAttribute('data-player', player.nom)
            kaseSuivante.className = kaseActuel.dataset.class

            //supprimer l'ancienne position du joueur
            kaseActuel.classlist.remove(kaseActuel.dataset.class)
            kaseActuel.removeAtribute('data-class')
            kaseActuel.removeAtribute('data-player')

            joueur.positionId = nextKase.id
            joueur.compterDeplacement++

            if(joueur.compterDeplacement == LIMIT_DEPLACER){
                let d = test.permettreDeplacementJoueur(joueurTab, joueur)
            }
                return true;
        }
        return false;
        
    }

}

export{Deplacement}
