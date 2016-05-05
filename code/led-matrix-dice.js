var five = require("../lib/johnny-five");
var board = new five.Board();

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

board.on("ready", function() {

  var dice = [
    [ 0x00, 0x00, 0x00, 0x18, 0x18, 0x00, 0x00, 0x00 ], // Eins
    [ 0xC0, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x03, 0x03 ], // Zwei
    [ 0x03, 0x03, 0x00, 0x18, 0x18, 0x00, 0xC0, 0xC0 ], // Drei
    [ 0xC3, 0xC3, 0x00, 0x00, 0x00, 0x00, 0xC3, 0xC3 ], // Vier
    [ 0xC3, 0xC3, 0x00, 0x18, 0x18, 0x00, 0xC3, 0xC3 ], // Fünf
    [ 0xC3, 0xC3, 0x00, 0xC3, 0xC3, 0x00, 0xC3, 0xC3 ]  // Sechs
  ];

  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33",
    rotation: 2,
    isBicolor: true
  });

  var button = new five.Button({
    pin: "A0",
    invert: true  // Taster ist active low
  }); 

  matrix.clear();
  button.on("down", function(){
    matrix.clear();
  });

  button.on("hold", function(){
    matrix.draw(dice[getRandomInt(0,5)]);
  });

  button.on("up", function(){
    matrix.draw(dice[getRandomInt(0,5)]);
  });

  console.log("\n Drücke die rote Taste zum würfeln.\n Ctrl+D zum Beenden");
});
