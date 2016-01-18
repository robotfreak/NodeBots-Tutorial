var five = require("johnny-five"),
    button, led;

five.Board().on("ready", function() {

  button = new five.Button("A0");

  led = new five.Led(13);

  button.on("up", function(){
    led.on();
  });

  button.on("down", function(){
    led.off();
  });

});