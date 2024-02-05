class Lightning{

    constructor(){
        self=this
        this.lightningSprite
        this.leftPosition
        this.lightningWidth=200
        this.topPosition= -10
        this.lightnings=[]
        this.moveInterval
        this.direction=-1
        this.onMOving=false
 
    }

    createLightning(){

        this.leftPosition=Math.floor(Math.random()*100)
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
        
      
        

        let moveInterval=setInterval(()=>{
 
            this.topPosition++
            this.lightningSprite.style.top=this.topPosition+"vh"
        
            if(this.topPosition>110){


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


        },16)
       

        
      

    }


   
 



}