var message = document.querySelector('#message');
var button_record = $('#record')
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript.toLowerCase();
    console.log(command)
    $('#text-record').text(command)
    voice_decode(command)
};

recognition.onspeechend = function() {
    recognition.stop();
    button_record.removeClass('circling')
    console.log('stop record')
};

recognition.onerror = function(event) {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}        

$('#record').click(function(){
    recognition.start();
    button_record.addClass('circling')
})
