var counter = 0;





function newProjectile() {
  $('ul').append("<li class='projectile'>ball</li>");
  console.log('pew')
}




$(document).ready(function(){


  $('ul').click(function(){
    $('.projectile').addClass('move');
    setTimeout(newProjectile, 2000);
    counter++;
    // console.log('test');
    // console.log(counter);

  });



  function collision() {
    var $projectile = $('.projectile'),
    projectile = $projectile[counter-1],
    ballRect = projectile.getBoundingClientRect();
    // console.log(ballRect);
    var $target = $('.target'),
    target = $target[0],
    targetRect = target.getBoundingClientRect();
    if (targetRect.x < ballRect.x + ballRect.width &&
      targetRect.x + targetRect.width > ballRect.x &&
      targetRect.y < ballRect.y + ballRect.height &&
      targetRect.y + targetRect.height > ballRect.y) {
        // $(".target").remove();
        // targetRect.height = 0;    GETS RID OF TARGET AFTER HIT
        // targetRect.width = 0;
        alert("test");
      }
  }

var test = setInterval(collision, 500);



});
