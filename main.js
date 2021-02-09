const voice= document.querySelector(".voice");
const voice2Text=document.querySelector(".voice2Text");

const  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder =new SpeechRecognition();

recorder.onstart = ()=>{
    console.log("Voice Activated");
};

function generateReference(title, criteria, example,url){
    const refCard=document.createElement("div");
    refCard.classList.add("card");
    const cardHeader=document.createElement("h5");
    cardHeader.classList.add("card-header");
    cardHeader.classList.add("text-black-50");
    const refText=document.createTextNode(title);
    cardHeader.appendChild(refText);
    const cardBody=document.createElement('div');
    cardBody.classList.add("card-body");
    const cardPara=document.createElement("p");
    cardPara.classList.add("card-text");
    const criteriaImg = document.createElement('img');
    criteriaImg.src = criteria;
    const criteriaEx = document.createElement('img');
    criteriaEx.src = example;
    cardPara.appendChild(criteriaImg);
    cardPara.appendChild(criteriaEx);
    cardBody.appendChild(cardPara);
    const anchorLink =document.createElement("a");
    anchorLink.oncanplaythrough=url;
    anchorLink.classList.add("btn");
    anchorLink.classList.add("btn-primary");
    const moreInfoText=document.createTextNode("More info");
    anchorLink.appendChild(moreInfoText);
    cardBody.appendChild(anchorLink);
    refCard.appendChild(cardHeader);
    refCard.appendChild(cardBody);
    return refCard;


}

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

