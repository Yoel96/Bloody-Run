class Storm{

    constructor(isMoving, direction, player){
        
        this.lightnings=[]
        this.counter=0
        this.isMoving=isMoving
        this.direction=direction
        this.player=player

    }

    start(){

          


    }

/* 
    spawnLightning(){

        this.counter++
        if(this.counter>100){
            
            let positionLeft= Math.floor(Math.random()*100)
            let lightning= new Lightning(positionLeft,this.lightnings)
            lightning.start()
            this.lightnings.push(lightning)
            this.counter=0
             
        
        }




    } */



    moveLightning(){

        if(this.lightnings.length>0){

            
            this.lightnings.forEach((lightning)=>{
               
                lightning.move(this.isMoving,this.direction)
         

            })


           

             
        }


    }
    

    checkCollisions(){

        let playerCheck= this.player
         this.lightnings.forEach((lightning)=>{
               
            if( lightning.leftPosition < ( playerCheck.leftPosition +  player.width) &&
            (lightning.leftPosition + this.width) > this.player.x &&
            this.y < (this.player.y + this.player.height) &&
            (this.y + this.height) > this.player.y){
              this.player.isDead = true
            }


        })



    }



    removeLightning(){
        
        
        this.lightnings=this.lightnings.filter((value)=>{

            return value.topPosition<100

        })
        
        console.log(this.lightnings)
    }



}