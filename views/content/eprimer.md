
No previous electronics experience is required to have fun with the Arduino Experimenter's Kit. Here are a few details about each component to make identifying, and perhaps understanding them, a bit easier.

For an introduction to what an Arduino is, visit http://arduino.cc/en/Guide/HomePage

## LED
(Light Emitting Diode)

![LED](../images/parts/led.png "LED")

### Was macht es:
Emits light when a small current is passed through it. (only in one direction) 
### Anzahl Anschlüsse:
2 (einer länger, die Anode geht an Plus)
### Identifizierung:
Looks like a mini light bulb.
### Was zu beachten ist:
* Will only work in one direction
* Requires a current limiting resistor

### Mehr Informationen:
[Wikipedia Leuchtdiode](https://de.wikipedia.org/wiki/Leuchtdiode)

## Diode
![Diode](../images/parts/diode.png "Diode")
### Was macht es:
The electronic equivalent of a one way valve. Allowing current to flow in one direction but not the other. 
### Anzahl Anschlüsse:
2 
### Identifizierung:
Usually a cylinder with wires extending from either end (and an off center line indicating polarity).
### Was zu beachten ist:
Will only work in one direction (current will flow if end with the line is connected to ground)
### Mehr Informationen:
[Wikipedia Diode](https://de.wikipedia.org/wiki/Diode)

## Widerstand
![Resistor](../images/parts/resistor.png "Resistor")

### Was macht es:
Restricts the amount of current that can flow through a circuit.
### Anzahl Anschlüsse:
2 
### Identifizierung:
Cylinder with wires extending from either end. The value is displayed using a color coding system.

![Resistor Colors](../images/WiderstandsFarben.png "Widerstand Farb-Codes")

### Was zu beachten ist:
Easy to grab the wrong value (double check the colors before using)
### Mehr Informationen:
[Wikipedia Widerstand](https://de.wikipedia.org/wiki/Widerstand)

## Transistor
![Transistor](../images/parts/transistor.png "Transistor")
### Was macht es:
Uses a small current to switch or amplify a much larger current.
### Anzahl Anschlüsse:
3 (Base, Collector, Emitter)
### Identifizierung:
Comes in many different packages but you can read the part number off the package (P2N2222AG in this kit)
### Things to watch out for:
Plugging in the right way round (also a current limiting resistor is often needed on the base pin)
### Mehr Informationen:
[Wikipedia Transistor](https://de.wikipedia.org/wiki/Transistor)

## Servo
![Servo](../images/parts/servo.png "Servo")
### Was macht es:
Takes a timed pulse and converts it into an angular position of the output shaft.
### Anzahl Anschlüsse:
3
### Identifizierung:
A plastic box with 3 wires coming out one side and a shaft with a plastic horn out the top.
### Was zu beachten ist:
The plug is not polarized so make sure it is plugged in the right way.
### Mehr Informationen:
[Wikipedia Servo](https://de.wikipedia.org/wiki/Servo)

## DC Motor 
![DC Motor](../images/parts/dc-motor.png "DC Motor")
### Was macht es:
Spins when a current is passed through it.
### Anzahl Anschlüsse:
2 
### Identifizierung:
Usually a cylinder with a shaft coming out of one end.
### Was zu beachten ist:
Using a transistor or relay that is rated for the size of motor you're using.
### Mehr Informationen:
[Wikipedia DC-Motor](https://de.wikipedia.org/wiki/Gleichstrommaschine)

## Piezo Summer
![Piezo](../images/parts/piezo.png "Piezo")
### Was macht es:
A pulse of current will cause it to click. A stream of pulses will cause it to emit a tone.
### Anzahl Anschlüsse:
2 
### Identifizierung:
In this kit it comes in a little black barrel, but sometimes they are just a gold disc.
### Was zu beachten ist:
Difficult to misuse.
### Mehr Informationen:
[Wikipedia Summer](https://de.wikipedia.org/wiki/Summer)

## IC (Integrated Circuit)
![IC-74HC595](../images/parts/74HC595.png "IC-74HC595")
### Was macht es:
Packages any range of complicated electronics inside an easy to use package.
### Anzahl Anschlüsse:
2 - 100s (in this kit there is one with 3 (TMP36) and one with 16 (74HC595)
### Identifizierung:
The part ID is written on the outside of the package (this sometimes requires a lot of light or a magnifying glass to read).
### Was zu beachten ist:
Proper orientation (look for marks showing pin 1)
### Mehr Informationen:
[Wikipedia IC](https://de.wikipedia.org/wiki/Integrierter_Schaltkreis)

## Taster
![Button](../images/parts/button.png "Button")
### Was macht es:
Completes a circuit when it is pressed.
### Anzahl Anschlüsse:
4
### Identifizierung:
A little square with leads out the bottom and a button on the top.
### Was zu beachten ist:
These are almost square so can be inserted 90 degrees off angle.
### Mehr Informationen:
[Wikipedia Taste](https://de.wikipedia.org/wiki/Taste)

## Potentiometer
![Potentiometer](../images/parts/poti.png "Potentiometer")

### Was macht es:
Produces a variable resistance dependant on the angular position of the shaft.
### Anzahl Anschlüsse:
3 
### Identifizierung:
They can be packaged in many different form factors, look for a dial to identify.
### Was zu beachten ist:
Accidentally buying logarithmic scale.
### Mehr Informationen:
[Wikipedia Potentiometer](https://de.wikipedia.org/wiki/Potentiometer)

## Foto Widerstand
![Photo Resistor](../images/parts/photo-resistor.png "Photo Resistor")
### Was macht es:
Produces a variable resistance dependant on the amount of incident light.
### Anzahl Anschlüsse:
2 
### Identifizierung:
Usually a little disk with a clear top and a curvy line underneath.
### Was zu beachten ist:
Remember it needs to be in a voltage divider before it provides a useful input.
### Mehr Informationen:
[Wikipedia Fotowiderstand](https://de.wikipedia.org/wiki/Fotowiderstand)

## TMP36 Temperatur Sensor
![TMP36](../images/parts/tmp36.png "TMP36")
### Was macht es:
Produces a variable resistance dependant on the ambient temperature. It outputs 10 millivolts per degree centigrade on the signal pin, with a 500mV offset to allow measuring negative temperatures.
### Anzahl Anschlüsse:
3 (GND, Signal, 5V)
### Identifizierung:
Usually has TMP36 written on the component.
### Was zu beachten ist:
It looks a bit like the P2N2222AG transistors - check the text printed on the component to make sure you are using the right one.
### Mehr Informationen:
[Wikipedia Temperatursensor](https://de.wikipedia.org/wiki/Temperatursensor)

## Relais
![Relay](../images/parts/relais.png "Relay")
### Was macht es:
Acts as an electrically controlled mechanical switch.
### Anzahl Anschlüsse:
Depends on the relay. We will use a SPDT relay which has 5.
### Identifizierung:
Looks like a box.
### Mehr Informationen:
[Wikipedia Relais](https://de.wikipedia.org/wiki/Relais)

## RGB LED
![RBG LED](../images/parts/rgb-led.png "RGB LED")
### Was macht es:
Three LEDs in one package: Red, Green and Blue.
### Anzahl Anschlüsse:
4
### Identifizierung:
Looks like a regular LED, but with extra leads
### Was zu beachten ist:
There are two common form factors, bulb style (where the common lead is the second lead and is the longest), and Pirahna or UFO form factor (pictured - insert these into the breadboard on the diagonal).
There are two types of RGB LED, Common Anode and Common Cathode. For Common Anode, connect the common lead to 5V. For Common Cathode, connect the common lead to ground. The three other leads are for R, G and B signal. This guide assumes that you are using a Common Cathode RGB LED.
### Mehr Informationen:
[Wikipedia Leuchtdiode](https://de.wikipedia.org/wiki/Leuchtdiode)

## Steckbrett
![Breadboard](../images/parts/breadboard.png "Breadboard")
### Was macht es:
Used for prototyping circuits
### Was zu beachten ist:
The points in each row are connected horizontally
### Mehr Informationen:
[Wikipedia Steckplatine](https://de.wikipedia.org/wiki/Steckplatine)


## Stiftleiste
![Header Pins](../images/parts/header.png "Header pins")
### Was macht es:
In this kit, header pins are used to secure the circuit sheets to the breadboard and to connect component leads (e.g. on the servo) to the breadboard. Groups of pins can be snapped off to desired length.

### Mehr Informationen:
[Wikipedia Stifleiste](https://de.wikipedia.org/wiki/Stiftleiste)

