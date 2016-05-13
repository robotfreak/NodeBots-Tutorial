var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var virtual = new five.Board.Virtual(
    new five.Expander("SX1509")
  );

  var irled = new five.Led({
    pin: 8,
    board: virtual
  });

  var fbled = new five.Led({
    pin: 9,
    board: virtual
  });

  irled.off();
  fbled.off();
/*  
  var linesensor = new five.Sensors(
    Array.from({ length: 8 }, function(_, index) {
      var lit = new five.Sensor({
        type: "digital",
        pin:  index,
        board: virtual
      });

      lit.on("data", function() {
          console.log(this.value);
      });
    })
  );
*/
});
