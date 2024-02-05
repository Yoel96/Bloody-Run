class Storm{

    constructor(){
        
        this.lightnings=[]
        this.counter=0
    }

    start(){

          


    }


    spawnLightning(){

        this.counter++
        if(this.counter>700){
            
            let positionLeft= Math.floor(Math.random()*100)
            let lightning= new Lightning(positionLeft)
            lightning.start()
            this.lightnings.push(lightning)
            console.log(this.lightnings)
            this.counter=0
        
        
        }




    }



    moveLightning(){

        if(this.lightnings.length>0){

            
            this.lightnings.forEach((lightning)=>{

                lightning.move()

            })


           

            console.log(lighnings)
        }


    }
    


}