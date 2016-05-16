var five = require("johnny-five");
var keypress = require("keypress");
var board = new five.Board();

board.on("ready", function() {
  var speed, commands, motors;

  speed = 100;
  commands = null;
  motors = {
    a: new five.Motor([6, 7]),
    b: new five.Motor([11, 8])
  };

  this.repl.inject({
    motors: motors
  });

  function controller(ch, key) {
    if (key) {
      if (key.name === "space") {
        motors.a.stop();
        motors.b.stop();
        console.log("stop");
      }
      if (key.name === "up") {
        motors.a.fwd(speed);
        motors.b.fwd(speed);
        console.log("forward");
      }
      if (key.name === "down") {
        motors.a.rev(speed);
        motors.b.rev(speed);
        console.log("backward");
      }
      if (key.name === "right") {
        motors.a.rev(speed * 0.75);
        motors.b.fwd(speed * 0.75);
        console.log("right");
      }
      if (key.name === "left") {
        motors.a.fwd(speed * 0.75);
        motors.b.rev(speed * 0.75);
        console.log("left");
      }

      commands = [].slice.call(arguments);
    } else {
      if (ch >= 1 && ch <= 9) {
        speed = five.Fn.scale(ch, 1, 9, 0, 255);
        controller.apply(null, commands);
      }
    }
  }


  keypress(process.stdin);

  process.stdin.on("keypress", controller);
  process.stdin.setRawMode(true);
  process.stdin.resume();
});

