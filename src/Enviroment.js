class Enviroment {

    constructor() {
        self=this
        this.groundSprite
        this.ground2Sprite
        this.groundLeft = 0
        this.ground2Left = 100
        this.opacity
        this.onMove=false
        this.direction=-1
        this.enviromentInterval


    }

    start() {

        this.groundSprite = document.getElementById("ground")
        this.ground2Sprite = document.getElementById("ground2")
        this.move()
        this.checkInputs()
    }


    changeSky() {



    }

    checkInputs(){
        window.addEventListener("keydown", (event) => {
            if (event.code=== "KeyA" && ! this.onMove)  {
                this.onMove=true
                this.direction= -1  
               
            }
        
            if ( event.code=== "KeyD" && ! this.onMove) {
                this.onMove=true
                this.direction= 1   
            }
        })

        window.addEventListener("keyup", (event) => {
            if (event.code=== "KeyA" && this.onMove)  {
                this.onMove= false
            }
        
            if ( event.code=== "KeyD" && this.onMove) {
                this.onMove= false
            }
        })




    }

    move( ) {

        this.enviromentInterval=setInterval(()=>{
             
           if(this.onMove ){
            if (this.direction == 1) {

                this.groundLeft--
                this.ground2Left--
                if (this.groundLeft + 100 <= 0) {
                    this.groundLeft = 99
                }
    
                if (this.ground2Left+ 100 <= 0) {
                    this.ground2Left = 99
                }
    
            
            } else {
    
                this.groundLeft++
                this.ground2Left++
    
                if (this.groundLeft >= 100) {
                    this.groundLeft = -100 + 1
                }
                if (this.ground2Left >= 100) {
                    this.ground2Left = -100 + 1
                }
    
    
            }
    
            this.groundSprite.style.left = this.groundLeft + "vw"
            this.ground2Sprite.style.left = this.ground2Left + "vw"
        }
        }, 16)

       
    }



}