class Enviroment {

    constructor() {

        this.groundSprite
        this.ground2Sprite
        this.groundLeft = 0
        this.ground2Left = 100
        this.opacity


    }

    start() {

        this.groundSprite = document.getElementById("ground")
        this.ground2Sprite = document.getElementById("ground2")

    }


    changeSky() {



    }


    move(direction) {

        if (direction == 1) {

            this.groundLeft--
            this.ground2Left--
            if (parseInt(this.groundSprite.style.left.split("vw")[0]) + 100 <= 0) {
                this.groundLeft = 99
            }

            if (parseInt(this.ground2Sprite.style.left.split("vw")[0]) + 100 <= 0) {
                this.ground2Left = 99
            }

        
        } else {

            this.groundLeft++
            this.ground2Left++

            if (parseInt(this.groundSprite.style.left.split("vw")[0]) >= 100) {
                this.groundLeft = -100 + 1
            }
            if (parseInt(this.ground2Sprite.style.left.split("vw")[0]) >= 100) {
                this.ground2Left = -100 + 1
            }


        }

        this.groundSprite.style.left = this.groundLeft + "vw"
        this.ground2Sprite.style.left = this.ground2Left + "vw"
    }



}