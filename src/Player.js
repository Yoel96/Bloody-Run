class Player{

    constructor(topPosition,leftPosition){

        this.playerSprite
        this.topPosition= topPosition
        this.leftPosition= leftPosition
        this.playerWidth=10
        this.playerHeight = 10
        this.lives = 3
        this.isAlive = true;
        this.runningAudio
        

        
    }



    start(){
        this.playerSprite=document.getElementById("player")
        this.playerSprite.classList.remove("class","deathAnimation")
        this.playerSprite.classList.add("class","idleAnimation")
        this.playerSprite.style.left=this.leftPosition + "vw"
        this.playerSprite.style.width=this.playerWidth + "vw"
        this.playerSprite.style.top=this.topPosition + "vh"
        this.runningAudio= new Audio("/assets/Sound/runningSound.mp3")
        this.runningAudio.loop=true
        this.showLives()
    }


    showLives(){
       let livesSprite =document.querySelectorAll(".liveImage")
        if(livesSprite.length>0){
            document.getElementById("livesContainer").innerHTML=""

            }

        for(let i=0;i<this.lives;i++){

            let live = document.createElement("img")
            live.setAttribute("src", "/assets/blood.png")
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
                this.playerSprite.classList.add("class","runningAnimation")
                this.playerSprite.classList.remove("class","runningLeftAnimation")

            }else{
                this.playerSprite.classList.add("class","runningLeftAnimation")
                this.playerSprite.classList.remove("class","runningAnimation")


            }

         

        }
        



    }


    playerStop(direction){
        this.playerSprite.classList.remove("class","runningAnimation")
        this.playerSprite.classList.remove("class","runningLeftAnimation")


        if(direction==1){
            this.playerSprite.classList.add("class","idleAnimation")
            this.playerSprite.classList.remove("class","idleLeftAnimation")

        }else{
            this.playerSprite.classList.add("class","idleLeftAnimation")
            this.playerSprite.classList.remove("class","idleAnimation")
            
        }

         this.runningAudio.pause()
    }

   



}
