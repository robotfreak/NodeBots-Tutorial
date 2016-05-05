# Roboter Anzeigen

Damit sich der Roboter bemerkbar machen kann, falls er ein Problem hat, sind Anzeigen ein ganz wichtiges Thema. Darum geht es in diesem Teil des Robotik Tutorials.

Starte die Anwendung zu diesem Tutorial  im Terminal Fenster mit dem Befehl: 

```node code/robot-displays.js```

## LED

Eine LED ist wohl die einfachste Form der Anzeige. Sie kann als Status Anzeige dienen

### Schaltung

![Verdrahtung](../images/circ/01-LED_Steckplatine.png "Verdrahtung")

![Schaltplan](../images/circ/led-schematic.png "Schaltplan")

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


## LED Matrix

Eine LED Matrix besteht aus mehreren LEDs die üblicherweise in Form einer Matrix von z.B. 8x8 LEDs angeordnet sind. Damit lassen sich gegenüber einer einzelnen LED noch mehr Informationen darstellen. Neben Zahlen und Buchstaben sind damit auch kleine Grafiken wie Emojis möglich. Allerdings ist es nicht ohne weiteres möglich, die 8x8 (64)  LEDs direkt  mit einem Mikrocontroller wie dem Arduino anzusteuern. Zum einen wegen der Stromaufnahme zum anderen wegen der schieren Anzahl von Anschluss Pins die dazu notwendig wären.

### Schaltung

### Programm

### Übungen

Du kannst die LED-Matrix  auch über das Terminal Fenster steuern. 


## 7-Segment LED Anzeige

Eine Sonderform der LED Matrix ist die 7-Segment Anzeige. Mit den 7 LEDs können die Ziffern 0..9 und auch einige Buchstaben dargestellt werden. Das ist eine  feine Sache um z.B. den Wert eines Sensors oder einfach die aktuelle Uhrzeit anzuzeigen. Die Ansteuerung erfolgt identisch zur LED Matrix über I2C

### Schaltung

### Programm

### Übungen

## Mehrere LED Matrizen

Es können auch mehrere LED Matrizen über einen I2C Bus angesteuert werden. Dazu gibt es für jede Anzeige eine 2-3 stellige Adresse, die über Setzern von Lötbrücken geändert werden kann. Natürlcih muss dann jede Anzeige eine eigene individuelle Adresse bekommen. So läßt sich z.B. aus 4 LED Matrizen ein Gesicht besteht aus zwei Augen (2 LED Matrizen) und einem Mund (ebenfalls 2 LED Matrizen). Damit ergeben sich noch mehr Anzeige Möglichkeiten und der Roboter erhält ein Gesicht um z.B. Gemütszustände anzuzeigen.


### Schaltung

### Programm

### Übungen


## Servos

Leider ist der Roboter Kopf noch etwas starr. es wäre schön, wenn er seinen Kopf auch bewegen könnte. Dafür gibt es sogennante Servos.  Ein Servo ist ein kleiner Getriebemotor mit eingebauter Elektronik. Im Gegensatz zu einem Getriebemotor dreht sich der Servo nicht kontinuierlich, sondern nur innerhalb eines bestimmten Winkels (180°). Der gewünschte Winkel wird dem Servo vom Mikrocontroller über den Servo Steuer Pin  mitgeteilt. Ein Impuls mit einer bestimmten Länge (zwischen 1..2ms)  wird vom Servo in den entsprechenden Winkel von 0..180° umgesetzt.

Mit 2 Servos kann sich der Roboterkopf in 2 Richtungen bewegen (zwischen rechts und links sowie oben und unten) . Man spricht hier auch von Freiheitsgraden. 

### Schaltung

### Programm

### Übungen

## Sensoren

Alles zusammen genommen ergibt sich mit den LED Matrizen und den Servo schon ein recht lebendiges Geschöpf, auch wenn der Roboter nach wie vor nur vorprogrammierte Bewegungen durchführen kann. Um auf  Ereignisse von außen mit bestimmten Verhaltensweisen reagieren zu können fehlen dem Roboter noch die nötigen Sinne, sprich die Sensoren, um seine Umwelt wahrzunehmen. Näheres dazu lernt man im Kapitel über Roboter Sensoren. 

