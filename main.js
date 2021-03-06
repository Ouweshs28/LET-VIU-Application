const voice= document.querySelector(".voice");
const text= document.querySelector(".msg_send_btn");
const voice2Text=document.querySelector(".voice2Text");
const helpDiv=document.querySelector(".inbox_chat");

const  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder =new SpeechRecognition();

recorder.onstart = ()=>{
    console.log("Voice Activated");
};

function clearHelp(elem){

   elem.innerHTML="";
   return elem;

}
//programming variables
const java=[
    {
      "progname":"Java"
    },
    {
        "btn":"Oracle",
        "name":"Oracle",
        "url":"https://docs.oracle.com/javase/tutorial/"
    },
    {
        "btn":"Code Academy",
        "name":"Code Academy",
        "url":"https://www.codecademy.com/learn/learn-java"
    },
    {
        "btn":"W3School",
        "name":"W3School",
        "url":"https://www.w3schools.com/java/"
    }

];

const python=[
    {
        "progname":"Python"
    },
    {
        "btn":"Python Doc",
        "name":"Python Doc",
        "url":"https://wiki.python.org/moin/BeginnersGuide/NonProgrammers"
    },
    {
        "btn":"Learn Python",
        "name":"Learn Python",
        "url":"https://www.learnpython.org/"
    },
    {
        "btn":"W3School",
        "name":"W3School",
        "url":"https://www.w3schools.com/python/"
    }

];

const cprog=[
    {
        "progname":"CProgramming"
    },
    {
        "btn":"Learn C",
        "name":"Learn C",
        "url":"https://www.learn-c.org/"
    },
    {
        "btn":"Code Camp",
        "name":"Code Camp",
        "url":"https://www.freecodecamp.org/news/the-c-beginners-handbook/"
    },
    {
        "btn":"W3School",
        "name":"W3School",
        "url":"https://www.w3schools.in/c-tutorial/"
    }

];

const cplus=[
    {
        "progname":"C++"
    },
    {
        "code":"Code Academy",
        "name":"Code Academy",
        "url":"https://www.codecademy.com/learn/learn-c-plus-plus"
    },
    {
        "btn":"LearnCpp",
        "name":"LearnCpp",
        "url":"https://www.learncpp.com/"
    },
    {
        "btn":"W3School",
        "name":"W3School",
        "url":"https://www.w3schools.com/cpp/"
    }

];

const js=[
    {
        "progname":"JavaScript"
    },
    {
        "btn":"Mozilla",
        "name":"Mozilla",
        "url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        "btn":"Javascript Info",
        "name":"Javascript Info",
        "url":"https://javascript.info/"
    },
    {
        "btn":"W3School",
        "name":"W3School",
        "url":"https://www.w3schools.com/js/DEFAULT.asp"
    }

];

const php=[
    {
        "progname":"PHP"
    },
    {
        "btn":"PHP Documentation",
        "name":"PHP Documentation",
        "url":"https://www.php.net/manual/en/langref.php"
    },
    {
        "btn":"LearnPhp",
        "name":"LearnPhp",
        "url":"https://www.learn-php.org/"
    },
    {
        "btn":"W3School",
        "name":"W3School",
        "url":"https://www.w3schools.com/php/"
    }

];

const ardiuno=[
    {
        "progname":"Ardiuno"
    },

    {
        "btn":"Tutorials Point",
        "name":"Tutorials Point",
        "url":"https://www.tutorialspoint.com/arduino/index.html"
    },
    {
        "btn":"Arduino",
        "name":"Arduino",
        "url":"https://www.arduino.cc/en/Tutorial/HomePage"
    },
    {
        "btn":"Programing Electronics",
        "name":"Programing Electronics",
        "url":"https://www.programmingelectronics.com/free-arduino-guides-and-resources/"
    }

];

//referencing variables

const webpages={
    "id":"web",
    "btn":"Website",
    "name":"Web pages with organisations as authors",
    "criteria":"images/referencing/website-criteria.PNG",
    "example":"images/referencing/website.PNG",
    "url":"https://www-citethemrightonline-com.ezproxy.mdx.ac.uk/digital-internet/the-internet/web-pages-with-organisations-as-authors",
}

const books={
    "id":"book",
    "btn":"Book",
    "name":"Printed books",
    "criteria":"images/referencing/book-criteria.PNG",
    "example":"images/referencing/book.PNG",
    "url":"https://www-citethemrightonline-com.ezproxy.mdx.ac.uk/books/printed-books",
}

const journal={
    "id":"journal",
    "btn":"Journal",
    "name":"Journal articles",
    "criteria":"images/referencing/journal-criteria.PNG",
    "example":"images/referencing/journal.PNG",
    "url":"https://www-citethemrightonline-com.ezproxy.mdx.ac.uk/journals/journal-articles",
}

const ebook={
    "id":"ebook",
    "btn":"E-Book",
    "name":"Electronic books (ebooks)",
    "criteria":"images/referencing/ebook-criteria.PNG",
    "example":"images/referencing/ebook.PNG",
    "url":"https://www-citethemrightonline-com.ezproxy.mdx.ac.uk/books/electronic-books-ebooks",
}

// academic writing variables
const litreview={
    "id":"litreview",
    "btn":"Literature Review",
    "name":"Literature Review",
    "criteria":"images/accadmicwritting/litreview-aim.png",
    "example":"images/accadmicwritting/litreview.png",
    "url":"https://leumdxmru.edublogs.org/letsson/what-is-a-literature-review/",
}

const report={
    "id":"report",
    "btn":"Report",
    "name":"Report Writting",
    "criteria":"images/accadmicwritting/report.png",
    "example":"images/accadmicwritting/report-2.png",
    "url":"https://leumdxmru.edublogs.org/letsson/complete-report-writing-tips-joy-mbeseka-ahmed-m-sc-bism-student/",

}

const paraphrase={
    "id":"paraphrase",
    "btn":"Paraphrasing",
    "name":"Paraphrasing",
    "criteria":"images/accadmicwritting/paraphrasing.png",
    "example":"images/accadmicwritting/paraphrasing-2.png",
    "url":"https://leumdxmru.edublogs.org/letsson/paraphrase-and-summary/",
}

const chi={
    "id":"chi",
    "btn":"CHI Report",
    "name":"CHI Report Template",
    "criteria":"images/accadmicwritting/CHI.png",
    "example":"images/accadmicwritting/CHI-2.png",
    "url":"https://chi2018.acm.org/chi-proceedings-format/",
}

const criticalthinking={
    "id":"criticalthinking",
    "btn":"Critical Thinking",
    "name":"Critical Thinking",
    "criteria":"images/accadmicwritting/crticalthinking.png",
    "example":"images/accadmicwritting/crticalthinking-2.png",
    "url":"https://leumdxmru.edublogs.org/letvideos/critical-thinking/",
}

const essay={
    "id":"essay",
    "btn":"Essay",
    "name":"Essay Writting",
    "criteria":"images/accadmicwritting/essay.png",
    "example":"images/accadmicwritting/essay-2.png",
    "url":"https://leumdxmru.edublogs.org/helping-you/essay-structure/",
}

const plagiarism={
    "id":"plagiarism",
    "btn":"Plagiarism",
    "name":"Plagiarism",
    "criteria":"images/accadmicwritting/plagarism.png",
    "example":"images/accadmicwritting/plagarism-2.png",
    "url":"https://leumdxmru.edublogs.org/helping-you/what-is-plagiarism-article-sponsored-by-turnitin/",
}

//contact us
const facebook={
    "btn":"Facebook",
    "link":"https://www.facebook.com/letslamdx"
}

const instagram={
    "btn":"Instagram",
    "link":"https://www.instagram.com/let.slamdx2020/"
}


const blog={
    "btn":"LET Blog",
    "link":"https://leumdxmru.edublogs.org/"
}

const appointment={
    "btn":"Appointment",
    "link":"https://calendly.com/n-rozah"
}

const email={
    "btn":"Email",
    "link":"mailto:LET@mdx.ac.mu?subject=Subject&body=message%20goes%20here;"
}

const programming=[
    java,
    python,
    php,
    cplus,
    cprog,
    ardiuno,
    js
];

const references=[
    webpages,
    ebook,
    journal,
    books
];

const accademicWritting=[
    litreview,
    report,
    paraphrase,
    chi,
    criticalthinking,
    essay,
    plagiarism
];


const contact=[
    facebook,
    instagram,
    appointment,
    email
]

let trigger = [
    ["hi","hey","hello"],
    ["help", "guide", "assist","commands","commands available"],
    ["what are you doing", "what is going on"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    ["your name please",  "your name", "may i know your name", "what is your name"],
    ["i love you"],
    ["happy", "good"],
    ["bad", "bored", "tired"],
    ["tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
    ["bye", "good bye", "goodbye", "see you later"]
];
let reply = [
    ["Hi, I am the LET Student Advisor","Hey, I am the LET Student Advisor","Hello, I am the LET Student Advisor"],
    ["Here are available commands", "Below are some options", "You can find options below"],
    ["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
    ["I am 1 day old"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["Kani Veri", "My God"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["I will", "What about?"],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
    ["Bye", "Goodbye", "See you later"]
];
let alternative = ["Haha...", "Sorry excuse me"];

let commands=[
    {
        "btn":"Referencing",
        "function":references

    },
    {
        "btn":"Academic Writing",
        "function":accademicWritting
    },
    {
        "btn":"Programming",
        "function":programming
    },
    {
        "btn":"Contact Us",
        "function":contact
    }
]

function redirect(url){
    window.open(url)
}
function compare(arr, array, string){
    let item;
    for(let x=0; x<arr.length; x++){
        for(let y=0; y<array.length; y++){
            if(arr[x][y] == string){
                items = array[x];
                console.log(items);
                item =  items[Math.floor(Math.random()*items.length)];
            }
        }
    }
    return item;
}
function generateButton(array){
    console.log(array);
    const chatList =document.createElement('div');
    chatList.classList.add("chat_list");
    const chatPeople= document.createElement('div');
    chatPeople.classList.add("chat_people")
    const chatIB= document.createElement('div');
    chatIB.classList.add("chat_ib");
    const btnGroup=document.createElement('div');
    btnGroup.classList.add("d-grid");
    btnGroup.classList.add("gap-5");
    btnGroup.role="group";
    if(Array.isArray(array)){
    for(let i=0;i<4;i++) {
        let btnText;
        const button = document.createElement('button');
        button.classList.add("btn-lg");
        button.classList.add("btn-primary");
        button.type = "button";
        if(array[i].btn===undefined){
            btnText= document.createTextNode(array[i][0].progname);
            button.id=array[i][0].progname;
        }else {
            btnText = document.createTextNode(array[i].btn);
            button.id = array[i].id;
        }

        button.appendChild(btnText);
        btnGroup.appendChild(button);
        if(array[i].id===undefined) {
            if(array[i].link===undefined){
                button.addEventListener('click', () => {
                    clearHelp(helpDiv);
                    let elem = document.querySelector('.msg_history');
                    elem.appendChild(generateChat(array[i].btn));
                    elem.appendChild(generateBotChat("Check your help area for options on " + array[i].btn));
                    const speech = new SpeechSynthesisUtterance();
                    speech.text = "Check your help area for options on " + array[i].btn;
                    window.speechSynthesis.speak(speech);
                    helpDiv.appendChild(generateButton(array[i].function));

                });
            }else{
                button.addEventListener('click', () => {
                clearHelp(helpDiv);
                let elem = document.querySelector('.msg_history');
                elem.appendChild(generateChat(array[i].btn));
                elem.appendChild(generateBotChat("Redirecting to " + array[i].btn));
                const speech = new SpeechSynthesisUtterance();
                speech.text = "Redirecting to " + array[i].btn;
                window.speechSynthesis.speak(speech);
                redirect(array[i].link);
                });
            }

        }
        else{
            button.addEventListener('click', () => {
                clearHelp(helpDiv);
                let elem = document.querySelector('.msg_history');
                elem.appendChild(generateChat(array[i].btn));
                elem.appendChild(generateBotChat("Check your help area on " + array[i].btn));
                const speech = new SpeechSynthesisUtterance();
                speech.text = "Check your help area for options on " + array[i].btn;
                window.speechSynthesis.speak(speech);
                helpDiv.appendChild(generateReference(array[i].name,array[i].criteria,array[i].example,array[i].url))
                console.log("reference button")
            });

            }
        }

    }
    chatList.appendChild(chatPeople);
    chatList.appendChild(chatIB);
    chatList.appendChild(btnGroup);
    return chatList;

}

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
    anchorLink.href=url;
    anchorLink.classList.add("btn");
    anchorLink.classList.add("btn-primary");
    anchorLink.target='_blank'
    const moreInfoText=document.createTextNode("More info");
    anchorLink.appendChild(moreInfoText);
    cardBody.appendChild(anchorLink);
    refCard.appendChild(cardHeader);
    refCard.appendChild(cardBody);
    return refCard;
}

function genPrograming(language,imgurl,btn1,link1,btn2,link2,btn3,link3){
    const refCard=document.createElement("div");
    refCard.classList.add("card");
    const cardHeader=document.createElement("h5");
    cardHeader.classList.add("card-header");
    cardHeader.classList.add("text-black-50");
    const refText=document.createTextNode(language);
    cardHeader.appendChild(refText);
    const cardBody=document.createElement('div');
    cardBody.classList.add("card-body");
    const cardPara=document.createElement("p");
    cardPara.classList.add("card-text");
    const programingImg = document.createElement('img');
    programingImg.classList.add("card-img-top")
    programingImg.src = imgurl;
    cardPara.appendChild(programingImg);
    cardBody.appendChild(cardPara);
    const anchorLink =document.createElement("a");
    anchorLink.href=link1;
    anchorLink.classList.add("btn");
    anchorLink.classList.add("btnProg");
    anchorLink.classList.add("btn-primary");
    anchorLink.target='_blank'
    const btnInfo=document.createTextNode(btn1);
    anchorLink.appendChild(btnInfo);
    cardBody.appendChild(anchorLink);
    const anchorLink2 =document.createElement("a");
    anchorLink2.href=link2;
    anchorLink2.classList.add("btn");
    anchorLink2.classList.add("btnProg");
    anchorLink2.classList.add("btn-primary");
    anchorLink2.target='_blank'
    const btnInfo2=document.createTextNode(btn2);
    anchorLink2.appendChild(btnInfo2);
    cardBody.appendChild(anchorLink2);
    const anchorLink3 =document.createElement("a");
    anchorLink3.href=link3;
    anchorLink3.classList.add("btn");
    anchorLink3.classList.add("btnProg");
    anchorLink3.classList.add("btn-primary");
    anchorLink3.target='_blank'
    const btnInfo3=document.createTextNode(btn3);
    anchorLink3.appendChild(btnInfo3);
    cardBody.appendChild(anchorLink3);
    refCard.appendChild(cardHeader);
    refCard.appendChild(cardBody);
    return refCard;
}

function generateChat(text){

    const outMsg=document.createElement('div');
    outMsg.classList.add("outgoing_msg");
    const sentMsg=document.createElement('div');
    sentMsg.classList.add("sent_msg");
    const paraChat =document.createElement('p');
    const chatText=document.createTextNode(text);
    paraChat.appendChild(chatText);
    sentMsg.appendChild(paraChat);
    outMsg.appendChild(sentMsg);
    return outMsg;

}

function generateBotChat(text){

    const incomingMsg= document.createElement('div');
    incomingMsg.classList.add("incoming_msg");
    const incomingMsgimg= document.createElement('div');
    incomingMsgimg.classList.add("incoming_msg_img");
    const imgUser=document.createElement('img');
    imgUser.src="https://ptetutorials.com/images/user-profile.png";
    incomingMsgimg.appendChild(imgUser);
    incomingMsg.appendChild(incomingMsgimg);
    const recivedMsg=document.createElement('div');
    recivedMsg.classList.add("received_msg");
    const  recivedWMsg=document.createElement('div');
    recivedWMsg.classList.add("received_withd_msg");
    const paraChat =document.createElement('p');
    const chatText=document.createTextNode(text);
    paraChat.appendChild(chatText);
    recivedWMsg.appendChild(paraChat);
    recivedMsg.appendChild(recivedWMsg);
    incomingMsg.appendChild(recivedMsg);
    return incomingMsg;

}

function botReply(message){
    const speech= new SpeechSynthesisUtterance();
    speech.text="Sorry i cannot understand, please try again.";

    // logic

    let text = (message.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and
    text = text.replace(/ a /g, " ").replace(/ you /g, " ").replace(/ you /g, " ").replace(/how can /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
    if(compare(trigger, reply, text)){
        speech.text = compare(trigger, reply, text);
    } else {
        speech.text = alternative[Math.floor(Math.random()*alternative.length)];
    }


    speech.volume=1;
    speech.pitch=1;
    speech.rate=1;
    window.speechSynthesis.speak(speech);
    let elem =document.querySelector('.msg_history');
    elem.appendChild(generateBotChat(speech.text));

}

recorder.onresult = (event) =>{
   const resultIndex=event.resultIndex;
   const  transcript =event.results[resultIndex][0].transcript;
   console.log(event);
  // voice2Text.textContent=transcript;
    let elem =document.querySelector('.msg_history');
    elem.appendChild(generateChat(transcript));
    botReply(transcript)
};

text.addEventListener('click',()=>{
    let elem =document.querySelector('.msg_history');
    let inputField=document.getElementById("userInput");
    let transcript= inputField.value;
    elem.appendChild(generateChat(transcript));
    botReply(transcript);
    inputField.value="";
});

voice.addEventListener('click',()=>{
    recorder.start();
    clearHelp(helpDiv);
    helpDiv.appendChild(generateButton(commands));

});

