var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var grumpyLt = [
    "00000000",
    "00000000",
    "00000011",
    "00000111",
    "00001100",
    "00011000",
    "00011000",
    "00011000"
  ];

  var grumpyRt = [
    "00000000",
    "00000000",
    "11000000",
    "11100000",
    "00110000",
    "00011000",
    "00011000",
    "00011000"
  ];

  var grumpyEye = [
    "00011000",
    "01100110",
    "01100110",
    "11111111",
    "11111111",
    "01111110",
    "01111110",
    "00011000"
  ];

  var eyes = new five.Led.Matrix({
    addresses: [0x70, 0x71],
    controller: "HT16K33",
  });

  var mouthLt = new five.Led.Matrix({
    addresses: [0x72],
    controller: "HT16K33",
  });

  var mouthRt = new five.Led.Matrix({
    addresses: [0x73],
    controller: "HT16K33",
  });

  eyes.clear();
  mouthLt.clear();
  mouthRt.clear();
  eyes.draw(grumpyEye);
  mouthLt.draw(grumpyLt);
  mouthRt.draw(grumpyRt);

  // type `draw("shape_name")` into the repl to see the shape!  
  this.repl.inject({
    eyes: function(shape) {
      eyes.draw(five.Led.Matrix.CHARS[shape]);
    }
  });
  this.repl.inject({
    mouth: function(shape) {
      mouthLt.draw(five.Led.Matrix.CHARS[shape]);
      mouthRt.draw(five.Led.Matrix.CHARS[shape]);
    }
  });
  
});

