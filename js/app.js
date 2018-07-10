/******* LIST OF VARIABLES  *******/
let modal = document.querySelector(".modal");
let life = document.querySelectorAll("modal-content.life");


/******* ENEMY  *******/
// Enemies our player must avoid
class Enemy {

 constructor(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x;
    this.y = y;
    this.width = 70; // for collison
    this.height = 70; // for collison

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    this.speed = Math.floor(Math.random() * 230 );
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
update(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if(this.x > 505){ // 505 - width
      this.x = -200;
    }
    // dt multiplier ensures game runs at same speed for all computers

// If statements keep the enemies within road tiles
// collision detection

// collision isusses - source https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
if ( (player.x < this.x + this.width) &&
     (player.x + player.width > this.x) &&
     (player.y < this.y + this.height) &&
     (player.height + player.y > this.y)){
       begining();
     }
   }
// Draw the enemy on the screen, required method for game
   render(){
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   }
 };


// player position when she have collision with enemy and when she reach water.
function begining(){
  player.x = 305;
  player.y = 405;
};

/******* PLAYER *******/
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x,y) {
    this.sprite ="images/char-horn-girl.png";
    this.x = x;
    this.y = y;
  }

  update(dt){
    this.x =player.x;
    this.y =player.y;
    this.width = 70;
    this.height = 70;

    if(this.y <15){
      endGame();
      begining();
    }
  }

  render(){
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(val){
    switch (val){
      case "left":
        this.x -= 100;
        if (this.x <= 2){
            this.x = 2;
          }
      break;

      case "up":
        this.y -= 90;
        if (this.y <= 2){
            this.y = 2;
          }
      break;

      case "right":
        this.x += 100;
        if (this.x >= 400){
            this.x = 400;
          }
     break;

     case "down":
       this.y += 93;
        if (this.y >=400){
            this.y = 400;
          }
       break;
        }
      }
    };

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

let enemy1 = new Enemy(-100,60);
let enemy2 = new Enemy(-20,144);
let enemy3 = new Enemy(-200,230);
let enemy4 = new Enemy(-90,60);
let enemy5 = new Enemy(-300,144);
var allEnemies =[enemy1,enemy2,enemy3,enemy4,enemy5];

// Place the player object in a variable called player
const player = new Player(305,405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Modal
function endGame(){
    modal.style.display ="block";
  };
