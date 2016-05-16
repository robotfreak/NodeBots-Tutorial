var five = require("johnny-five");
var board = new five.Board();
 

board.on("ready", function() {
  var range = [60, 120];   
  var servo = new five.Servo({
    pin: 4,
    range: range,
    center: true 
  });
  var lap = 0;

  servo.sweep();

  board.wait(4000, function() {
    servo.stop();
  });
  
  this.repl.inject({
    servo: servo
  });

});
