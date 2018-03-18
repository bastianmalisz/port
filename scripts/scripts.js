function onLoad(){
    const menuPopup = document.querySelector(".menuPopup")
    menuPopup.classList.add("displayNone");
}
onLoad();
document.querySelector(".welcome--arrow").addEventListener("click",function(){
    location.href = "#o-mnie";
})
function showMenu(){
    
    const menuPopup = document.querySelector(".menuPopup");
    menuPopup.classList.remove("displayNone");
    document.querySelector(".darkLayer").classList.remove("displayNone");
    
    document.querySelector(".menuPopup__btnExit").addEventListener("click",closeMenu);
    const linki = [];
    for(let i =0;i< document.querySelectorAll(".menuPopup--link").length;i++){
        linki[i] = document.querySelectorAll(".menuPopup--link")[i];
        linki[i].addEventListener("click",closeMenu);
    }
}
function closeMenu(){
    const menuPopup = document.querySelector(".menuPopup");
    menuPopup.classList.add("displayNone");
    document.querySelector(".darkLayer").classList.add("displayNone");
}

const button = document.querySelector(".welcome__menubtn");
const line = [];
for(let i= 0; i<document.querySelectorAll(".line").length;i++){
line[i] = document.querySelectorAll(".line")[i];
}
button.addEventListener("click",e=>{

for(let i =0;i<e.target.children.length;i++){
    e.target.children[i].classList.toggle("open"+[i])
}
showMenu();
})
document.addEventListener("scroll",function(){
let wScroll = window.scrollY;
if(wScroll+50 <= document.querySelector(".aboutMe").offsetTop){
    for(let i = 0;i<line.length;i++){
        line[i].classList.remove("backgroundBlue");
        line[i].classList.add("backgroundWhite");
    }
}else{
for(let i = 0;i<line.length;i++){
    line[i].classList.remove("backgroundWhite");
        line[i].classList.add("backgroundBlue");
    }
}
})

const hireBtns = [];
for(let i =0;i<document.querySelectorAll(".btnHire").length;i++){
 document.querySelectorAll(".btnHire")[i].addEventListener("click",showHire);
}
function showHire(){
document.querySelector(".hirePopup").classList.remove("displayNone");
document.querySelector(".hirePopup__btnExit").addEventListener("click",closeHire);
document.querySelector(".darkLayer").classList.remove("displayNone");

}
function closeHire(){
document.querySelector(".hirePopup").classList.add("displayNone");
document.querySelector(".darkLayer").classList.add("displayNone");
}

const projects = [];
for(let i =0;i<document.querySelectorAll(".projects__box").length;i++){
    document.querySelectorAll(".projects__box")[i].addEventListener("click",e=>{
        showProjectBox(e);
    });
}

function showProjectBox(e){
document.querySelector(".projectPopup").classList.remove("displayNone");
document.querySelector(".projectPopup__btnExit").addEventListener("click",closeProjectBox);
document.querySelector(".darkLayer").classList.remove("displayNone");



// Umieszczam tyle tagow ile ma dany element ustawionych w atrybucie data
    for(let i =1;i<=parseInt( e.target.dataset.tagscount);i++){
        const CreateDiv = document.createElement("div");
        document.querySelector(".projectPopup__header").appendChild(CreateDiv);
        CreateDiv.classList.add("projectPopup__header--tags");
    }

// tworze obiekty z informacjami
const pogoda = {
    githubURL:"https://github.com/bastianmalisz/pogoda",
    liveURL:"https://bastianmalisz.github.io/pogoda/pogoda.html",
    imageURL:"./images/pogodaimg.PNG",
    iconURL: "./images/cloud.png", 
    title: "Aplikacja pogoda",
    tags: ["JS","ES6","speechApi","ajax","jQuery"],
    };
const kalendarz = {
    githubURL: "https://github.com/bastianmalisz/kal2",
    liveURL: "https://bastianmalisz.github.io/kal2/kalendarz.html",
    imageURL:"./images/calendarimg.PNG",
    iconURL: "./images/calendar.png", 
    title: "Aplikacja kalendarz",
    tags: ["JS","ES6","jQuery"],
    };
const textEditor = {
    githubURL: "https://github.com/bastianmalisz/text-editor",
    liveURL:"https://bastianmalisz.github.io/text-editor/editor.html",
    imageURL:"./images/editorimg.png",
    iconURL: "./images/text-file-editor.png",
    title: "Aplikacja edytor",
    tags: ["JS","ES6"],
    };
const musicPlayer = {
    githubURL:"https://github.com/bastianmalisz/mp3",
    liveURL:"https://bastianmalisz.github.io/mp3/mp3.html",
    imageURL:"./images/muzykaimg.PNG",
    iconURL: "./images/music-player.png",
    title: "Aplikacja music player",
    tags: ["JS","Web Audio API", "canvas"],
    };
const webFryzjer = {
    liveURL:"http://kasia-salon.prv.pl",
    githubURL:"http://kasia-salon.prv.pl",
    imageURL:"./images/kasia-salon.png",
    iconURL: "./images/computer-screen.png",
    title: "Witryna fryzjerska",
    tags: ["Bootstrap","JS","RWD"],
    };
const webFundacja = {
    githubURL:"http://maliwojownicy.org",
    liveURL:"http://maliwojownicy.org",
    imageURL:"./images/maliwojownicy.png",
    iconURL: "./images/computer-screen2.png",
    title: "Witryna fundacji",
    tags: ["Wordpress"],
    };
// Ustawiam zmienne przetrzymujące elementy DOM iezbędne do manipulacji
const projIcon = document.querySelector(".projectPopup__header--icon");
const projTitle = document.querySelector(".projectPopup__header--title");
const projTag = document.querySelectorAll(".projectPopup__header--tags");
const projLive = document.querySelector(".live-link");
const projGithub = document.querySelector(".gh-link");
const projTags = [];
for(let i =0;i< projTag.length;i++){
    projTags[i] = projTag[i];
}
const projImg = document.querySelector(".projectPopup__content--image");

// switch, który ustawi informacje zgodnie z warunkiem już w elemencie DOM
switch(e.target.dataset.project) {
    case "weatherApp":

        projIcon.style.backgroundImage = "url("+pogoda.iconURL+")"; 
        projTitle.innerHTML = pogoda.title;
        for(i = 0;i<projTags.length;i++){
            projTags[i].innerHTML=pogoda.tags[i];
        }
        projImg.src = pogoda.imageURL;
        projLive.href=pogoda.liveURL;
        projGithub.href=pogoda.githubURL;
        break;

    case "calendarApp":
        projIcon.style.backgroundImage = "url("+kalendarz.iconURL+")"; 
        projTitle.innerHTML = kalendarz.title;
        for(i = 0;i<projTags.length;i++){
            projTags[i].innerHTML=kalendarz.tags[i];
            }
        projImg.src = kalendarz.imageURL;
        projLive.href=kalendarz.liveURL;
        projGithub.href=kalendarz.githubURL;
        break;

    case "textEditor":
        projIcon.style.backgroundImage = "url("+textEditor.iconURL+")"; 
        projTitle.innerHTML = textEditor.title;
        for(i = 0;i<projTags.length;i++){
            projTags[i].innerHTML=textEditor.tags[i];
            }
        projImg.src = textEditor.imageURL;
        projLive.href=textEditor.liveURL;
        projGithub.href=textEditor.githubURL;
        break;

    case "musicPlayer":
        projIcon.style.backgroundImage = "url("+musicPlayer.iconURL+")"; 
        projTitle.innerHTML = musicPlayer.title;
        for(i = 0;i<projTags.length;i++){
            projTags[i].innerHTML=musicPlayer.tags[i];
            }
        projImg.src = musicPlayer.imageURL;
        projLive.href=musicPlayer.liveURL;
        projGithub.href=musicPlayer.githubURL;
        break;

    case "fryzjerWeb":
        projIcon.style.backgroundImage = "url("+webFryzjer.iconURL+")"; 
        projTitle.innerHTML = webFryzjer.title;
        for(i = 0;i<projTags.length;i++){
            projTags[i].innerHTML=webFryzjer.tags[i];
            }
        projImg.src = webFryzjer.imageURL;
        projLive.href=webFryzjer.liveURL;
        projGithub.href=webFryzjer.githubURL;
        break;

    case "fundacjaWeb":
        projIcon.style.backgroundImage = "url("+webFundacja.iconURL+")"; 
        projTitle.innerHTML = webFundacja.title;
        for(i = 0;i<projTags.length;i++){
            projTags[i].innerHTML=webFundacja.tags[i];
            }
        projImg.src = webFundacja.imageURL;
        projLive.href=webFundacja.liveURL;
        projGithub.href=webFundacja.githubURL;
        break;
    default:
        return;
}
}

function closeProjectBox() {
document.querySelector(".projectPopup").classList.add("displayNone");
document.querySelector(".darkLayer").classList.add("displayNone");
$("div").remove(".projectPopup__header--tags");
}           