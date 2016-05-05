var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // AD Keypad
  var keypad;

  keypad = new five.Keypad({
    pin: "A0",
    keys: ["red", "green", "blue", "3", "yellow", "white", "6"]
  });

  ["change", "press", "hold", "release"].forEach(function(eventType) {
    keypad.on(eventType, function(data) {
      console.log("Event: %s, Target: %s", eventType, data.which);
    });
  });
});


