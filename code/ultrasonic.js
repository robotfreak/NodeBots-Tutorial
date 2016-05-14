var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var proximity = new five.Proximity({
    controller: "MB1000",
    pin: "A4"
  });

  proximity.on("data", function() {
    console.log("Entfernung: ");
    console.log("  cm  : ", this.cm);
    console.log("-----------------");
  });

  proximity.on("change", function() {
    console.log("Das Objekt has sich bewegt");
  });
});

