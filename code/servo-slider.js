var five = require("johnny-five");
var board = new five.Board({
  port: "COM105"
});
 

board.on("ready", function() {
  var digits = new five.Led.Digits({
    controller: "HT16K33",
  });
 
  var slider = new five.Sensor("A5");
  var tilt = new five.Servo(6);

  slider.scale([0, 180]).on("slide", function() {

    // The slider's value will be scaled to match the tilt servo range
    tilt.to(this.value);
    digits.print(this.value); 
  });
});
