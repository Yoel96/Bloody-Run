class Lightning{

    constructor(leftPosition){
        this.lightningSprite
        this.leftPosition=leftPosition
        this.topPosition= -10
        this.intervalId

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


    }
    


}