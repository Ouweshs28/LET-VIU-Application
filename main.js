const voice= document.querySelector(".voice");
const text= document.querySelector(".msg_send_btn");
const voice2Text=document.querySelector(".voice2Text");
const helpDiv=document.querySelector(".inbox_chat");
const chatInput=document.querySelector(".write_msg")
const micIcon=document.querySelector(".float_right");
const cancelVoice=document.querySelector(".cancelvoice");
const muteVoice=document.querySelector(".mute");
const enableVoice=document.querySelector(".float_vol")
let back;
let voicenabled=1;

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
      "progname":"Java",
        "imgurl":"images/programming/java.png"
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
        "progname":"Python",
        "imgurl":"images/programming/python.png"
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
        "progname":"CProgramming",
        "imgurl":"images/programming/c.png"
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

const html=[
    {
        "progname":"HTML",
        "imgurl":"images/programming/html.png"
    },
    {
        "code":"Code Academy",
        "name":"Code Academy",
        "url":"https://www.codecademy.com/learn/learn-htmls"
    },
    {
        "btn":"LearnHTML",
        "name":"LearnHTML",
        "url":"https://www.learn-html.org/"
    },
    {
        "btn":"W3School",
        "name":"W3School",
        "url":"https://www.w3schools.com/html/"
    }

];

const cplus=[
    {
        "progname":"C++",
        "imgurl":"images/programming/c++.png"
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
        "progname":"JavaScript",
        "imgurl":"images/programming/javascript.jpg"
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
        "progname":"PHP",
        "imgurl":"images/programming/php.png"
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
        "progname":"Ardiuno",
        "imgurl":"images/programming/ardiuno.png"
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
    "localurl":"pages/litreview.html",
}

const report={
    "id":"report",
    "btn":"Report",
    "name":"Report Writting",
    "criteria":"images/accadmicwritting/report.png",
    "example":"images/accadmicwritting/report-2.png",
    "localurl":"pages/report.html",

}

const paraphrase={
    "id":"paraphrase",
    "btn":"Paraphrasing",
    "name":"Paraphrasing",
    "criteria":"images/accadmicwritting/paraphrasing.png",
    "example":"images/accadmicwritting/paraphrasing-2.png",
    "localurl":"pages/paraphrase.html",
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
    "localurl":"pages/essay.html",
}

const plagiarism={
    "id":"plagiarism",
    "btn":"Plagiarism",
    "name":"Plagiarism",
    "criteria":"images/accadmicwritting/plagarism.png",
    "example":"images/accadmicwritting/plagarism-2.png",
    "localurl":"pages/plagiarism.html",
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
    js,
    html
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
    ["help","you help", "guide", "assist","commands","commands available"],
    ["reference", "citation", "bibliography","referencing","cite"],
    ["reference websites","reference website","reference webpages","reference webpage", "reference online","referencing website","referencing websites","referencing online","cite website","cite websites","cite webpages","cite webpage"],
    ["reference books","reference book", "referencing books","cite book","cite books"],
    ["reference e-books","reference e-book","reference electronic book","reference electronic books","referencing ebooks","referencing e-books","referencing e-book","cite ebook","cite ebooks","cite e-book","cite e-books","cite electronic book","cite electronic books"],
    ["reference journal","reference journals","reference article","reference articles","referencing journal","referencing journals","referencing article","referencing articles","cite journal","cite journals","cite article","cite articles"],
    ["programming", "code","codding"],
    ["programming arduino","code arduino","codding arduino","arduino programming","arduino code","arduino codding","arduino"],
    ["programming c++","code c++","codding c++","c++ programming","c++ code","c++ codding"],
    ["programming c","code c","codding c","c programming","c code","c codding"],
    ["programming html","code html","codding html","html programming","html code","html codding"],
    ["programming java","code java","codding java","java programming","java code","java codding","java"],
    ["programming javascript","code javascript","codding javascript","javascript programming","javascript code","javascript codding","javascript"],
    ["programming python","code python","codding python","python programming","python code","python codding","python"],
    ["programming php","code php","codding php","php programming","php code","php codding","php"],
    ["academic writing", "writing", "language","academic language"],
    ["chi writing", "chi report","chi format"],
    ["critical thinking","thinking critically","think critically"],
    ["writing essay","essay writing","essay","essays"],
    ["writing literature review","literature review writing","literature review","lit review"],
    ["paraphrase","paraphrasing", "re-write", "re write","rephrase","rephrasing"],
    ["plagiarism","plagiarise", "plagiarising"],
    ["writing report","report writing","report","reports"],
    ["contact", "social media", "reach let","reach the team"],
    ["facebook", "fb"],
    ["instagram", "insta"],
    ["appointment", "meeting","consultation","session","appointments", "meetings","consultations","sessions"],
    ["email", "emails","e-mails","e-mail"],
    ["bye", "good bye", "goodbye", "see you later"]
];
let reply = [
    ["Hi, I am the LET Student Advisor","Hey, I am the LET Student Advisor, I am here to help you","Hello, I am the LET Student Advisor, here to assist you"],
    ["Here are available commands in the help area, please choose", "Find in the help area some options, please make a selection", "You can find options in the help area, make a choice"],
    ["Here are available referencing guides in the help area, please make a selection", "Find in the help area some guides on referencing, choose the one you want help with", "You can find options on referencing in the help area, make a choice"],
    ["You can find how to reference a website in the help area, if you need more help click on more info", "Find in the help area on referencing websites, if you require more assistance please click on more info button", "You can find how to reference websites in the help area, if you need more help click on more info button"],
    ["You can find how to reference a book in the help area, if you need more help click on more info", "Find in the help area on referencing books, if you require more assistance please click on more info button", "You can find options on referencing books in the help area, if you need more help click on more info button"],
    ["You can find how to reference an e-book in the help area, if you need more help click on more info", "Find in the help area on referencing electronic books, if you require more assistance please click on more info button", "You can find options on referencing e-books in the help area, if you need more help click on more info button"],
    ["You can find how to reference a journal in the help area, if you need more help click on more info", "Find in the help area on referencing journals, if you require more assistance please click on more info button", "You can find options on referencing journals in the help area, if you need more help click on more info button"],
    ["Here are available programming languages resources in the help area, please choose", "Find in the help area some programming languages resources, choose the one you want help with", "You can find programming languages resources in the help area, make a choice"],
    ["You can find arduino programming languages resources in the help area, choose one of these websites to start learning", "Find in the help area some arduino programming languages resources, select one of these websites to get started", "Here you go, arduino programming languages resources to get you kicking"],
    ["You can find c++ programming languages resources in the help area, choose one of these websites to start learning", "Find in the help area some c++ programming languages resources, select one of these websites to get started", "Here you go, some c++ programming languages resources to get you kicking"],
    ["You can find c programming languages resources in the help area, choose one of these websites to start learning", "Find in the help area some c programming languages resources, select one of these websites to get started", "Here you go, c programming languages resources to get you kicking"],
    ["You can find html programming languages resources in the help area, choose one of these websites to start learning", "Find in the help area some html programming languages resources, select one of these websites to get started", "Here you go, html programming languages resources to get you kicking"],
    ["You can find java programming languages resources in the help area, choose one of these websites to start learning", "Find in the help area some java programming languages resources, select one of these websites to get started", "Here you go, java programming languages resources to get you kicking"],
    ["You can find javascript programming languages resources in the help area, choose one of these websites to start learning", "Find in the help area some javascript programming languages resources, select one of these websites to get started", "Here you go, javascript programming languages resources to get you kicking"],
    ["You can find python programming languages resources in the help area, choose one of these websites to start learning", "Find in the help area some python programming languages resources, select one of these websites to get started", "Here you go, python programming languages resources to get you kicking"],
    ["You can find php programming languages resources in the help area, choose one of these websites to start learning", "Find in the help area some php programming languages resources, select one of these websites to get started", "Here you go, php programming languages resources to get you kicking"],
    ["Here are available academic writing resources in the help area, please make a selection we got you", "Find in the help area some academic writing guides, please make a choice", "You can find academic writing guides in the help area, we know it is hard to write."],
    ["You can find chi report writing in the help area, for more info click on the button", "Find in the help area chi report info, if you need more info click on the button", "Here you go, chi report writing in the help area, if you require more info click on the button"],
    ["You can find critical thinking tips in the help area, for more info click on the button", "Find in the help area critical thinking guidelines, if you need more info click on the button", "Here you go, critical thinking resources in the help area, if you require more info click on the button"],
    ["You can find essay writing tips in the help area, for more info click on the button", "Find in the help area essay writing guidelines, if you need more info click on the button", "Here you go, essay writing resources in the help area, if you require more info click on the button"],
    ["You can find literature review tips in the help area, for more info click on the button", "Find in the help area literature review guidelines, if you need more info click on the button","Here you go, literature review resources in the help area, if you require more info click on the button"],
    ["You can find paraphrasing tips in the help area, this is helpful to avoid plagarism.", "Find in the help area paraphrasing guidelines, if you need more info click on the button", "You can find paraphrasing resources in the help area, if you want to avoid plagiarism"],
    ["You can find plagiarism tips in the help area, if you want to avoid it please check paraphrasing", "Find in the help area plagiarism guidelines, if you need more info click on the button", "You can find plagiarism resources in the help area, if you want to avoid it check paraphrasing"],
    ["You can find report writing tips in the help area, for more info click on the button", "Find in the help area report writing guidelines, if you need more info click on the button", "You can find report writing resources in the help area, if you require more info click on the button"],
    ["You can find point of contacts in the help area, click on the buttons to contact us", "Find in the help area ways to contact the team, choose how you want to contact us", "You can find ways to contact the team in the help area, make a choice"],
    ["Redirecting to facebook page of LET in a new tab", "Opening the LET facebook page in a new tab"],
    ["Redirecting to instagram page of LET in a new tab", "Opening the LET instagram page in a new tab"],
    ["Redirecting to calendly booking please book your appointment", "Opening the calendly booking please book your appointment"],
    ["Redirecting to email application, type your email", "Opening the email application, type your email in a new tab"],
    ["Bye", "Goodbye", "See you later"]
];
let alternative = ["Sorry this command is not valid please check the help button for commands", "Sorry i could not understand, please check commands available","Unfortunately, this command is not valid, please try again"];

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
    setTimeout(function(){
        window.open(url)
    }, 2000);


}
function compare(arr, array, string){
    let item;
    console.log(string);
    for(let x=0; x<arr.length; x++){
        for(let y=0; y<array.length; y++){
            if(arr[x][y] == string){
                console.log(x)
                switch(x) {
                    case 1:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateButton(commands));
                        break;
                    case 2:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateButton(references));
                        break;
                    case 3:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateReference(webpages));
                        break;
                    case 4:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateReference(books));
                        break;
                    case 5:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateReference(ebook));
                        break;
                    case 6:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateReference(journal));
                        break;
                    case 7:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateButton(programming));
                        break;
                    case 8:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(genPrograming(ardiuno));
                        break;
                    case 9:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(genPrograming(cplus));
                        break;
                    case 10:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(genPrograming(cprog));
                        break;
                    case 11:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(genPrograming(html));
                        break;
                    case 12:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(genPrograming(java));
                        break;
                    case 13:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(genPrograming(js));
                        break;
                    case 14:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(genPrograming(python));
                        break;
                    case 15:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(genPrograming(php));
                        break;
                    case 16:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateButton(accademicWritting));
                        break;
                    case 17:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateReference(chi));
                        break;
                    case 18:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateReference(criticalthinking));
                        break;
                    case 19:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateReference(essay));
                        break;
                    case 20:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateReference(litreview));
                        break;
                    case 21:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateReference(paraphrase));
                        break;
                    case 22:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateReference(plagiarism));
                        break;
                    case 23:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateReference(report));
                        break;
                    case 24:
                        clearHelp(helpDiv);
                        helpDiv.appendChild(generateButton(contact));
                        break;
                    case 25:
                        clearHelp(helpDiv);
                        redirect(facebook.link);
                        break;
                    case 26:
                        clearHelp(helpDiv);
                        redirect(instagram.link);
                        break;
                    case 27:
                        clearHelp(helpDiv);
                        redirect(appointment.link);
                        break;
                    case 28:
                        clearHelp(helpDiv);
                        redirect(email.link);
                        break;


                }
                items = array[x];
                console.log(items);
                item =  items[Math.floor(Math.random()*items.length)];
            }
        }
    }
    return item;
}
function generateButton(array){
    back=array;
    const chatList =document.createElement('div');
    chatList.classList.add("chat_list");
    const chatPeople= document.createElement('div');
    chatPeople.classList.add("chat_people")
    const chatIB= document.createElement('div');
    chatIB.classList.add("chat_ib");
    const btnGroup=document.createElement('div');
    btnGroup.classList.add("btn-group-vertical");
    btnGroup.role="group";
    if(Array.isArray(array)){
        array.sort( () => .5 - Math.random() );
    for(let i=0;i<array.length;i++) {
        let btnText;
        const button = document.createElement('button');
        button.classList.add("btn-lg");
        button.classList.add("btn-primary");
        button.classList.add("mb-4");
        button.type = "button";
        if(array[i].btn===undefined){
            btnText= document.createTextNode(array[i][0].progname);
            button.id=array[i][0].progname;
            button.addEventListener('click', () => {
                clearHelp(helpDiv);
                let elem = document.querySelector('.msg_history');
                elem.appendChild(generateChat(array[i][0].progname));
                elem.appendChild(generateBotChat("Programming on " + array[i][0].progname));
                helpDiv.appendChild(genPrograming(array[i],back));


            });
        }else {
            btnText = document.createTextNode(array[i].btn);
            button.id = array[i].id;

        }

        button.appendChild(btnText);
        btnGroup.appendChild(button);
        console.log(array)
        if(array[i].id===undefined && array.length!=8) {
            if(array[i].link===undefined){
                button.addEventListener('click', () => {
                    clearHelp(helpDiv);
                    let elem = document.querySelector('.msg_history');
                    elem.appendChild(generateChat(array[i].btn));
                    elem.appendChild(generateBotChat("Check your help area for options on " + array[i].btn));
                    helpDiv.appendChild(generateButton(array[i].function));

                });
            }else{
                button.addEventListener('click', () => {
                clearHelp(helpDiv);
                let elem = document.querySelector('.msg_history');
                elem.appendChild(generateChat(array[i].btn));
                elem.appendChild(generateBotChat("Redirecting to " + array[i].btn));
                redirect(array[i].link);
                });
            }

        }
        else if(array.length!=8){

                button.addEventListener('click', () => {
                    clearHelp(helpDiv);
                    let elem = document.querySelector('.msg_history');
                    elem.appendChild(generateChat(array[i].btn));
                    elem.appendChild(generateBotChat("Check your help area on " + array[i].btn));
                    helpDiv.appendChild(generateReference(array[i],back))
                });



            }
        }

    }
    chatList.appendChild(chatPeople);
    chatList.appendChild(chatIB);
    chatList.appendChild(btnGroup);
    return chatList;

}

function generateReference(array,page=null){
    let backBtn=null;
    console.log(page)
    if(page!=null){
        backBtn=genBackButton(page)
    }
    const refCard=document.createElement("div");
    refCard.classList.add("card");
    const cardHeader=document.createElement("h5");
    cardHeader.classList.add("card-header");
    cardHeader.classList.add("text-black-50");
    const refText=document.createTextNode(array.name);
    cardHeader.appendChild(refText);
    const cardBody=document.createElement('div');
    cardBody.classList.add("card-body");
    const cardPara=document.createElement("p");
    cardPara.classList.add("card-text");
    const criteriaImg = document.createElement('img');
    criteriaImg.src = array.criteria;
    const criteriaEx = document.createElement('img');
    criteriaEx.src = array.example;
    cardPara.appendChild(criteriaImg);
    cardPara.appendChild(criteriaEx);
    cardBody.appendChild(cardPara);
    const anchorLink =document.createElement("a");
    anchorLink.classList.add("btn");
    anchorLink.classList.add("btn-primary");
    if(array.localurl!=undefined){
        //anchorLink.href=url;
        anchorLink.dataset.target="#blogref";
        anchorLink.dataset.toggle="modal";
        //anchorLink.target='_blank'
        anchorLink.addEventListener('click', () => {
            clearHelp(helpDiv);
            const iframe=document.createElement('iframe');
            iframe.src=array.localurl;
            iframe.width="100%";
            iframe.height="80%"
            const anchorLink =document.createElement("a");
            anchorLink.classList.add("btn");
            anchorLink.classList.add("btn-danger");
            anchorLink.classList.add("closeBtn")
            const btnText=document.createTextNode("Close");
            anchorLink.appendChild(btnText)
            anchorLink.addEventListener("click",()=>{
                clearHelp(helpDiv);
            });

            helpDiv.appendChild(anchorLink);
            helpDiv.appendChild(iframe);
        });
    }else{
        anchorLink.href=array.url;
        anchorLink.target='_blank'
    }

    const moreInfoText=document.createTextNode("More info");
    anchorLink.appendChild(moreInfoText);
    cardBody.appendChild(anchorLink);
    if(backBtn!=null){
        refCard.appendChild(backBtn);
    }
    refCard.appendChild(cardHeader);
    refCard.appendChild(cardBody);
    return refCard;
}

function genPrograming(array,page=null){
    let backBtn=null;
    if(page!=null){
        backBtn=genBackButton(page)
    }
    const refCard=document.createElement("div");
    refCard.classList.add("card");
    const cardHeader=document.createElement("h5");
    cardHeader.classList.add("card-header");
    cardHeader.classList.add("text-black-50");
    const refText=document.createTextNode(array[0].progname);
    cardHeader.appendChild(refText);
    const cardBody=document.createElement('div');
    cardBody.classList.add("card-body");
    const cardPara=document.createElement("p");
    cardPara.classList.add("card-text");
    const programingImg = document.createElement('img');
    programingImg.classList.add("card-img-top")
    programingImg.src = array[0].imgurl;
    cardPara.appendChild(programingImg);
    cardBody.appendChild(cardPara);
    for(let i=1;i<4;i++){
        const anchorLink =document.createElement("a");
        anchorLink.href=array[i].url;
        anchorLink.classList.add("btn");
        anchorLink.classList.add("btnProg");
        anchorLink.classList.add("btn-primary");
        anchorLink.target='_blank'
        const btnInfo=document.createTextNode(array[i].name);
        anchorLink.appendChild(btnInfo);
        cardBody.appendChild(anchorLink);
    }
    if(backBtn!=null){
        refCard.appendChild(backBtn);
    }
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
    const spanDate=document.createElement('span');
    spanDate.classList.add("time_date");
    const today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    const dateText=document.createTextNode(time);
    spanDate.appendChild(dateText);
    sentMsg.appendChild(paraChat);
    sentMsg.appendChild(spanDate);
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
    const spanDate=document.createElement('span');
    spanDate.classList.add("time_date");
    const today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    const dateText=document.createTextNode(time);
    spanDate.appendChild(dateText);
    recivedWMsg.appendChild(paraChat);
    recivedWMsg.appendChild(spanDate);
    recivedMsg.appendChild(recivedWMsg);
    incomingMsg.appendChild(recivedMsg);
    return incomingMsg;

}

function botReply(message){
    const speech= new SpeechSynthesisUtterance();
    speech.text="Sorry i cannot understand, please try again.";

    // logic

    let text = (message.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and
    text = text.replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/what are /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/how can /g, "")
        .replace(/how to /g, "")
        .replace(/i need help with /g, "")
        .replace(/help me with /g, "")
        .replace(/help /g, "")
        .replace(/can you /g, "")
        .replace(/i am struggling with /g, "");


    if(compare(trigger, reply, text)){
        speech.text = compare(trigger, reply, text);
    } else {

        $('#exampleModalCenter').modal('show');
        speech.text = alternative[Math.floor(Math.random()*alternative.length)];
    }


    speech.volume=voicenabled;
    speech.pitch=1;
    speech.rate=1;
    window.speechSynthesis.speak(speech);
    let elem =document.querySelector('.msg_history');
    elem.appendChild(generateBotChat(speech.text));

}


recorder.onresult = (event) =>{
    cancelVoice.style.display="none";
    voice.style.display="block";
   const resultIndex=event.resultIndex;
   const  transcript =event.results[resultIndex][0].transcript;
   //console.log(event);
  // voice2Text.textContent=transcript;
    let elem =document.querySelector('.msg_history');
    elem.appendChild(generateChat(transcript));
    botReply(transcript)
};

text.addEventListener('click',()=>{
    let elem =document.querySelector('.msg_history');
    let inputField=document.getElementById("userInput");
    let transcript= inputField.value;
    if(transcript==""){
        toastr.error("Please type something");
    }else{
        elem.appendChild(generateChat(transcript));
        botReply(transcript);
        inputField.value="";
    }

});

chatInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let elem =document.querySelector('.msg_history');
        let inputField=document.getElementById("userInput");
        let transcript= inputField.value;
        elem.appendChild(generateChat(transcript));
        botReply(transcript);
        inputField.value="";
    }
});

voice.addEventListener('click',()=>{
    recorder.start();
    voice.style.display="none";
    cancelVoice.style.display="block";
});

cancelVoice.addEventListener('click',()=>{
    recorder.stop();
    cancelVoice.style.display="none";
    voice.style.display="block";

});

function genBackButton(page){
    const backBtn =document.createElement('a')
    backBtn.classList.add("btn");
    backBtn.classList.add("btn-info");
    backBtn.classList.add("backButton")
    const  backBtnTxt=document.createTextNode("Back");
    backBtn.appendChild(backBtnTxt);
    backBtn.addEventListener('click',()=>{
        clearHelp(helpDiv);
        helpDiv.appendChild(generateButton(page));
    })
    return backBtn;
}

enableVoice.addEventListener('click',()=>{
    enableVoice.style.display="none";
    muteVoice.style.display="block";
    voicenabled=0;

});

muteVoice.addEventListener('click',()=>{
    muteVoice.style.display="none";
    enableVoice.style.display="block";
    voicenabled=1;

});



