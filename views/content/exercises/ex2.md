In dieser Übung lernen wie ein paar weitere Funktionen um eine LED anzusteuern.

Es werden die selben Bauteile benötigt wie im vorangegangenen Beispiel. Auch der Aufbau identisch. Es wird lediglich ein PWM-fähiger Pin benötigt. Beim Arduino Micro ist im Gegensatz zum Arduino Uno auch Pin 13 PWM fähig, ebenso wie Pin 11, 10, 9, 6, 5 und 3. 

**Vor dem Zusammenbau ist es notwendig das Arduino Board vom PC zu trennen. Das ist ebenso immer notwendig, wenn Bauteile entfernt oder dazugefügt werden.**

Wenn alles zusammenbaut ist, kann der Arduino wieder mit dem PC verbunden werden. Danach wird das Programm aus dem `node-ardx-de` Verzeichnis über die folgende Kommadozeile gestarted:

`node code/02-code-led-pwm.js`

Über die Kommandozeile kann die LED auch über REPL Befehle (read–eval–print-loop) gesteuert werden. Gib dazu nach dem `>>` prompt `led.stop()` ein um die LED Animation zu stoppen. Danach kannst du Befehle wie  `led.on()`, `led.off()` ausprobieren. Drücke `Control-D` um das Program zu beenden.

<a id="parts"></a>
## Teileliste

* Arduino Micro
* Steckplatine
* Drahtbrücken Set
* 5mm LED 
* 560 Ohm Widerstand (grün-blau-braun)

<a id="circuit"></a>
## Schaltplan und Verdrahtung
[<img style="max-width:500px" src="../../images/circ/01-LED_Steckplatine.png" alt="Verdrahtung"/>]

<a id="code"></a>
## Programm

Das Javascript Programm befindet sich unter `code/02-code-led-pwm.js`

	var j5 = require("johnny-five");
	var myBoard, myLed;

	myBoard = new j5.Board();

	myBoard.on("ready", function() {

	  myLed = new j5.Led(13);

	  myLed.pulse();

	  // make myLED available as "led" in REPL

	  this.repl.inject({
	  	led: myLed
	  });
	  
	  // try "on", "off", "toggle", "brightness",
	  // "fade", "fadeIn", "fadeOut", 
	  // "pulse", "strobe", 
	  // "stop" (stops strobing, pulsing or fading)
	});

<a id="troubleshooting"></a>
## Fehlersuche

### LED leuchtet nicht

Dioden sind gepolte Bauelemente. D.h. sie funktionieren nur in eine Richtung. Versuche die LED um 180° zu drehen (keine Sorge, die LED geht nicht kaputt, wenn sie falsch gepolt eingebaut wurde).


###  Das Programm meldet 'No USB devices detected'

Stelle sicher, dass das Arduino mit dem Computer über USB verbunden ist.

### es funktioniert immer nioch nicht

Es kommt vor das Johnny-Five nicht mit dem Arduino über den USB COM Port kommunizieren kann. Stelle sicher, das die Arduino IDE beendet wurde. Wenn das Probelm immer noch besteht, kann man das Programm so ändern, dass Johnny-Five den richtigen USB COM Port verwendet:

    var board = new j5.Board({port:'COM7'});

<a id="extending"></a>
## Programm erweitern

### Fade In Fade Out:

Die LED lässt sich langsam ein und wiederausblenden mit myLed.fadeIn(): bzw. myLed.fadeOut():

    myLed.fadeIn(500);

 bzw. myLed.fadeOut():
 	
    myLed.fadeOut(500);

<a id="more"></a>
## Mehr Informationen

http://johnny-five.io/api/led/
https://de.wikipedia.org/wiki/Pulsweitenmodulation
