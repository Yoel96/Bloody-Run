class Lightning{

    constructor(lightnings,player){
        self=this
        this.lightningSprite
        this.leftPosition
        this.lightningWidth=5
        this.topPosition= -5
        this.lightnings=lightnings
        this.moveInterval
        this.direction=-1
        this.onMove=false
        this.player=player
        this.lightningHeight= 21
 
    }

    createLightning(){

        this.leftPosition=10+Math.floor(Math.random()*70)
        this.lightningSprite=document.createElement("div")
        this.lightningSprite.classList.add("lightning")
        this.lightningSprite.classList.add("lightningSprite")
        this.lightningSprite.style.left= this.leftPosition+"vw"
        document.getElementById("enemiesSpawn").appendChild(this.lightningSprite)
        this.move()
        this.checkInputs()
    }

 
    checkInputs(){

       
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
        
            if ( event.code=== "KeyD" && self.onMove) {
                self.onMove= false
            }
        })



    }
 
    move(){
        
      
        

        this.moveInterval=setInterval(()=>{
 
            this.topPosition+=2
            this.lightningSprite.style.top=this.topPosition+"vh"
        
            if(this.topPosition>150){

                this.removeLightning(false)
            }
    
            if(self.onMove){
    
    
                if (self.direction === 1) {
                
                    this.leftPosition--
                    this.lightningSprite.style.left= this.leftPosition+"vw"
                
                }else{
                    this.leftPosition++
                    this.lightningSprite.style.left= this.leftPosition+"vw"
    
    
                }
                
                
    
    
            }
            this.checkCollisions()

        },16)
       

        
      

    }


    checkCollisions(){


        if( this.leftPosition < (this.player.leftPosition + this.player.playerWidth) &&
        (this.leftPosition + this.lightningWidth) > this.player.leftPosition &&
        this.topPosition < (this.player.topPosition + this.player.playerHeight) &&
        (this.topPosition + this.lightningHeight) > this.player.topPosition){
    
            this.removeLightning(true)
          this.player.lives--
          console.log(this.player.lives)
       
        }


    }
   
 
    removeLightning(isHit){

       // console.log(this.lightnings)
     
     
            
            clearInterval(this.moveInterval)
            if(isHit){
                this.showBurst()

            }
            
            setTimeout(()=>{
                this.player.playerSprite.classList.remove("playerHit")
                document.getElementById("enemiesSpawn").removeChild(this.lightningSprite)
                this.lightnings = this.lightnings.filter(enemy => {
                    return enemy !== this.lightningSprite
                  })
                 },500)
                 
         
    
    }

    showBurst(){

        this.lightningSprite.classList.remove("lightningSprite")
        this.lightningSprite.classList.add("lightningBurst")
        this.player.playerSprite.classList.add("playerHit")
        this.lightningSprite.style.width= "7vw"
        this.lightningSprite.style.left= "50vw"
        this.lightningSprite.style.top= "65vh"

    }


}