var j5 = require("johnny-five");
var board, led;

board = new j5.Board();

board.on("ready", function() {

  led = new j5.Led(13)

  led.strobe( 1000 );

  // make myLED available as "led" in REPL

  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)
  
  this.repl.inject({
  	led: led
  });
  console.log("Du kannst mit der LED über die Variable 'led' interagieren, z.B. led.on();\n Drücke Control-D zum Beenden.\n >> ");
});
