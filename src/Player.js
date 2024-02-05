class Player{

    constructor(topPosition,leftPosition){

        this.playerSprite
        this.topPosition= topPosition
        this.leftPosition= leftPosition
        this.playerWidth=10
        this.playerHeight = 5
        this.sprites=["","","",""]
        this.lives = 3
        this.isAlive = true;
        
    }

    start(){

        this.playerSprite=document.getElementById("player")
        this.playerSprite.style.left=this.leftPosition + "vw"
        this.playerSprite.style.width=this.playerWidth + "vw"
        this.playerSprite.style.top=this.topPosition + "vh"

    }

    checkIsAlive(){
        if(this.lives>0){
        this.isAlive=true
        }else{

        this.isAlive =false
        }
    }


    move(direction){

        //cambiar los sprites segun dirección





    }

   



}