## Licht-Sensor 

Der erste Sensor, den wir kennenlernen werden ist ein Licht-Sensor. Der Licht-Sensor ist ein Bauteil, dessen elektrischer Widerstand sich mit der Helligkeit des eintreffenden Lichts ändert. Der Mikrocontroller auf dem Roboter kann den Widerstand indirekt über die Spannung  messen, die am Widerstand abfällt. Ändert sich der Widerstand, so ändert sich auch die Spannung (gemäß dem Ohmschen Gesetz). Um die Spannung messen zu können, verfügt der Mikrocontroller über analoge Eingänge. Die Spannung, die am analogen Eingang anliegt (im Bereich 0..5V) wird in einen äquivalenten Digitalwert umgerechnet und kann so vom Mikrocontroller verarbeitet werden.

![Licht-Sensor](../images/parts/photocell.png "Licht-Sensor")

Für einen Roboter mit Licht-Sensor(en) können zwei Verhalten programmiert werden. Zm einen die “Motte”, die ja bekanntlich eine Lichtquelle umkreist, weil sie denkt es sei der Mond. Zum anderen die “Kakerlake”, die im Gegensatz zur Motte das Licht meidet und lieber ein schattiges Plätzchen bevorzugt.  

### Schaltung

![Verdrahtung](../images/circ/licht-sensor_Steckplatine.png "Verdrahtung")

![Schaltplan](../images/circ/licht-sensor_Schaltplan.png "Schaltplan")

### Programm

### Übungen

Lege deine Hand über den Licht-Sensor um so das einfallende Licht abzuschatten. Beobachte dazu die ausgegebenen Werte im Terminal.

Gib im Terminal Fenster das Kommando `do("moth")` ein, um den Roboter in eine “Motte” zu verwandeln.
 
Gib im Terminal Fenster das Kommando `do("cockroach")` ein, um den Roboter in eine “Kakerlake” zu verwandeln. Vergleiche das Verhalten des Roboters als Kakerlake mit dem der Motte


