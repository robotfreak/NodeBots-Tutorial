var five = require("johnny-five");
var temporal = require("temporal");

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);

board.on("ready", function() {

  console.log("Bot will drive forward until it senses an obstacle.");
  console.log("It will then back up, change direction and go forward again");

  var rightWheel = new five.Motor({
    pins: { pwm: 6, dir: 7 }
  });

  var leftWheel = new five.Motor({
    pins: { pwm: 11, dir: 8 }
  });

  var ping = new five.Proximity({
    controller: "MB1000",
    pin: "A4",
    freq: "100"
  });

  var state = "DRIVING";
  forward();

  ping.on("change", function() { //<2>
    if (this.cm < 15 && state == "DRIVING") {
      state = "AVOID_COLLISION"
      temporal.queue([ //<3>
      {
         // stop del           
         delay: 10,
         task: stop,
      },
      {
         // back up
         delay: 3000,
         task: backward,
      },
      {
         // stop
         delay: 1500,
         task: stop,
       },
       {
         // spin
         delay: 3000,
         task: spin, 
       },
       {
         // stop
         delay: 1000,
         task: stop,
       },
       {
         // fwd
         delay: 3000,
         task: forward, //<4>
       },
     ])
   }
  });
  var speed = 100;

  // helper functions for driving.
  function forward() {
    console.log("forward");
    state = "DRIVING";
    leftWheel.forward(speed);
    rightWheel.forward(speed);
  }

  function backward() {
    console.log("back");
    leftWheel.reverse(speed);
    rightWheel.reverse(speed);
  }

  function stop() {
    console.log("stop");
    leftWheel.stop();
    rightWheel.stop();
  }

  function spin() {
    console.log("spin");
    leftWheel.forward(speed);
    rightWheel.reverse(speed);
  }
});
