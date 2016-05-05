# Roboter Sensoren

In diesem Teil des Robotik Tutorials geht es um Sensoren. Ein Roboter ohne Sensoren ist quasi blind und taub. Er kann seine Umgebung nicht wahrnehmen und würde gegen jedes Hindernis fahren, das sich in seinem Weg befindet.

Es gibt Sensoren für verschiedene Aufgaben, z.B. um Hindernisse zu erkennen oder Linien- Sensoren um den Roboter einer dunklen Linie auf  hellem Grund folgen zu lassen. 

Starte die Anwendung zu diesem Tutorial  im Terminal Fenster mit dem Befehl: 

```node code/robot-sensors.js```

## Licht-Sensor 

Der erste Sensor, den wir kennenlernen werden ist ein Licht-Sensor. Der Licht-Sensor ist ein Bauteil, dessen elektrischer Widerstand sich mit der Helligkeit des eintreffenden Lichts ändert. Der Mikrocontroller auf dem Roboter kann den Widerstand indirekt über die Spannung  messen, die am Widerstand abfällt. Ändert sich der Widerstand, so ändert sich auch die Spannung (gemäß dem Ohmschen Gesetz). Um die Spannung messen zu können, verfügt der Mikrocontroller über analoge Eingänge. Die Spannung, die am analogen Eingang anliegt (im Bereich 0..5V) wird in einen äquivalenten Digitalwert umgerechnet und kann so vom Mikrocontroller verarbeitet werden.

Für einen Roboter mit Licht-Sensor(en) können zwei Verhalten programmiert werden. Zm einen die “Motte”, die ja bekanntlich eine Lichtquelle umkreist, weil sie denkt es sei der Mond. Zum anderen die “Kakerlake”, die im Gegensatz zur Motte das Licht meidet und lieber ein schattiges Plätzchen bevorzugt.  

### Schaltung

### Programm

### Übungen

Lege deine Hand über den Licht-Sensor um so das einfallende Licht abzuschatten. Beobachte dazu die ausgegebenen Werte im Terminal.

Gib im Terminal Fenster das Kommando `do("moth")` ein, um den Roboter in eine “Motte” zu verwandeln.
 
Gib im Terminal Fenster das Kommando `do("cockroach")` ein, um den Roboter in eine “Kakerlake” zu verwandeln. Vergleiche das Verhalten des Roboters als Kakerlake mit dem der Motte


## Ultraschall Distanz Sensor

### Schaltung

### Programm

### Übungen

## Infrarot Reflexkoppler

Hinter diesem etwas kryptischen Namen versteckt sich eine Art Lichtschranke. In dem Sensor stecken eine Lichtquelle (Infrarot Diode) und ein Lichtempfänger (Foto-Transistor) in einem gemeinsamen Gehäuse. Der Foto-Transistor empfängt das Licht der Infrarot Diode nur, wenn das Licht reflektiert wird. Da dunkle Farben das Licht schlechter reflektieren als helle, hängt  der Wert der Ausgangsspannung am Transisitor von der Farbe der Oberfläche ab.

Mit diesem Sensor lassen sich Linienfolger bauen. Das sind Roboter, die einer dunklen Linien auf hellem Untergrund folgen können.

Mit einem einzelnen Sensor kann der Roboter bereits einer Linie folgen, zumindest fast. Es ist mehr ein herumeiern an der Grenze zwischen Linie und Untergrund. Man spricht hier eher einem Kantenfolger als von einem Linienfolger. Der Roboter verliert die Linie, steuert gegen bis er die Linie wiederfindet, verliert sie wieder usw. Deshalb der Eiertanz 

Mehrere Sensoren dieser Art lassen sich zu einem Sensor Array zusammenfassen. Damit kann der Roboter genau erkennen, wie weit weg sich die Linie von der Mittelachse des Roboters befindet und kann somit stärker gegensteuern, wenn sich die Linie unter den äußeren Sensoren befindet.

### Schaltung

### Programm

### Übungen



