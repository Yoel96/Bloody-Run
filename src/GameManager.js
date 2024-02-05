class GameManager{

    constructor(matchTimer,playerLives){

        self=this
        this.matchTimer=matchTimer
        this.currentTime=0
      
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
        document.querySelector("#mainMenu button").addEventListener("click",()=>{
            console.log("hola")
            document.querySelector("#menu").style.display="none"
            this.startGame()

        })

      

    }



    startGame(){
        //creamos objeto del enemigo, del jugador y del entorno
        this.player= new Player(80, 45, 10)
        this.player.start()
        this.enviroment= new Enviroment(this.player)
        this.enviroment.start()
        this.onGame()
    }



    onGame(){
        //manejar el juego
        this.timeController()
        this.spawnLightning()
        
     
    }

 

    spawnLightning(){

        this.spawnInterval= setInterval(()=>{
    
            let lightning= new Lightning(this.lightnings,this.player)
            //console.log(lightning)
            lightning.createLightning()
            this.lightnings.push(lightning.lightningSprite)

        },500)


    }
    
    timeController(){

        this.timeInterval= setInterval(()=>{
            this.player.checkIsAlive()
            console.log(this.enviroment.isOnCastle)
            if( this.enviroment.isOnCastle){
                
                this.gameWin()

            }

            if(this.player.isAlive){
                self.currentTime++
                if(self.currentTime>=(self.matchTimer/3)){
    
                    self.enviroment.changeSky()
    
                }
      
                if(self.currentTime>=(self.matchTimer)){
    
                    this.gameOver()
    
                }
            }else{

                this.gameOver()

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
/*
        if(progress>=6){

            this.gameWin()

        }*/

    }

    gameWin(){
        
        clearInterval(this.moveInterval)
        clearInterval(this.timeInterval)
        clearInterval(this.spawnInterval)
        clearInterval(this.enviroment.enviromentInterval)

    }

    gameOver(){

        clearInterval(this.moveInterval)
        clearInterval(this.timeInterval)
        clearInterval(this.spawnInterval)
        clearInterval(this.enviroment.enviromentInterval)
 
        this.menu()

    }


}



const gM= new GameManager(4000,3)
gM.menu()