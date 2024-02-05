class Storm{

    constructor(){
        
        this.lightnings=[]
        this.counter=0

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
               
                lightning.move()
                
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