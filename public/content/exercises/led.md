## LED

Eine LED ist wohl die einfachste Form der Anzeige. Sie kann z.B. als Status Anzeige dienen. 

![LED](../../images/parts/LED.png "LED")

### Schaltung

Zum Betrieb einer LED ist immer ein Widerstand notwendig, der in Reihe zur LED geschaltet wird.

![Verdrahtung](../../images/circ/01-LED_Steckplatine.png "Verdrahtung")

![Schaltplan](../../images/circ/led-schematic.png "Schaltplan")

### Programm

```javascript
var five = require("johnny-five"),
    button, led;

five.Board().on("ready", function() {

  led = new five.Led(13);

  led.strobe( 1000 );

  // make myLED available as "led" in REPL

  this.repl.inject({
  	led: led
  });
	  
  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)
});
```


### Übungen

Du kannst die LED auch über das Terminal Fenster steuern. 

Probiere folgende Parameter für die Funktion `led` aus (z.B. `led.pulse`). Einige Funktionen erwarten auch einen Parameter, wie z.B. `led.fadeIn(500)`

```
  "on", "off", "toggle", "brightness",
  "fade", "fadeIn", "fadeOut",
  "pulse", "strobe",
```

Zum Beenden einer Animation wie `strobe, pulse oder fade` gib `led.stop` ein


