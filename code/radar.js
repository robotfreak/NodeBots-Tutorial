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
app.listen(9000);

io = socket.listen(app);
io.set("log level", 1);

board = new five.Board();

board.on("ready", function() {
  var center, degrees, step, facing, range, scanner, soi, ping, last;

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
    ovalEye: [
    "00000000",
    "00111100",
    "01111110",
    "11100111",
    "11100111",
    "01111110",
    "00111100",
    "00000000"
    ],

    ovalBigEye: [
    "00000000",
    "00111100",
    "01100110",
    "11000011",
    "11000011",
    "01100110",
    "00111100",
    "00000000"
    ],

    closeEye: [
    "00000000",
    "00000000",
    "00111100",
    "11111111",
    "11111111",
    "00111100",
    "00000000",
    "00000000"
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

  // Open Radar view
  child.exec("open http://localhost:8080/");

  // Starting scanner scanning position (degrees)
  degrees = 21;

  // Servo scanning steps (degrees)
  step = 1;

  // Current facing direction
  facing = "";

  last = 0;

  // Scanning range (degrees)
  range = [20, 160];

  // Servo center point (degrees)
  center = range[1] / 2;

  var digits = new five.Led.Digits({
    controller: "HT16K33",
    addresses: [0x74]
  });

  // ping instance (distance detection)
  ping = new five.Proximity({
    controller: "MB1000",
    pin: "A4",
    freq: "100"
  });

  // Servo instance (panning)
  scanner = new five.Servo({
    pin: 4,
    range: range
  });

  // Servo instance (tilt)
  tilt = new five.Servo({
    pin: 12,
    range: range
  });

  this.repl.inject({
    scanner: scanner
  });

  // Initialize the robot face
  function smiley() {
    eyeLt.draw(Eyes.roundEye);
    eyeRt.draw(Eyes.roundEye);
    mouthLt.draw(smileLt);
    mouthRt.draw(smileRt);
  };
  
   function twinkle() { 
    eyeRt.draw(Eyes.ovalEye);
    eyeRt.draw(Eyes.closeEye);
    eyeRt.draw(Eyes.roundEye);
  };

  smiley();
  // Initialize the scanner servo at minimum
  scanner.min();
  // Initialize the tilt servo at center
  tilt.center();

  // Scanner/Panning loop
  this.loop(100, function() {
    var bounds, isOver, isUnder;

    if (degrees == 21) {
      twinkle();
    }
    
    bounds = {
      left: center + 5,
      right: center - 5
    };

    isOver = degrees > scanner.range[1];
    isUnder = degrees <= scanner.range[0];

    // Calculate the next step position
    if (isOver || isUnder) {
      if (isOver) {
        io.sockets.emit("reset");
        degrees = 20;
        step = 1;
        last = -1;
        } else {
        step *= -1;
      }
    }

    // Update the position by N° step
    degrees += step;

    // Update servo position
    scanner.to(degrees);
  });

  io.sockets.on("connection", function(socket) {
    console.log("Socket Connected");

    soi = socket;

    ping.on("data", function() {
      var fixed_num = parseFloat(this.cm).toFixed( 1 );
      digits.print(fixed_num);
 
      if (last !== degrees) {
        io.sockets.emit("ping", {
          degrees: degrees,
          distance: this.cm
        });
      }

      last = degrees;
    });
  });
});


// // Reference
// //
// // http://www.maxbotix.com/pictures/articles/012_Diagram_690X480.jpg
