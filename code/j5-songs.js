var five = require('johnny-five');
var songs = require('j5-songs');
 
five.Board().on('ready', function () {
  var piezo = new five.Piezo(5); 
  // Load a song object 
  var song = songs.load('starwars-theme');
 
  // Play it ! 
  piezo.play(song);
 
  this.repl.inject({
    piezo: piezo,
    songs: songs
  });
});

