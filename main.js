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
 let elem =document.getElementById("main-container")

});

