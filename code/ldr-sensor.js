var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var digits = new five.Led.Digits({
    controller: "HT16K33",
    address: "0x74"
  });
  var sensor = new five.Sensor({
    pin: "A2",
    freq: "2"
  });

  sensor.on("change", function() {
    digits.print(this.value);
    console.log("Licht: ");
    console.log("  val : ", this.value);
    console.log("-----------------");
  });
});

