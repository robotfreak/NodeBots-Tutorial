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
    var fixed_num = parseFloat(this.cm).toFixed( 1 );
    digits.print(fixed_num);
    console.log("Entfernung: ");
    console.log("  cm  : ", fixed_num);
    console.log("-----------------");
  });
});

