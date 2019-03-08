var counter = 0;

function newProjectile() {
  counter++;
  $('.hand ul').prepend("<li class='projectile' id=" + counter + "><img src='img/fireball.png'></li>");
  console.log('pew')
}


function removeProjectile() {
  $("#" + (counter-1)).remove();
}

function showMe() {
  $('.toHide').show();
}


$(document).ready(function(){

  $('button').click(function(){
    $('.title img').addClass('logo');
    $('.title').addClass('logoRotate');
    $('.start-screen').hide();
    setTimeout(showMe, 3000);
  })


  document.body.onkeyup = function(e){
      if(e.keyCode == 32){
        $('.projectile').appendTo(".thrower ul")
        $('.projectile').addClass('move');
        $('ul img').addClass('rotate');
        setTimeout(newProjectile, 2000);
        setTimeout(removeProjectile, 2000);
        moveBox();

        console.log(counter);
        console.log(moveBox());
      }
  };

function getLeftBox(){
  var $handBox = $('#hand');
  handBox = $handBox[0];
  handRect = handBox.getBoundingClientRect();
  handLeft = handRect.left;
  // console.log(handTop);
  return handLeft;
}

function getTopBox(){
  var $handBox = $('#hand');
  handBox = $handBox[0];
  handRect = handBox.getBoundingClientRect();
  handTop = handRect.top;
  // console.log(handTop);
  return handTop;
}

function moveBox () {
  var handLeft = getLeftBox();
  var handTop = getTopBox();
  var moveTest = $('.thrower');
  moveTest.css('position','absolute');
  moveTest.css('left', handLeft + 'px');
  moveTest.css('top', handTop + 'px');

}

function getLeftTarget(){
  var $targetBox = $('#target');
  targetBox = $targetBox[0];
  targetRect = targetBox.getBoundingClientRect();
  targetLeft = targetRect.left;
  // console.log(targetTop);
  return targetLeft;
}

function getTopTarget(){
  var $targetBox = $('#target');
  targetBox = $targetBox[0];
  targetRect = targetBox.getBoundingClientRect();
  targetTop = targetRect.top;
  // console.log(targetTop);
  return targetTop;
}

function moveTarget () {
  var targetLeft = getLeftTarget();
  var targetTop = getTopTarget();
  var moveTest = $('.targetDrop');
  moveTest.css('position','absolute');
  moveTest.css('left', targetLeft + 'px');
  moveTest.css('top', targetTop + 'px');

}

function getLeftTarget2(){
  var $targetBox = $('#target2');
  targetBox = $targetBox[0];
  targetRect = targetBox.getBoundingClientRect();
  targetLeft = targetRect.left;
  // console.log(targetTop);
  return targetLeft;
}

function getTopTarget2(){
  var $targetBox = $('#target2');
  targetBox = $targetBox[0];
  targetRect = targetBox.getBoundingClientRect();
  targetTop = targetRect.top;
  // console.log(targetTop);
  return targetTop;
}

function moveTarget2() {
  var targetLeft = getLeftTarget2();
  var targetTop = getTopTarget2();
  var moveTest = $('.targetDrop2');
  moveTest.css('position','absolute');
  moveTest.css('left', targetLeft + 'px');
  moveTest.css('top', targetTop + 'px');

}


function newGuy() {
  $('#target').show();
  $('.targetDrop').removeClass('magictime boingOutDown');
  $('.targetDrop').empty();
}

function newGuy2() {
  $('#target2').show();
  $('.targetDrop2').removeClass('magictime boingOutDown');
  $('.targetDrop2').empty();
}


  function collision() {
    var $projectile =$("#" + (counter)),
    projectile = $projectile[0]
    ballRect = projectile.getBoundingClientRect();
    // console.log(ballRect);
    var $target = $('#target'),
    target = $target[0],
    targetRect = target.getBoundingClientRect();
    if (targetRect.x < ballRect.x + ballRect.width &&
      targetRect.x + targetRect.width > ballRect.x &&
      targetRect.y < ballRect.y + ballRect.height &&
      targetRect.y + targetRect.height > ballRect.y) {
        // $(".target").remove();
        // targetRect.height = 0;    GETS RID OF TARGET AFTER HIT
        // targetRect.width = 0;
        moveTarget();
        $('.targetDrop').append('<img class="magictime boingOutDown" src=img/wholeBlueMan.png>')
        $('.targetDrop').append('<img class="magictime puffOut" id="sizer" src=img/fire-exp.png>')
        $('#target').hide();
        setTimeout(newGuy, 2000);
      }
  }

  var test = setInterval(collision, 100);

  function collision2() {
    var $projectile =$("#" + (counter)),
    projectile = $projectile[0]
    ballRect = projectile.getBoundingClientRect();
    // console.log(ballRect);
    var $target = $('#target2'),
    target = $target[0],
    targetRect = target.getBoundingClientRect();
    if (targetRect.x < ballRect.x + ballRect.width &&
      targetRect.x + targetRect.width > ballRect.x &&
      targetRect.y < ballRect.y + ballRect.height &&
      targetRect.y + targetRect.height > ballRect.y) {
        // $(".target").remove();
        // targetRect.height = 0;    GETS RID OF TARGET AFTER HIT
        // targetRect.width = 0;
        moveTarget2();
        $('.targetDrop2').append('<img class="magictime boingOutDown" src=img/wholePinkMan.png>')
        $('.targetDrop2').append('<img class="magictime puffOut" id="sizer" src=img/fire-exp.png>')
        $('#target2').hide();

        setTimeout(newGuy2, 2000);
      }
  }

  var test = setInterval(collision2, 100);


  $(function () {
  var pane = $('#wrapper'),
  box = $('#hand'),
  wh = pane.width() - box.width(),
  wv = pane.height() - box.height(),
  d = {},
  x = 15;

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
