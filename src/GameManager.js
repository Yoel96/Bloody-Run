class GameManager{

    constructor(matchTimer,playerLives){

        self=this
        this.matchTimer=matchTimer
        this.currentTime=0
        this.progress=0
        this.moveInterval
        this.timeInterval
        this.player
        this.playerLives=playerLives
        this.enemies=[]
        this.storm
        this.enviroment
        this.onMove=false
        this.direction=1
        this.moveController= this.moveController.bind(this)

    }



    menu(){

        //Manejar botones del menu y mostrar el contexto


    }



    startGame(){
        //creamos objeto del enemigo, del jugador y del entorno
        this.player= new Player()
        this.player.start()
        this.storm= new Storm()
        this.enviroment= new Enviroment()
        this.enviroment.start()
        this.onGame()
    }



    onGame(){
        //manejar el juego
        this.timeController()
        this.moveController()
        //inputs de los botones
        window.addEventListener("keydown", (event) => {
            if (event.code=== "KeyA" && !self.onMove)  {
                self.onMove=true
                self.storm.direction= -1
                self.direction= -1  
               
            }
        
            if ( event.code=== "KeyD" && !self.onMove) {
                self.onMove=true
                self.storm.direction=1
                self.direction= 1   
            }
        })

        window.addEventListener("keyup", (event) => {
            if (event.code=== "KeyA" && self.onMove)  {
                self.onMove= false
            }
        
            if ( event.code=== "KeyD" && self.onMove) {
                self.onMove= false
            }
        })
    }


    moveController(){

        this.moveInterval=setInterval(()=>{
            
            self.storm.spawnLightning()
            self.storm.moveLightning()
            if(self.onMove){
                 self.enviroment.move(self.direction)
                 self.storm.isMoving=true
                 
            }else{

                self.storm.isMoving=false
            }
        },16)


    }

    
    timeController(){

        this.timeInterval= setInterval(()=>{
            self.currentTime++
            if(self.currentTime>=(self.matchTimer/3)){

                self.enviroment.changeSky()

            }

            if(self.currentTime>=(self.matchTimer/2)){

                self.enviroment.changeSky()


            }


            if(self.currentTime>=(self.matchTimer)){

                self.gameOver()

            }
        },1000)
        

    }

    progressController(){

        if (direction==1){

            this.progress++
                
        }else{
            this.progress--
        }
        
        if(progress>=1000){



        }

        if(progress>=1100){

            this.gameWin()

        }

    }

    gameWin(){



    }

    gameOver(){

        clearInterval(this.moveInterval)
        this.menu()

    }


}



const gM= new GameManager(4000,3)
gM.startGame()