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
        this.enemy
        this.enemies=[]
        this.enviroment
        this.onMove=false
        this.direction=1


    }



    menu(){

        //Manejar botones del menu y mostrar el contexto


    }



    startGame(){
        //creamos objeto del enemigo, del jugador y del entorno
        this.player=  new Player()
        this.player.start()
        this.enviroment= new Enviroment()
        this.enviroment.start()
        this.enemy= new Enemy(this.enemies)
        this.enemy.start()
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
                self.direction= -1  
                
            }
        
            if ( event.code=== "KeyD" && !self.onMove) {
                self.onMove=true
                self.direction= 1   
            }
        })

        window.addEventListener("keyup", (event) => {
            if (event.code=== "KeyA" && self.onMove)  {
                self.onMove= false
            }
        
            if ( event.code=== "KeyD" && !self.onMove) {
                self.onMove= false
            }
        })
    }


    moveController(){

        this.moveInterval=setInterval(()=>{

            if(self.onMove){
                self.enemy.spawnEnemies()
                self.player.move(direction)
                self.enviroment.move(self.direction)
                if(self.enemies.length>0){
                    self.enemies.forEach((enemy)=>{
                        enemy.move(direction)
                    })
                }
                
            }            

        },16)


    }



    timeController(){

        timeInterval= setInterval(()=>{
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