const voice= document.querySelector(".voice");
const voice2Text=document.querySelector(".voice2Text");

const  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder =new SpeechRecognition();

recorder.onstart = ()=>{
    console.log("Voice Activated");
};

function generateChat(text){
    const alertContainer=document.createElement("div");
    alertContainer.classList.add("alert");
    alertContainer.classList.add("alert-light");
    const chatBox=document.createElement("p");
    chatBox.classList.add("voice2Text");

    const chatText=document.createTextNode(text);
    chatBox.appendChild(chatText);
    alertContainer.appendChild(chatBox);
    return alertContainer;

}

function generateBotChat(text){
    const botContainer=document.createElement("div");
    botContainer.classList.add("alert");
    botContainer.classList.add("alert-success");
    const botChatBox=document.createElement("p");
    botChatBox.classList.add("voice2Text");

    const BotChatText=document.createTextNode(text);
    botChatBox.appendChild(BotChatText);
    botContainer.appendChild(botChatBox);
    return botContainer;

}

function botReply(message){
    const speech= new SpeechSynthesisUtterance();
    speech.text="Sorry i cannot understand, please try againn.";

    // logic

    speech.volume=1;
    speech.pitch=1;
    speech.rate=1;
    window.speechSynthesis.speak(speech);
    let elem =document.getElementById("main-container")
    elem.appendChild(generateBotChat(speech.text));

}

recorder.onresult = (event) =>{
   const resultIndex=event.resultIndex;
   const  transcript =event.results[resultIndex][0].transcript;
  // voice2Text.textContent=transcript;
    let elem =document.getElementById("main-container")
    elem.appendChild(generateChat(transcript));
    botReply(transcript)
};

voice.addEventListener('click',()=>{
    recorder.start();
});

