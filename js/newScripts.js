function Enemy(name, selector) {
  this.name = name;
  this.selector = selector;
}

function Projectile(type, selector) {
  this.type = type;
  this.selector = selector;
}



$(document).ready(function(){

//Storing jQuery objects//
var blueBox = $('.box1');
var pinkBox = $('.box2');
var handBox = $('.handBox');

//Storing the jQuery objects in newly constructed objects//
var pink = new Enemy('Pink',pinkBox);
var blue = new Enemy('Blue',blueBox);
var fireball = new Projectile('Fireball',handBox);

//Object Arrays
var enemyObjArr = [pink,blue];
var colliderArr = [pink,blue,fireball];



//This function takes in an object and gives it positional information//
  function getPosition(object){
    var $objPos = object.selector;
    objPos = $objPos[0];
    objRect = objPos.getBoundingClientRect();
    object.x = objRect.x;
    object.y = objRect.y;
    object.width = objRect.width;
    object.height = objRect.height;
    }



//This function will use the positional information stored in two objects and determine if they overlap//
 function collision(enemy,projectile) {
   if (enemy.x < projectile.x + projectile.width &&
     enemy.x + enemy.width > projectile.x &&
     enemy.y < projectile.y + projectile.height &&
     enemy.y + enemy.height > projectile.y) {
       console.log('HIIIITTTTTT')
     }
 }

//These loops will run their functions at specific intervals. Note: an anonymous function must be used with setInterval() in order to pass in a function with argurments.//

  enemyObjArr.forEach(function(enemy) {
    setInterval( function() { collision(enemy,fireball); }, 100 );
  });

  colliderArr.forEach(function(obj) {
    setInterval( function() { getPosition(obj); }, 500 );
  });



});
