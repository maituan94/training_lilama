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
// recognition.continuous = true;

var circling_flag = false

var language_chooser = $('#lang_choose')

language_chooser.change(function(event){
    console.log(event.target.value)
    recognition.lang = event.target.value;
})

recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript.toLowerCase();
    console.log(command)
    $('#text-command').text('Voice Input: '+command)
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
    // if(circling_flag == false){
    //     recognition.start();
    //     button_record.addClass('circling')
    //     circling_flag = true
    // }else{
    //     recognition.stop();
    //     button_record.removeClass('circling')
    //     circling_flag = false
    // }
    recognition.start();
    button_record.addClass('circling')
})
