var j5 = require("johnny-five");
var board, led;

board = new j5.Board();

board.on("ready", function() {

  led = new j5.Led(13)

  led.pulse();
  // make myLED available as "led" in REPL

  this.repl.inject({
    led: led
  });

  console.log("Du kannst mit der LED über die Variable 'led' interagieren.\nGib led.stop() ein um die LED Animation zu stoppen.\Probiere Befehle wie z.B.:\n led.fadeIn()\n led.fadeOut()\nDrücke Control-D zum Beenden.\n");
  // try "on", "off", "toggle", "brightness",
  // "fade", "fadeIn", "fadeOut", 
  // "pulse", "strobe", 
  // "stop" (stops strobing, pulsing or fading)
});
