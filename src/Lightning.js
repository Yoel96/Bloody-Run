class Lightning{

    constructor(leftPosition,lightnings){
     
        this.lightningSprite
        this.leftPosition=leftPosition
        this.topPosition= 0
        this.intervalId
 
    }

    start(){

        this.lightningSprite=document.createElement("div")
        this.lightningSprite.classList.add("enemyObject")
        this.lightningSprite.style.left= this.leftPosition+"vw"
        document.getElementById("enemiesSpawn").appendChild(this.lightningSprite)
       

    }


    move(isMoving,direction){
        
        this.topPosition++
        this.lightningSprite.style.top=this.topPosition+"vh"
    

        if(isMoving){


            if (direction === 1) {
            
                this.leftPosition--
                this.lightningSprite.style.left= this.leftPosition+"vw"
            
            }else{
                this.leftPosition++
                this.lightningSprite.style.left= this.leftPosition+"vw"


            }
            
            


        }
        




        
        if(this.topPosition>110){
            this.removeLightning()
          
        }

    }
    

    removeLightning(){


        this.lightningSprite.remove()

    }



}