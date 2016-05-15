var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var digits = new five.Led.Digits({
    controller: "HT16K33",
    addresses: [0x74]
  });
  var proximity = new five.Proximity({
    controller: "MB1000",
    pin: "A4",
    freq: "100"
  });

  proximity.on("data", function() {
    digits.print(this.cm);
    console.log("Entfernung: ");
    console.log("  cm  : ", this.cm);
    console.log("-----------------");
  });
});

