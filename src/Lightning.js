class Lightning{

    constructor(lightnings,player){
        self=this
        this.lightningSprite
        this.leftPosition
        this.lightningWidth=10
        this.topPosition= -10
        this.lightnings=lightnings
        this.moveInterval
        this.direction=-1
        this.onMOving=false
        this.player=player
        this.lightningHeight= 10
 
    }

    createLightning(){

        this.leftPosition=Math.floor(Math.random()*70)
        this.lightningSprite=document.createElement("div")
        this.lightningSprite.classList.add("enemyObject")
        this.lightningSprite.style.left= this.leftPosition+"vw"
        document.getElementById("enemiesSpawn").appendChild(this.lightningSprite)
        this.move()
        this.checkInputs()
    }


    checkInputs(){

       
        window.addEventListener("keydown", (event) => {
            if (event.code=== "KeyA" && !self.onMOving)  {
                self.onMOving=true
                self.direction= -1  
               
            }
        
            if ( event.code=== "KeyD" && !self.onMOving) {
                self.onMOving=true
                self.direction= 1   
            }
        })

        window.addEventListener("keyup", (event) => {
            if (event.code=== "KeyA" && self.onMOving)  {
                self.onMOving= false
            }
        
            if ( event.code=== "KeyD" && self.onMOving) {
                self.onMOving= false
            }
        })



    }

    move(){
        
      
        

        this.moveInterval=setInterval(()=>{
 
            this.topPosition++
            this.lightningSprite.style.top=this.topPosition+"vh"
        
            if(this.topPosition>150){

                this.removeLightning()
            }
    
            if(self.onMOving){
    
    
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
          console.log(this.player.lives)
          this.player.lives--
          this.removeLightning()
        }


    }
   
 
    removeLightning(){

       // console.log(this.lightnings)

        document.getElementById("enemiesSpawn").removeChild(this.lightningSprite)
        clearInterval(this.moveInterval)
        this.lightnings = this.lightnings.filter(enemy => {
          return enemy !== this.lightningSprite
        })

    
    }


}