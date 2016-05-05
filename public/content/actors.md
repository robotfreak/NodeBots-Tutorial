# Roboter Antrieb

Damit sich ein Roboter fortbewegen kann, benötigt er einen Antrieb, einen Motor.

Starte die Anwendung zu diesem Tutorial  im Terminal Fenster mit dem Befehl: 

```node code/robot-actors.js```

## Motor 

Der einfachste Motor ist der Gleichstrom Motor (DC-Motor). Dieser Motor dreht sich, sobald eine Gleichspannung angelegt wird. Polt man die Spannung um, dreht sich der Motor in die andere Richtung. 

Zwar dreht so ein Gleichstrom Motor sich sehr schnell, bringt aber kaum Vortrieb auf die “Straße”, insbesondere je schwerer der Roboter ist. Was fehlt ist ein Getriebe um den Motor mehr "Kraft" zu verleihen. Das geht zwar nur auf Kosten der Geschwindigkeit bringt aber mehr Drehmoment. damit schafft es auch ein relativ kleiner Motor viel Gewicht zu transportieren.

Die Motorwelle selbst reicht natürlich nicht um den Motor zu bewegen. Ws muss schon ein Rad mit dem Motor verbunden werden.

### Schaltung

### Programm

### Übungen

## Differential Antrieb

Mit einem Motor  könnte der Roboter schon mal vorwärts und rückwärts fahren, wenn der Motor alle Räder des Roboters antreibt. Doch womit steuert man den Roboter, damit er auch rechts oder links fahren kann?

Ein zweiter Motor muss her. 

## Servo

Ein Servo ist ein kleiner Getriebemotor mit eingebauter Elektronik. Im Gegensatz zu einem Getriebemotor dreht sich der Servo nicht kontinuierlich, sondern nur innerhalb eines bestimmten Winkels (180°). Der gewünschte Winkel wird dem Servo vom Mikrocontroller über den Servo Steuer Pin  mitgeteilt. Ein Impuls mit einer bestimmten Länge (zwischen 1..2ms)  wird vom Servo in den entsprechenden Winkel von 0..180° umgesetzt.

Mit 2 Servos kann sich der Roboterkopf in 2 Richtungen bewegen (zwischen rechts und links sowie oben und unten) . Man spricht hier auch von Freiheitsgraden. 

### Schaltung

### Programm

### Übungen

## Sensoren
