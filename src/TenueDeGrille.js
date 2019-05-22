class TenueDeGrille{
    constructor(attributPremier, attributSecond, attributTroisieme, longueurGrille){
        this.attributPremier = attributPremier ? attributPremier : null
        this.attributSecond = attributSecond ? attributSecond : null
        this.attributTroisieme = attributTroisieme ? attributTroisieme : null
        this.longueurGrille = longueurGrille
    }

    parcourirTable(){
       let aleatInt = 0
       let kase = null
       let id = null
       let i = 0
       let j = 0

       while (i < this.longueurGrille){
           aleatInt = Math.floor(Math.random() * this.longueurGrille)
            if(aleatInt < 10){   
               id = 'td-0'
           }else {
               id = 'td-'
           }
           kase = document.getElementById(id + aleatInt)

           while(kase.hasAttribute(this.attributPremier) || kase.hasAttribute(this.attributSecond) || kase.hasAttribute(this.attributTroisieme) && j < this.longueurGrille){
               aleatInt = Math.floor(Math.random() * this.longueurGrille)
               if(aleatInt < 10){
                   id = 'td-0'
               }else {
                   id = 'td-'
               }
               kase = document.getElementById(id + aleatInt)
               j++
           }
           i++
       }
       return kase
    }

    
}

export{TenueDeGrille}