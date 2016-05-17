var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var led = new five.Led(13);
  // Create a new generic sensor instance for
  // a sensor connected to an analog (ADC) pin
  var sensor = new five.Sensor("A5");

  // When the sensor value changes, log the value
  sensor.on("change", function() {
    led.brightness(this.value/4);
    console.log(this.value);
  });
});

