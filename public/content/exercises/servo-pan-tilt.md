## Servo Pan Tilt

Nimmt man statt einem Servo gleich zwei gewinnt man einen Freiheitsgrad mehr. Nun kann der Roboter seinen Kopf nicht nur schütteln sondern auch nicken. Diese Komnination nennt man auch Pan & Tilt (Schwenken und Nicken), einem Begriff aus der Videotechnik.

### Schaltung

Konnte man bei einem einzelnen Servo vieleicht noch auf eine externe Stromversorgung verzichten, ist das bei zwei und mehr Servos unbedingt zu empfehlen. Auch ein Servo kann recht viel Strom ziehen, insbesondere unter Last.

![Verdrahtung](../../images/circ/servo-pan-tilt_Steckplatine.png "Verdrahtung")

![Schaltplan](../../images/circ/servo-pan-tilt_Schaltplan.png "Schaltplan")

### Programm

```JavaScript
var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {
  var servoPan = new five.Servo({ pin: 4,
                                  range: [20,160]});
  var servoTilt = new five.Servo({ pin: 12,
                                  range: [20,160]});

  function down() {
    servoTilt.min();
  }

  function up() {
    servoTilt.max();
  }

  function left() {
    servoPan.max();
  }

  function right() {
    servoPan.min();
  }

  function stop() {
    servoPan.center();
    servoTilt.center();
  }

  function exit() {
    servoPan.stop();
    servoTilt.stop();
    setTimeout(process.exit, 1000);
  }

  var keyMap = {
    'up': up,
    'down': down,
    'left': left,
    'right': right,
    'space': stop,
    'q': exit
  };

  var stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();

  stdin.on("keypress", function(chunk, key) {
      if (!key || !keyMap[key.name]) return;      

      keyMap[key.name]();
  });
});
```
### Übungen

Mit den Cursor Tasten kann der Roboterkopf geschwenkt (Pfeiltasten links, rechts) und geneigt (Pfeiltasten hoch, runter) werden. Im Gegensatz zu den bisherigen Kommandos werden hier die Tastendrücke der Tastatur direkt ausgewertet.
