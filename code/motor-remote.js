var five = require("johnny-five");

var board = new five.Board();

board.on("ready", function() {
  console.log('ready');

  var rightWheel = new five.Motor({
    pins: { pwm: 6, dir: 7 }
  });

  var leftWheel = new five.Motor({
    pins: { pwm: 11, dir: 8 }
  });

  var speed = 100;

  function reverse() {
    leftWheel.reverse(speed);
    rightWheel.reverse(speed);
    console.log("backward");
  }

  function forward() {
    leftWheel.forward(speed);
    rightWheel.forward(speed);
    console.log("forward");
  }

  function stop() {
    leftWheel.stop();
    rightWheel.stop();
    console.log("stop");
  }

  function left() {
    leftWheel.reverse(speed);
    rightWheel.forward(speed);
    console.log("left");
  }

  function leftForward() {
    leftWheel.forward(speed);
    rightWheel.stop(0);
    console.log("left forward");
  }
  function leftReverse() {
    leftWheel.reverse(speed);
    rightWheel.stop(0);
    console.log("left backward");
  }
  function right() {
    leftWheel.forward(speed);
    rightWheel.reverse(speed);
    console.log("right");
  }
  function rightForward() {
    rightWheel.forward(speed);
    leftWheel.stop();
    console.log("right forward");
  }
  function rightReverse() {
    rightWheel.reverse(speed);
    leftWheel.stop();
    console.log("right backward");
  }

  function exit() {
    leftWheel.stop();
    rightWheel.stop();
    setTimeout(process.exit, 1000);
  }

  var keyMap = {
    'up': forward,
    'down': reverse,
    'left': left,
    'right': right,
    'space': stop,
    '7': leftForward,
    '1': leftReverse,
    '9': rightForward,
    '3': rightReverse,
    'q': exit
  };

  var stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();

  stdin.on("keypress", function(chunk, key) {
      if (!key || !keyMap[key.name]) return;      

      keyMap[key.name]();
      board.wait(1000, function() {
        stop();
      });
    });
});

