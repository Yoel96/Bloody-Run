class Enemy{

    constructor(enemies){

        this.enemies=enemies
        this.counter=0
    }

    start(){


    }

    spawnEnemies(){

        this.counter++
        if(this.counter>700){
            //crear enemigo y mostrarlo por pantalla

            this.counter=0
        }




    }


}