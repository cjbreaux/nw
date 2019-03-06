var counter = 0;

function newProjectile() {
  $('ul').prepend("<li class='projectile' id=" + counter + ">ball</li>");
  console.log('pew')
}

function removeProjectile() {
  $("#" + (counter-1)).remove();
}


$(document).ready(function(){


  document.body.onkeyup = function(e){
      if(e.keyCode == 32){
        $('.projectile').addClass('move');
        setTimeout(newProjectile, 2000);
        setTimeout(removeProjectile, 2000);
        counter++;
        console.log(counter);
      }
  };





  function collision() {
    var $projectile =$("#" + (counter-1)),
    projectile = $projectile[0]
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

var test = setInterval(collision, 100);


$(function () {
var pane = $('#wrapper'),
box = $('#hand'),
wh = pane.width() - box.width(),
wv = pane.height() - box.height(),
d = {},
x = 5;

function newh(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > wh ? wh : n;
}

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > wv ? wv : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    box.css({
        left: function(i,v) { return newh(v, 37, 39); },
        top: function(i,v) { return newv(v, 38, 40); }
    });
    wh = pane.width() - box.width();
    wv = pane.height() - box.height();
}, 20);
});
});
