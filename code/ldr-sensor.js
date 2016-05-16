var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var digits = new five.Led.Digits({
    controller: "HT16K33",
    addresses: [0x74]
  });
  var light = new five.Sensor({
    pin: "A3",
  });

  function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }
  

  light.on("change", function() {
    var lightval = five.Fn.scale(this.value, 1023, 0, 0, 100);
    digits.print(pad(lightval, 4));
    console.log("Lichtwert: ");
    console.log("  val : ", lightval);
    console.log("-----------------");
  });
});

