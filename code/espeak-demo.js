var espeak = require('node-espeak');

espeak.initialize();

espeak.onVoice(function(wav, samples, samplerate) {
});
espeak.speak("hello world!");

