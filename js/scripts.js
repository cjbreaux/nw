var counter = 0;





function newProjectile() {
  $('ul').prepend("<li class='projectile'>ball</li>");
  console.log('pew')
}

function removeProjectile() {
  $('.projectile').removeClass('projectile');
}



$(document).ready(function(){


  $('ul').click(function(){
    $('.projectile').addClass('move');
    setTimeout(newProjectile, 2000);
    counter++;
    // setTimeout(removeProjectile, 1999);
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


var pane = $('#wrapper'),
    box = $('#hand'),
    w = pane.width() - box.width(),
    d = {},
    x = 10;

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    box.css({
        left: function(i,v) { return newv(v, 37, 39); },
        top: function(i,v) { return newv(v, 38, 40); }
    });
}, 20);

});
