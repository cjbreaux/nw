function newProjectile() {
  $('ul').append("<li class='projectile'>ball</li>");
  console.log('pew')
}




$(document).ready(function(){


  $('ul').click(function(){
    $('.projectile').addClass('move');
    newProjectile();


    console.log('test');
  });



});
