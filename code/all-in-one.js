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

  // Create a new generic sensor instance for
  // a sensor connected to an analog (ADC) pin
  var keyboard = new five.Sensor("A0");
  
  var botMode = "SHOW_SENSORS";
  // When the sensor value changes, log the value
  keyboard.on("change", function() {
    if (this.value < 20) {
      console.log("rot");
      botMode = "SHOW_SENSORS";
      initShowSensors();
    }
    else if (this.value > 120 && this.value < 140) {
      console.log("grün");
      botMode = "SHOW_RADAR";
    }
    else if (this.value > 340 && this.value < 360) {
      console.log("blau");
      botMode = "COLLISION_DETECT";
      initCollisionDetect();
    }
    else if (this.value > 545 && this.value < 565) {
      console.log("gelb");
      botMode = "LIGHT_FOLLOW";
      initLghtFollow();
    }
    else if (this.value > 740 && this.value < 760) {
      console.log("weiss");
      botMode = "LINE_FOLLOW";
      initLineFollow();
    }
  });

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

  var distanceCM;
  
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
    state = "DRIVING";
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

    var register = {
        PULLUPB: 0x06,
        PULLUPA: 0x07,
        DIRB: 0x0E,
        DIRA: 0x0F,
        DATAB: 0x10,
        DATAA: 0x11,
        INTMASKA: 0x13,
        MISC: 0x1E,
        CLOCK: 0x1F,
        RESET: 0x7D
  };

  var address = 0x3E;
  console.log("address: ", address);
  function initLineFollow() {
  this.i2cConfig();
  // Reset
  this.i2cWriteReg(address, register.RESET, 0x12);
  this.i2cWriteReg(address, register.RESET, 0x34);
  this.i2cReadOnce(address, register.INTMASKA, 2, function(data) {
    var value;
    value = (data[0] << 8) + data[1];
    console.log("read: ", value);
  });
  // Port A all Input
  this.i2cWriteReg(address, register.DIRA, 0xFF);
  // Port B Input 0,1 output, 2..7 Input
  this.i2cWriteReg(address, register.DIRB, 0xFC);
  // Port B IR LED off, FB LED on
  this.i2cWriteReg(address, register.DATAB, 0x01);
  // Port B IR LED on, FB LED off
  //this.wait(1, function() { 
  this.i2cWriteReg(address, register.DATAB, 0x02); 
  //});
  }
  
  function doLineFollow {
    //this.wait(2, function() { 
      // Port B IR LED on, FB LED on
    this.i2cWriteReg(address, register.DATAB, 0x00); 
    //;
    this.i2cReadOnce(address, register.DATAA, 1, function(data) {
      var value;
      value = data[0];
      console.log("read: ", value.toString(2));
      if (value & 0x18) { // on line
        forward();
      }
      else if (value & 0x06) { // right
        right();
      }
      else if (value & 0x60) { // left
        left();
      }
    });
    // Port B IR LED off, FB LED off
    //this.i2cWriteReg(address, register.DATAB, 0x03);  
  };

  var state = "STOP";
  
  function initCollisionDetect() {
    state = "DRIVING";
    forward();
  }
  
  ping.on("change", function() { //<2>
    distanceCM = this.cm
  }

  function doCollisonDetect { 
    if (distanceCM < 15 && state == "DRIVING") {
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
  
    board.loop(100, function() {
      if botMode == "LINE_FOLLOW" {
        doLineFollow();
      }
      else if botMode == "LIGHT_FOLLOW" {
        doLightFollow
      }
      else if botMode == "COLLISION_DETECT" {
        doCollisionDetect();
      }
      else if botMode == "SHOW_RADAR" {
        doShowRadar();
      }
      else if botMode == "SHOW_SENSORS" {
        doShowSensors();
      } 
    }

  
    var keyMap = {
    'up': forward,
    'down': reverse,
    'left': left,
    'right': right,
    'space': stop,
    'w': tiltUp,
    'x': tiltDown,
    'a': panLeft,
    'd': panRight,
    's': center,
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
