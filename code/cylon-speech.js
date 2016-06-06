var five = require('johnny-five');
var board = new five.Board(); 
var Cylon = require("cylon");

Cylon.robot({
  connections: {
    speech: { adaptor: "speech"}
  },

  devices: {
    voice: { driver: "speech", voice: "en+f3" }
  },

  work: function(my) {
    after(1..second(), function() { my.voice.say("Hello my name is robocat."); });
    after(2..second(), function() { my.voice.say("I'm a Nodebot, programmed in Javascript."); });
    after(3..second(), function() { my.voice.say("Using the node.js and johnny five library."); });
  }
}).start();

board.on("ready", function() {

  var servoPan = new five.Servo({ pin: 4,
                                  range: [40,60]});
  var servoTilt = new five.Servo({ pin: 12,
                                  range: [40,120]});

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
    grumpyEye: [
    "00011000",
    "01100110",
    "01100110",
    "11111111",
    "11111111",
    "01111110",
    "01111110",
    "00011000"
    ],

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

    roundBigEye: [
    "00111100",
    "01100110",
    "11000011",
    "11000011",
    "11000011",
    "11000011",
    "01100110",
    "00111100"
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
  var grumpyLt = [
    "00000000",
    "00000000",
    "00000011",
    "00000111",
    "00001100",
    "00011000",
    "00011000",
    "00011000"
  ];

  var grumpyRt = [
    "00000000",
    "00000000",
    "11000000",
    "11100000",
    "00110000",
    "00011000",
    "00011000",
    "00011000"
  ];
 
  var piezo = new five.Piezo(5); 
  
  board.wait(5000, function() {
    servoPan.center();
    servoTilt.max();

    eyeLt.draw(Eyes.closeEye);
    eyeRt.draw(Eyes.closeEye);
    mouthLt.draw(grumpyLt);
    mouthRt.draw(grumpyRt);
  });
 
  board.wait(10000, function() {
    servoPan.min();
    servoTilt.center();
  
    eyeLt.draw(Eyes.roundEye);
    eyeRt.draw(Eyes.roundEye);
    mouthLt.draw(smileLt);
    mouthRt.draw(smileRt);
  });
 
  board.wait(12000, function() {
    servoPan.sweep({
        range: [40, 60]
    });
  });


  board.wait(45000, function() {
    servoPan.stop();
    eyeLt.draw(Eyes.ovalEye);
    eyeLt.draw(Eyes.closeEye);
    eyeLt.draw(Eyes.roundEye);
  });

  board.wait(48000, function() {
    servoPan.center();
    servoTilt.max();

    eyeLt.draw(Eyes.closeEye);
    eyeRt.draw(Eyes.closeEye);
    mouthLt.draw(grumpyLt);
    mouthRt.draw(grumpyRt);
  });
});

