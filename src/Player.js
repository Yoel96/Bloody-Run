class Player{

    constructor(topPosition,leftPosition, playerWidth){

        this.playerSprite
        this.topPosition= topPosition
        this.leftPosition= leftPosition
        this.playerWidth=playerWidth
        this.sprites=["","","",""]
        
    }

    start(){

        this.playerSprite=document.getElementById("player")
        this.playerSprite.style.left=this.leftPosition + "vw"
        this.playerSprite.style.width=this.playerWidth + "vw"
        this.playerSprite.style.top=this.topPosition + "vh"

    }

    move(direction){

        //cambiar los sprites segun dirección





    }




}