# NodeBots Tutorial 
NodeBots Tutorial mit Arduino, node.js und johnny-five

![Screenshot](public/images/web-server-screenshot.jpg "Screenshot")

## Vorbereitung

Es wird node.js benötigt (v4.4.3 LTS ist ausreichend).

https://nodejs.org/en/


## Installation

Nach dem Download und auspacken des Archives die notwendigen Node Module aus dem Installations Verzeichnis installieren:

Für Linux (Ubuntu/Debian):

1. Node.js Installation:

```
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. Einige Pakete müssen vor der Installation übersetzt werden. Dazu werden die Built-Tools benötigt:

```
sudo apt-get install -y build-essential
```

3. NodeBots-Tutorial Installation:

```
git clone git://github.com/robotfreak/NodeBots-Tutorial
cd ./NodeBots-Tutorial
npm install
```

Für Windows 

1. Node.js Installation. Download und Installation des [Node.js-Installers](https://nodejs.org/dist/v4.4.5/node-v4.4.5-x86.msi)

2. Das [Archiv](https://github.com/robotfreak/NodeBots-Tutorial/archive/master.zip) downloaden, und entpacken nach NodeBots-Tutorial

```
cd NodeBots-Tutorial
npm install
```

## Ausführen

Start des Express Web-Servers aus dem Installations Verzeichnis:

```
npm start
```

Der Web-Server ist dann im Browser unter folgender Adresse zu erreichen:

```
127.0.0.1:3000
```
oder

```
http://localhost:3000/
```

Die Beispielprogramme lädt man vom Installationsordner mit:

unter Linux:
```
node ./code/example.js
```

unter Windows:
```
node code\example.js
```

Dieses Tutorial basiert auf Beispielen von:

* https://github.com/AnnaGerber/node-ardx
* https://github.com/rwaldron/johnny-five

## Lizens

Copyright (c) 2016 Peter Recktenwald p.recktenwald@gmail.com Licensed under the MIT license.
