var five = require("johnny-five");
var board = new five.Board();
 

board.on("ready", function() {
  var range = [10, 170];   
  var digits = new five.Led.Digits({
    controller: "HT16K33",
      addresses: [0x74]
  });
 
  var slider = new five.Sensor("A5");
  var tilt = new five.Servo({
    pin: 4,
    range: range,
    center: true 
  });

  function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = " " + s;
    return s;
  }

  slider.on("change", function() {
    var servoVal = five.Fn.scale(this.value, 0, 1023, 10, 170);
    // The slider's value will be scaled to match the tilt servo range
    tilt.to(servoVal);
    digits.print(pad(servoVal,4)); 
  });
});
