class GameManager {
  constructor(matchTimer, playerLives) {
    self = this;
    this.matchTimer = matchTimer;
    this.currentTime = 0;
    this.timeInterval;
    this.spawnInterval;
    this.player;
    this.playerLives = playerLives;
    this.enviroment;
    this.onMove = false;
    this.direction = 1;
    this.lightnings = [];
    this.gameOverAudio;
    this.isGameOver;
    this.gameAudio
    this.gameWinAudio
    this.mcqueenCounter=0
    
  }

  initializeEvents() {

    this.initializeMusic()


    document.querySelector("#gameOver button").addEventListener("click", () => {
      this.hideMenu("gameOver")
      this.gameAudio.currentTime = 0
       this.gameAudio.play()
      this.startGame();
    
    });

    document.getElementById("skip").addEventListener("click", () => {
      this.hideMenu("context")
      this.showMenu("menu")
       
    });

    document.querySelector("#menu button").addEventListener("click", () => {
      this.hideMenu("menu")
      this.startGame();
     });

    document.querySelector("#gameWin button").addEventListener("click", () => {
        this.hideMenu("gameWin")
        this.gameAudio.pause()
        this.gameAudio=new Audio("../assets/Sound/gameOST.mp3")

        this.gameAudio.currentTime = 0
        this.gameAudio.play()
        this.startGame();    

        });


      window.addEventListener("keydown", (event) => {

        if(event.code === "KeyA" ||event.code === "KeyD"){

        if (event.code === "KeyA" && !this.onMove) {
          this.onMove = true;
          this.direction = -1;
         }
  
        if (event.code === "KeyD" && !this.onMove) {
          this.onMove = true;
          this.direction = 1;
   
        }
  
        if (!this.isGameOver && this.onMove ) {
          this.player.playerMoving(this.direction); 
          this.changeMovementState()
        }
      }
      });
  
      window.addEventListener("keyup", (event) => {

        if(event.code === "KeyA" ||event.code === "KeyD"){
        if (event.code === "KeyA" && this.onMove) {
          this.onMove = false;
        }
  
        if (event.code === "KeyD" && this.onMove) {
          this.onMove = false;
        }
  
        if (!this.isGameOver) {
          this.player.playerStop(this.direction);
          this.changeMovementState()

        }
      }


      });

    
  }


  changeMovementState(){

    this.enviroment.direction = this.direction;
    this.enviroment.onMove = this.onMove;
    this.lightnings.forEach((lightning)=>{

      lightning.direction = this.direction;
      lightning.onMove = this.onMove;

    })


  }

  initializeMusic(){

    this.gameWinAudio=new Audio ("../assets/Sound/vampireLaugh.mp3")
    this.gameOverAudio = new Audio("../assets/Sound/loseSound.mp3");
    this.gameAudio=new Audio("../assets/Sound/gameOST.mp3")
    this.gameAudio.loop=true
    this.gameAudio.volume=0.1
    this.gameAudio.play()


  }

  showMenu(menuId){
    document.getElementById(menuId).classList.add("showMenu");
    document.getElementById(menuId).classList.remove("hideMenu");

     
  }


  hideMenu(menuId){
    document.getElementById(menuId).classList.remove("showMenu");
    document.getElementById(menuId).classList.add("hideMenu");

  }

  
  startGame() {
    document.getElementById("enemiesSpawn").innerHTML = "";
    this.currentTime = 0;
    this.mcqueenCounter=0
    this.currentTime = 0;
    this.lightnings = [];
    this.isGameOver = false;
    this.player = new Player(70.5, 45);
    this.player.start(this.playerLives);
    this.enviroment = new Enviroment(this.player);
    this.enviroment.start();
    this.enviroment.changeSky();
    this.timeController();
    this.spawnLightning();
  }

 
 

  spawnLightning() {
    
    this.spawnInterval = setInterval(() => {
      this.mcqueenCounter++
      let lightning
      if(this.mcqueenCounter>5){
       lightning = new Lightning(this.lightnings, this.player, true);
       this.mcqueenCounter=0
      }else{
      lightning = new Lightning(this.lightnings, this.player, false);

      }

      lightning.createLightning();
      this.lightnings.push(lightning);
      if (this.lightnings.length > 10) {
        this.clearLightnings();
      }
    }, 1500);
  }

  clearLightnings() {
    this.lightnings = this.lightnings.filter((enemy) => {
      return enemy.topPosition < 80;
    });
  }

  timeController() {
    this.timeInterval = setInterval(() => {
      this.player.checkIsAlive();
      if (this.enviroment.isOnCastle) {
        this.isGameOver = true;

        this.gameWin();
      }

      if (this.player.isAlive) {
        this.currentTime += 0.1;
        if (this.currentTime >= this.matchTimer) {
          this.isGameOver = true;
          this.gameOver();
        }
      } else {
        this.isGameOver = true;
        this.gameOver();
      }
    }, 100);
  }

  gameWin() {
    this.gameAudio.pause()
    this.gameAudio=new Audio("../assets/Sound/winningMusic.mp3")
    this.gameAudio.play();
    this.gameAudio.loop=true
    this.showMenu("gameWin")
 
    this.gameWinAudio.play()
    this.player.playerStop(this.direction);
    this.clearAllIntervals();
  }

  gameOver() {
    this.showMenu("gameOver")
    this.gameAudio.pause();
    this.gameOverAudio.play();
    this.player.playerStop(this.direction);
    this.clearAllIntervals();
    this.player.playerSprite.setAttribute("class", "deathAnimation");
  }

  clearAllIntervals() {

    clearInterval(this.timeInterval);
    clearInterval(this.spawnInterval);
    clearInterval(this.enviroment.enviromentInterval);
    clearInterval(this.enviroment.timerMorning);
    clearInterval(this.enviroment.timerNight);
     
  }


}

const gM = new GameManager(24, 3);
gM.initializeEvents();
