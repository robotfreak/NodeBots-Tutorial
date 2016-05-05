var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // AD Keypad
  var keypad;

  keypad = new five.Keypad({
    pin: "A0",
    length: 10,
//    keys: ["red", "green", "blue", "3", "yellow", "white", "6"]
  });

  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33",
    rotation: 3,
    isBicolor: true
  });

  keypad.on("press", function(data) {
    console.log("Key: %s", data.which);
    matrix.draw(data.which);
  });
});


