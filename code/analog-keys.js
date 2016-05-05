var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Create a new generic sensor instance for
  // a sensor connected to an analog (ADC) pin
  var sensor = new five.Sensor("A0");

  // When the sensor value changes, log the value
  sensor.on("change", function() {
    if (this.value < 20)
      console.log("rot");
    if (this.value > 120 && this.value < 140)
      console.log("grün");
    if (this.value > 340 && this.value < 360)
      console.log("blau");
    if (this.value > 545 && this.value < 565)
      console.log("gelb");
    if (this.value > 740 && this.value < 760)
      console.log("weiss");
//    console.log(this.value);
  });
});

