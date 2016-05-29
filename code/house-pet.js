var five = require('johnny-five');
var songs = require('j5-songs');
var board = new five.Board(); 

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
  
  var digits = new five.Led.Digits({
    controller: "HT16K33",
    addresses: [0x74]
  });
 
  var proximity = new five.Proximity({
    controller: "MB1000",
    pin: "A4",
    freq: "100"
  });
  
  var distanceCM

  proximity.on("data", function() {
    var fixed_num = parseFloat(this.cm).toFixed( 1 );
    digits.print(fixed_num);
    digitsCM = fixed_num;
    console.log("Entfernung: ");
    console.log("  cm  : ", fixed_num);
    console.log("-----------------");
  });

  
  doNyanCat();
  
  function doNyanCat() {
  // Load a song object 
  var song = songs.load('nyan-melody');
      temporal.queue([ //<3>
      {
         // stop del           
         delay: 10,
         task: sleep,
      },
      {
         // back up
         delay: 5000,
         task: wakeup,
      },
      {
         // back up
         delay: 2000,
         task: playsong,
      },
      {
         // back up
         delay: 33000,
         task: twinkle,
      },
      {
         // go to slepp
         delay: 3000,
         task: sleep,
      },
   ])
  };


  function sleep() {
    servoPan.center();
    servoTilt.max();

    eyeLt.draw(Eyes.closeEye);
    eyeRt.draw(Eyes.closeEye);
    mouthLt.draw(grumpyLt);
    mouthRt.draw(grumpyRt);
  };
 
  function wakeup() {
    servoPan.min();
    servoTilt.center();
  
    eyeLt.draw(Eyes.roundEye);
    eyeRt.draw(Eyes.roundEye);
    mouthLt.draw(smileLt);
    mouthRt.draw(smileRt);
  };
 
  function playsong() {
    // Play it ! 
    piezo.play(song);
    servoPan.sweep({
        range: [40, 60]
    });
  };


 function twinkle() { 
    servoPan.stop();
    eyeLt.draw(Eyes.ovalEye);
    eyeLt.draw(Eyes.closeEye);
    eyeLt.draw(Eyes.roundEye);
  };

  };
});

