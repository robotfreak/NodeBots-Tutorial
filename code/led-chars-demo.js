var five = require("johnny-five");

var board = new five.Board();

board.on("ready", function() {

  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33",
    rotation: 3,
  });

  matrix.on();

  // type `draw("shape_name")` into the repl to see the shape!  
  this.repl.inject({
    matrix: matrix,
    draw: function(shape) {
      matrix.draw(five.Led.Matrix.CHARS[shape]);
    }
  });
});

