var five = require("johnny-five");
var myBoard, myLed;

myBoard = new five.Board();

myBoard.on("ready", function() {

  myLed = new five.Led(13)


  myLed.fade({
    easing: "linear",
    duration: 1000,
    cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
    keyFrames: [0, 250, 25, 150, 100, 125],
    loop: true,
  });

  this.repl.inject({
    led: myLed
  });

  // try "on", "off", "toggle", "brightness",
  // "fade", "fadeIn", "fadeOut", 
  // "pulse", "strobe", 
  // "stop" (stops strobing, pulsing or fading)
});
