var five = require("johnny-five"),
    button, led;

five.Board().on("ready", function() {

  button = new five.Button({
    pin: "A0",
    invert: true  // Taster ist active low
  });

  led = new five.Led(13);

  button.on("up", function(){
    led.off();
    console.log("up");
 });

  button.on("hold", function(){
    console.log("hold");
 });

  button.on("down", function(){
    led.on();
    console.log("down");
  });

});