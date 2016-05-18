var five = require("johnny-five"),
  board = new five.Board();

board.on("ready", function() {
  // Creates a piezo object and defines the pin to be used for the signal
  var piezo = new five.Piezo(5);

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

  // Plays the same song with a string representation
  piezo.play({
    // song is composed by a string of notes
    // a default beat is set, and the default octave is used
    // any invalid note is read as "no note"
    song: "e5 e5 - e5 - c5 e5 - g5 - - - g4 - - - c5 - - g4 - - e4 - - a4 - b4 - a#4 a4 - g4 e5 g5 a5 - f5 g5 - e5 - c5 d5 b4 - - c5 - - g4 - - e4 - - a4 - b4 - a#4 a4 - g4 e5 g5 a5 - f5 g5 - e5 - c5 d5 b4 - -",
    beats: 1 / 4,
    tempo: 100
  });

});
