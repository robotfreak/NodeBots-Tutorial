var five = require("johnny-five"),
  child = require("child_process"),
  http = require("http"),
  socket = require("socket.io"),
  fs = require("fs"),
  app, board, io;

function handler(req, res) {
  var path = __dirname;

  if (req.url === "/") {
    path += "/radar.html";
  } else {
    path += req.url;
  }

  fs.readFile(path, function(err, data) {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading " + path);
    }

    res.writeHead(200);
    res.end(data);
  });
}

app = http.createServer(handler);
app.listen(8080);

io = socket.listen(app);
io.set("log level", 1);

var board = new five.Board();

board.on("ready", function() {
  console.log('ready');
  var center, degrees, step, facing, range, scanner, soi, ping, last;
  var leftLDRVal =  0;
  var rightLDRVal = 0;
  var ThresholdVal = 200;

  // Create the LDR sensors 
  ldrLt = new five.Sensor({
    pin: "A2",
    freq: 100
  });

  ldrRt = new five.Sensor({
    pin: "A3",
    freq: 100
  });

  // ping instance (distance detection)
  ping = new five.Proximity({
    controller: "MB1000",
    pin: "A4",
    freq: "100"
  });


  var eyeLt = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33",
    rotation: 4,
  });

  var eyeRt = new five.Led.Matrix({
    addresses: [0x71],
    controller: "HT16K33",
    rotation: 4,
  });

  var mouthLt = new five.Led.Matrix({
    addresses: [0x72],
    controller: "HT16K33",
    rotation: 4,
  });

  var mouthRt = new five.Led.Matrix({
    addresses: [0x73],
    controller: "HT16K33",
    rotation: 4,
  });

  var Eyes = {

    roundEye: [
    "00111100",
    "01111110",
    "11100111",
    "11000011",
    "11000011",
    "11100111",
    "01111110",
    "00111100"
    ],

    targetEye: [
    "00011000",
    "00011000",
    "00011000",
    "11111111",
    "11111111",
    "00011000",
    "00011000",
    "00011000"
    ],

  };

  var smileLt = [
    "00000000",
    "00000000",
    "11000000",
    "01100000",
    "00110000",
    "00011111",
    "00000111",
    "00000000"
  ];

  var smileRt = [
    "00000000",
    "00000000",
    "00000011",
    "00000110",
    "00001100",
    "11111000",
    "11100000",
    "00000000"
  ];

  var servoPan = new five.Servo({ pin: 4,
                                  range: [60,120]});
  var servoTilt = new five.Servo({ pin: 12,
                                  range: [60,120]});

  var tiltVal = 90;
  var panVal = 90

  function tiltDown() {
    if (tiltVal > 60) tiltVal -= 5;
    servoTilt.to(tiltVal);
  }

  function tiltUp() {
    if (tiltVal < 120) tiltVal += 5;
    servoTilt.to(tiltVal);
  }

  function panLeft() {
    if (panVal < 120) panVal += 5;
    servoPan.to(panVal);
  }

  function panRight() {
    if (panVal > 60) panVal -= 5;
    servoPan.to(panVal);
  }

  function center() {
    servoPan.center();
    servoTilt.center();
  }

  var rightWheel = new five.Motor({
    pins: { pwm: 6, dir: 7 }
  });

  var leftWheel = new five.Motor({
    pins: { pwm: 11, dir: 8 }
  });

  var speed = 100;

  function reverse() {
    leftWheel.reverse(speed);
    rightWheel.reverse(speed);
    console.log("backward");
  }

  function forward() {
    leftWheel.forward(speed);
    rightWheel.forward(speed);
    console.log("forward");
  }

  function stop() {
    leftWheel.stop();
    rightWheel.stop();
    console.log("stop");
  }

  function left() {
    leftWheel.reverse(speed);
    rightWheel.forward(speed);
    console.log("left");
  }

  function leftForward() {
    leftWheel.forward(speed);
    rightWheel.stop(0);
    console.log("left forward");
  }
  function leftReverse() {
    leftWheel.reverse(speed);
    rightWheel.stop(0);
    console.log("left backward");
  }
  function right() {
    leftWheel.forward(speed);
    rightWheel.reverse(speed);
    console.log("right");
  }
  function rightForward() {
    rightWheel.forward(speed);
    leftWheel.stop();
    console.log("right forward");
  }
  function rightReverse() {
    rightWheel.reverse(speed);
    leftWheel.stop();
    console.log("right backward");
  }

  function exit() {
    leftWheel.stop();
    rightWheel.stop();
    setTimeout(process.exit, 1000);
  } 
  
   function checkLight() {
    if (leftLDRVal - rightLDRVal >= ThresholdVal) {
      right();
    }
    else if (rightLDRVal - leftLDRVal  >= ThresholdVal) {
      left();
    }
    else {
      forward();
    }
  }

  
  ldrLt.on("change", function( err, value) {
    console.log("Left : ", this.value);
    leftLDRVal = this.value;
   // checkLight();
  });

  ldrRt.on("change", function( err, value) {
    console.log("Right: ", this.value);
    rightLDRVal = this.value;
   // checkLight();
  });

  

  var keyMap = {
    'up': forward,
    'down': reverse,
    'left': left,
    'right': right,
    'space': stop,
    'w': tiltUp,
    'x': tiltDown,
    'a': panLeft,
    's': panRight,
    'x': center,
    'q': exit
  };

  var stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();

  stdin.on("keypress", function(chunk, key) {
      if (!key || !keyMap[key.name]) return;      

      keyMap[key.name]();
      board.wait(1000, function() {
        stop();
      });
    });
});
