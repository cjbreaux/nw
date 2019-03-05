var counter = 0;





function newProjectile() {
  $('ul').append("<li class='projectile'>ball</li>");
  console.log('pew')
}




$(document).ready(function(){


  $('ul').click(function(){
    $('.projectile').addClass('move');
    newProjectile();
    counter++;
    console.log('test');
    console.log(counter);

  });

  var $target = $('.target'),
      target = $target[0],
      targetRect = target.getBoundingClientRect();

  console.log(targetRect);

  function getPosition() {
    var $projectile = $('.projectile'),
    projectile = $projectile[counter-1],
    ballRect = projectile.getBoundingClientRect();
    console.log(ballRect);
    if (targetRect.x < ballRect.x + ballRect.width &&
      targetRect.x + targetRect.width > ballRect.x &&
      targetRect.y < ballRect.y + ballRect.height &&
      targetRect.y + targetRect.height > ballRect.y) {
        alert("collision");
      }

  }

var test = setInterval(getPosition, 500);


});
