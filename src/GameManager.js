class GameManager{

    constructor(matchTimer,playerLives){

        self=this
        this.matchTimer=matchTimer
        this.currentTime=0
        this.progress=0
        this.moveInterval
        this.timeInterval
        this.spawnInterval
        this.player
        this.playerLives=playerLives
        this.enviroment
        this.onMove=false
        this.direction=1
        this.lightnings=[]
 
    }



    menu(){

        //Manejar botones del menu y mostrar el contexto


    }



    startGame(){
        //creamos objeto del enemigo, del jugador y del entorno
        this.player= new Player(80, 45, 10)
        this.player.start()
        this.enviroment= new Enviroment()
        this.enviroment.start()
        this.onGame()
    }



    onGame(){
        //manejar el juego
        this.timeController()
         this.spawnLightning()
        //inputs de los botones
     
    }

 

    spawnLightning(){

        this.spawnInterval= setInterval(()=>{
    
            let lightning= new Lightning()
            //console.log(lightning)
            lightning.createLightning()
            this.lightnings.push(lightning)

        },1000)


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