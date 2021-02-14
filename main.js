const voice= document.querySelector(".voice");
const voice2Text=document.querySelector(".voice2Text");

const  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder =new SpeechRecognition();

recorder.onstart = ()=>{
    console.log("Voice Activated");
};
//programming variables
const java=[
    {
        "name":"Oracle",
        "url":"https://docs.oracle.com/javase/tutorial/"
    },
    {
        "name":"Code Academy",
        "url":"https://www.codecademy.com/learn/learn-java"
    },
    {
        "name":"W3School",
        "url":"https://www.w3schools.com/java/"
    }

];

const python=[
    {
        "name":"Python Doc",
        "url":"https://wiki.python.org/moin/BeginnersGuide/NonProgrammers"
    },
    {
        "name":"Learn Python",
        "url":"https://www.learnpython.org/"
    },
    {
        "name":"W3School",
        "url":"https://www.w3schools.com/python/"
    }

];

const cprog=[
    {
        "name":"Learn C",
        "url":"https://www.learn-c.org/"
    },
    {
        "name":"Code Camp",
        "url":"https://www.freecodecamp.org/news/the-c-beginners-handbook/"
    },
    {
        "name":"W3School",
        "url":"https://www.w3schools.in/c-tutorial/"
    }

];

const cplus=[
    {
        "name":"Code Academy",
        "url":"https://www.codecademy.com/learn/learn-c-plus-plus"
    },
    {
        "name":"LearnCpp",
        "url":"https://www.learncpp.com/"
    },
    {
        "name":"W3School",
        "url":"https://www.w3schools.com/cpp/"
    }

];

const js=[
    {
        "name":"Mozilla",
        "url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        "name":"Javascript Info",
        "url":"https://javascript.info/"
    },
    {
        "name":"W3School",
        "url":"https://www.w3schools.com/js/DEFAULT.asp"
    }

];

const php=[
    {
        "name":"PHP Documentation",
        "url":"https://www.php.net/manual/en/langref.php"
    },
    {
        "name":"LearnPhp",
        "url":"https://www.learn-php.org/"
    },
    {
        "name":"W3School",
        "url":"https://www.w3schools.com/php/"
    }

];

const ardiuno=[
    {
        "name":"Tutorials Point",
        "url":"https://www.tutorialspoint.com/arduino/index.html"
    },
    {
        "name":"Arduino",
        "url":"https://www.arduino.cc/en/Tutorial/HomePage"
    },
    {
        "name":"Programing Electronics",
        "url":"https://www.programmingelectronics.com/free-arduino-guides-and-resources/"
    }

];

//referencing variables

const webpages={
    "btn":"Website",
    "name":"Web pages with organisations as authors",
    "criteria":"images/referencing/website-criteria.PNG",
    "example":"images/referencing/website.PNG",
    "url":"https://www-citethemrightonline-com.ezproxy.mdx.ac.uk/digital-internet/the-internet/web-pages-with-organisations-as-authors"
}

const books={
    "btn":"Book",
    "name":"Printed books",
    "criteria":"images/referencing/book-criteria.PNG",
    "example":"images/referencing/book.PNG",
    "url":"https://www-citethemrightonline-com.ezproxy.mdx.ac.uk/books/printed-books"
}

const journal={
    "btn":"Journal",
    "name":"Journal articles",
    "criteria":"images/referencing/journal-criteria.PNG",
    "example":"images/referencing/journal.PNG",
    "url":"https://www-citethemrightonline-com.ezproxy.mdx.ac.uk/journals/journal-articles"
}

const ebook={
    "btn":"E-Book",
    "name":"Electronic books (ebooks)",
    "criteria":"images/referencing/ebook-criteria.PNG",
    "example":"images/referencing/ebook.PNG",
    "url":"https://www-citethemrightonline-com.ezproxy.mdx.ac.uk/books/electronic-books-ebooks"
}

// academic writing variables
const litreview={
    "btn":"Literature Review",
    "name":"Literature Review",
    "criteria":"images/accadmicwritting/litreview-aim.png",
    "example":"images/accadmicwritting/litreview.png",
    "url":"https://leumdxmru.edublogs.org/letsson/what-is-a-literature-review/"
}

const report={
    "btn":"Report",
    "name":"Report Writting",
    "criteria":"images/accadmicwritting/report.png",
    "example":"images/accadmicwritting/report-2.png",
    "url":"https://leumdxmru.edublogs.org/letsson/complete-report-writing-tips-joy-mbeseka-ahmed-m-sc-bism-student/"
}

const paraphrase={
    "btn":"Paraphrasing",
    "name":"Paraphrasing",
    "criteria":"images/accadmicwritting/paraphrasing.png",
    "example":"images/accadmicwritting/paraphrasing-2.png",
    "url":"https://leumdxmru.edublogs.org/letsson/paraphrase-and-summary/"
}

const chi={
    "btn":"CHI Report",
    "name":"CHI Report Template",
    "criteria":"images/accadmicwritting/CHI.png",
    "example":"images/accadmicwritting/CHI-2.png",
    "url":"https://chi2018.acm.org/chi-proceedings-format/"
}

const criticalthinking={
    "btn":"Critical Thinking",
    "name":"Critical Thinking",
    "criteria":"images/accadmicwritting/crticalthinking.png",
    "example":"images/accadmicwritting/crticalthinking-2.png",
    "url":"https://leumdxmru.edublogs.org/letvideos/critical-thinking/"
}

const essay={
    "btn":"Essay",
    "name":"Essay Writting",
    "criteria":"images/accadmicwritting/essay.png",
    "example":"images/accadmicwritting/essay-2.png",
    "url":"https://leumdxmru.edublogs.org/helping-you/essay-structure/"
}

const plagiarism={
    "btn":"Plagiarism",
    "name":"Plagiarism",
    "criteria":"images/accadmicwritting/plagarism.png",
    "example":"images/accadmicwritting/plagarism-2.png",
    "url":"https://leumdxmru.edublogs.org/helping-you/what-is-plagiarism-article-sponsored-by-turnitin/"
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
    ["help me", "tell me story", "tell me joke"],
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
let alternative = ["Haha...", "Eh..."];

let commands=[
    {
        "btn":"Referencing",
        references

    },
    {
        "btn":"Academic Writing",
        accademicWritting
    },
    {
        "btn":"Programming",
        programming
    },
    {
        "btn":"Contact Us",
        contact
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
                item =  items[Math.floor(Math.random()*items.length)];
            }
        }
    }
    return item;
}
function generateButton(array){
    const btnGroup=document.createElement('div');
    btnGroup.classList.add("btn-group");
    btnGroup.role="group";
    for(let i=0;i<array.length;i++) {
        const button = document.createElement('button');
        button.classList.add("btn");
        button.classList.add("btn-outline-primary");
        button.classList.add("btnGap");
        button.type = "button";
        console.log(array[i].btn);
        const btnText = document.createTextNode(array[i].btn);
        button.appendChild(btnText);
        btnGroup.appendChild(button);
        button.addEventListener('click', () => {
            let elem =document.getElementById("main-container");

            elem.appendChild(generateBotChat("Here are available options on "+array[i].btn))

        });
    }
    return btnGroup;

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
    anchorLink.oncanplaythrough=url;
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
 let elem =document.getElementById("main-container");

    //elem.appendChild(generateButton(array));

});

