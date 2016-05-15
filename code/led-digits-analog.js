var moment = require("moment");
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var digits = new five.Led.Digits({
    controller: "HT16K33",
    addresses: [0x74]
  });
  var sensor = new five.Sensor("A5");

  // When the sensor value changes, log the value
  sensor.on("change", function() {
    digits.print(this.value);
    console.log(this.value);
  });
});


