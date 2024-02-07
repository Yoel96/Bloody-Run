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
        this.isGameOver 
        this.event
        this.event2
        
 
    }



    startMenu(){

        //Manejar botones del menu y mostrar el contexto
        this.event2 = document.querySelector("#menu button").addEventListener("click",()=>{
             
            document.getElementById("menu").classList.remove("showMenu")
            document.getElementById("menu").classList.add("hideMenu")
            
            this.startGame()
            console.log("menu Pulsado")

        })



      

    }


    gameOverMenu(){
        document.getElementById("gameOver").classList.add("showMenu")
        document.getElementById("gameOver").classList.remove("hideMenu")

        this.event=document.querySelector("#gameOver button").addEventListener("click",()=>{
            document.getElementById("gameOver").classList.remove("showMenu")
            document.getElementById("gameOver").classList.add("hideMenu")
            this.reStartGame()
            console.log("menu Pulsado")

        })
    }

    reStartGame(){
         this.player= null
         this.enviroment= null
         this.lightnings=[]
         this.isGameOver=false
         this.currentTime=0
         this.event=null
         this.event2=null
         this.startGame()
    }


    startGame(){
        //creamos objeto del enemigo, del jugador y del entorno
        this.player= new Player(70.5, 45)
        this.player.start(this.playerLives)
        this.enviroment= new Enviroment(this.player)
        this.enviroment.start()
        this.enviroment.changeSky()       
        this.gameOverAudio=new Audio("../assets/Sound/loseSound.mp3")
        this.onGame()
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
            this.lightnings.push(lightning)

        },1500)


    }
    
    timeController(){

        this.timeInterval= setInterval(()=>{
            this.player.checkIsAlive()
            if( this.enviroment.isOnCastle){
                this.isGameOver=true   

                this.gameWin()

            }

            if(this.player.isAlive){
                this.currentTime+=0.5
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
        
       

        
    }

    gameWin(){
         this.player.playerStop(this.direction)    
        this.clearAllIntervals()


    }

    gameOver(){
        
        this.gameOverAudio.play()
        this.clearAllIntervals()
        this.player.playerSprite.setAttribute("class", "deathAnimation")
        this.gameOverMenu()
 
         

    }


    clearAllIntervals(){
     
        this.lightnings.forEach((lightning)=>{
            clearInterval(lightning.moveInterval)
        })

        clearInterval(this.timeInterval)
        clearInterval(this.spawnInterval) 
        clearInterval(this.enviroment.enviromentInterval)  
        clearInterval(this.enviroment.timerMorning)
        clearInterval(this.enviroment.timerNight)
        


    }

}



const gM= new GameManager(25,3)
gM.startMenu()