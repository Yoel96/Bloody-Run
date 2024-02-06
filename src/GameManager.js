class GameManager{

    constructor(matchTimer,playerLives){

        self=this
        this.matchTimer=matchTimer
        this.currentTime=0
        this.timeInterval
        this.spawnInterval
        this.player
        this.playerLives=playerLives
        this.enviroment
        this.onMove=false
        this.direction=1
        this.lightnings=[]
        this.gameOverAudio
        this.isGameOver=false
        
 
    }



    menu(){

        //Manejar botones del menu y mostrar el contexto
        document.querySelector("#menu button").addEventListener("click",()=>{
             
            document.querySelector("#menu").style.display="none"
            this.startGame()

        })

      

    }



    startGame(){
        //creamos objeto del enemigo, del jugador y del entorno
        this.player= new Player(70.5, 45, this.playerLives)
        this.player.start()
        this.enviroment= new Enviroment(this.player)
        this.enviroment.start()
        this.enviroment.changeSky()
        this.onGame()
        this.gameOverAudio=new Audio("../assets/Sound/loseSound.mp3")
    }


 

    onGame(){
        //manejar el juego
        this.timeController()
        this.spawnLightning()
        this.checkInputs()
     
    }

    checkInputs(){
        window.addEventListener("keydown", (event) => {

            if (event.code=== "KeyA" && !this.onMove   )  {
                this.onMove=true
                this.direction= -1  
                 
            }
        
            if ( event.code=== "KeyD" && !this.onMove  ) {
                this.onMove=true
                this.direction= 1
                   
            }

            if( !this.isGameOver){
                this.player.playerMoving(this.direction)
                this.enviroment.direction=this.direction
                this.enviroment.onMove=this.onMove

            }
           
        })

        window.addEventListener("keyup", (event) => {
            if (event.code=== "KeyA" && this.onMove  )  {
                this.onMove= false
            }
        
            if ( event.code=== "KeyD" && this.onMove  ) {
                this.onMove= false
            }
            if( !this.isGameOver){
            this.player.playerStop(this.direction)
            this.enviroment.direction=this.direction
            this.enviroment.onMove=this.onMove
            }
        })




    }


    spawnLightning(){

        this.spawnInterval= setInterval(()=>{
    
            let lightning= new Lightning(this.lightnings,this.player)
            lightning.createLightning()
            this.lightnings.push(lightning.lightningSprite)

        },1500)


    }
    
    timeController(){

        this.timeInterval= setInterval(()=>{
            this.player.checkIsAlive()
            console.log(this.enviroment.isOnCastle)
            if( this.enviroment.isOnCastle){
                this.isGameOver=true   

                this.gameWin()

            }

            if(this.player.isAlive){
                this.currentTime+=0.5
                console.log(this.currentTime)
                if(this.currentTime>=this.matchTimer){
    
                this.isGameOver=true   
                this.gameOver()

    
                }
      
               
            }else{
                this.isGameOver=true   

                this.gameOver()

            }
           
        },500)
        

    }

    progressController(){

        if (direction==1){

            this.progress++
                
        }else{
            this.progress--
        }
        
        if(progress>=1000){



        }


    }

    gameWin(){
         this.player.playerStop(this.direction)    
        this.clearIntervals()


    }

    gameOver(){
        
        this.gameOverAudio.play()
        this.clearIntervals()
        this.player.playerSprite.setAttribute("class", "deathAnimation")
        this.menu()

    }


    clearIntervals(){
     
        clearInterval(this.timeInterval)
        clearInterval(this.spawnInterval)
        clearInterval(this.enviroment.enviromentInterval)  
        clearInterval(this.enviroment.timerMorning)
        clearInterval(this.enviroment.timerNight)
        


    }

}



const gM= new GameManager(25,3)
gM.menu()