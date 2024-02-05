class Lightning{

    constructor(leftPosition,lightnings){
     
        this.lightningSprite
        this.leftPosition=leftPosition
        this.topPosition= 0
        this.intervalId
        this.lightnings=lightnings

    }

    start(){

        this.lightningSprite=document.createElement("div")
        this.lightningSprite.classList.add("enemyObject")
        this.lightningSprite.style.left= this.leftPosition+"vw"
        document.getElementById("enemiesSpawn").appendChild(this.lightningSprite)
       

    }


    move(){
        
        this.topPosition++
        this.lightningSprite.style.top=this.topPosition+"vh"
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        if(this.topPosition>110){
            let thislightning=this
            this.lightningSprite.remove()
            this.lightnings.filter((value)=>{

                return value!= thislightning

            })

        }

    }
    


}