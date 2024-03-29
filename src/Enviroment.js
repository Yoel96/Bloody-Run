class Enviroment {
  constructor(player) {
    self = this;
    this.groundSprite;
    this.ground2Sprite;
    this.cloudsSprite;
    this.clouds2Sprite
    this.groundLeft;
    this.ground2Left;
    this.cloudsLeft;
    this.clouds2Left;
    this.castleLeft;
    this.castleWidht = 50;
    this.castleTop = 30;
    this.castleSprite;
    this.onMove = false;
    this.direction = -1;
    this.progress;
    this.enviromentInterval;
    this.player = player;
    this.isOnCastle;
    this.opacity;
    this.timerNight;
    this.timerMorning;
    this.morningBg;
    this.sunriseBg;
    this.nightBg;
  }

  start() {

    this.groundLeft = 0;
    this.ground2Left = 100;
    this.cloudsLeft = 0;
    this.clouds2Left = 100;
    this.castleLeft = 110;
    this.progress = 0;
    this.opacity = 1;
    this.isOnCastle = false;
    this.castleSprite = document.getElementById("castle");
    this.castleSprite.style.left = this.castleLeft+"vw"
    this.cloudsSprite = document.getElementById("storm1");
    this.clouds2Sprite = document.getElementById("storm2");
    this.groundSprite = document.getElementById("ground");
    this.ground2Sprite = document.getElementById("ground2");
    this.morningBg = document.getElementById("morning");
    this.sunriseBg = document.getElementById("sunrise");
    this.nightBg = document.getElementById("night");
    this.move();
  }




  move() {
    this.enviromentInterval = setInterval(() => {
      if (this.onMove) {
        if (this.direction == 1) {

          this.progress++;
          this.groundLeft--;
          this.ground2Left--;
          this.cloudsLeft-=0.3
          this.clouds2Left-=0.3

          if (this.groundLeft + 100 <= 0  ) {
            this.groundLeft = 99;
       
          }

          if (this.ground2Left + 100 <= 0  ) {
            this.ground2Left = 99;
          }

          if (this.cloudsLeft + 100 <= 0  ) {
            this.cloudsLeft = 99;
       
          }

          if (this.clouds2Left + 100 <= 0  ) {
            this.clouds2Left = 99;
       
          }

         



          if (this.progress > 600) {
            this.castleLeft--;
            this.castleSprite.style.left = this.castleLeft + "vw";
          }


        } else {

          this.progress--;
          this.groundLeft++;
          this.ground2Left++;
          this.cloudsLeft+=0.3
          this.clouds2Left+=0.3

          if (this.groundLeft >= 100  ) {
            this.groundLeft = -100 + 1;
           
          }
          
          if (this.ground2Left >= 100  ) {
            this.ground2Left = -100 + 1;
             
          }


          if (this.cloudsLeft  >= 100  ) {
            this.cloudsLeft = -99;
       
          }

          if (this.clouds2Left  >= 100  ) {
            this.clouds2Left = -99;
       
          }

          if (this.progress > 600) {
            this.castleLeft++;
            this.castleSprite.style.left = this.castleLeft + "vw";
          }
        
        }

        this.groundSprite.style.left = this.groundLeft + "vw";
        this.ground2Sprite.style.left = this.ground2Left + "vw";
        this.cloudsSprite.style.left = this.cloudsLeft + "vw";
        this.clouds2Sprite.style.left = this.clouds2Left + "vw";

      }

      this.checkCollisions();
    }, 16);
  }





  checkCollisions() {

    if (this.castleLeft <= this.player.leftPosition) {

      this.isOnCastle = true;

    } else {

      this.isOnCastle = false;
    }

  }

  backgroundChangesNight() {

    this.timerNight = setInterval(() => {
      this.opacity -= 0.01;
      this.nightBg.style.opacity = this.opacity;
    }, 500);

  }

  backgroundChangesSunrise() {

    this.timerMorning = setInterval(() => {
      this.opacity -= 0.01;
      this.sunriseBg.style.opacity = this.opacity;
    }, 500);

  }

  changeSky() {

    this.backgroundChangesNight();
    setTimeout(() => {
      this.backgroundChangesSunrise();
    }, 700);
    
  }
}
