class Player{

    constructor(topPosition,leftPosition,lives){

        this.playerSprite
        this.topPosition= topPosition
        this.leftPosition= leftPosition
        this.playerWidth=10
        this.playerHeight = 10
        this.sprites=["","","",""]
        this.lives = lives
        this.isAlive = true;
        this.runningAudio
        
        
    }



    start(){

        this.playerSprite=document.getElementById("player")
        this.playerSprite.style.left=this.leftPosition + "vw"
        this.playerSprite.style.width=this.playerWidth + "vw"
        this.playerSprite.style.top=this.topPosition + "vh"
        this.runningAudio= new Audio("../assets/Sound/runningSound.mp3")
        this.runningAudio.loop=true
        this.showLives()
    }


    showLives(){

      
        for(let i=0;i<this.lives;i++){
            console.log(i)
            let live = document.createElement("img")
            live.setAttribute("src", "../assets/blood.png")
            live.classList.add("liveImage")
            document.getElementById("livesContainer").appendChild(live)
             

        }

    }


    checkIsAlive(){
        if(this.lives>0){
        this.isAlive=true
        }else{
        this.isAlive =false
        }
    }


    playerMoving(direction){

        //cambiar los sprites segun dirección
        if(this.lives>0){

            this.runningAudio.play()
            if(direction==1){

                this.playerSprite.setAttribute("class","runningAnimation")
            }

         

        }
        



    }


    playerStop(direction){

        this.playerSprite.setAttribute("class","idleAnimation")
        this.runningAudio.pause()
    }

   



}