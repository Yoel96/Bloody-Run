class Storm{

    constructor(isMoving,direction){
        
        this.lightnings=[]
        this.counter=0
        this.isMoving=isMoving
        this.direction=direction

    }

    start(){

          


    }


    spawnLightning(){

        this.counter++
        if(this.counter>100){
            
            let positionLeft= Math.floor(Math.random()*100)
            let lightning= new Lightning(positionLeft,this.lightnings)
            lightning.start()
            this.lightnings.push(lightning)
            this.counter=0
            this.removeLightning()
        
        }




    }



    moveLightning(){

        if(this.lightnings.length>0){

            
            this.lightnings.forEach((lightning)=>{
               
                lightning.move(this.isMoving,this.direction)
                
            })


           

             
        }


    }
    
    removeLightning(){
        
        
        this.lightnings=this.lightnings.filter((value)=>{

            return value.topPosition<100

        })
        
        console.log(this.lightnings)
    }



}