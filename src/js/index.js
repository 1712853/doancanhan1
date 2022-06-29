
function styleColor(element,color)
{
    element.style.color = color;
    element.style.opacity = "1";
}

function styleColorArr(element,color)
{
    for (let i=0;i<element.length;i++)
    {
        element[i].style.color = color;
        element[i].style.opacity = "1";
    }
}
function styleBgColor(element,bgColor)
{
    element.style.backgroundColor  = bgColor;
}
function styleBgColorArr(element,bgColor)
{
    for (let i=0;i<element.length;i++)
    {
        element[i].style.backgroundColor  = bgColor;
    }
}
function borderArr(element,val)
{
    for (let i=0;i<element.length;i++)
    {
        element[i].style.border  = val;
    }
}


function themeWhite()
{
    document.body.style.setProperty('--main-color-1', '#fb4386'); 
    let about = document.getElementById("about");
    styleBgColor(about,"#fb4386");
    let services = document.getElementById("services");
    styleBgColor(services,"white");
    let news = document.getElementById("news");
    styleBgColor(news,"white");
    let contact = document.getElementById("contact");
    styleBgColor(contact,"#282b34");
    let h1 = document.getElementsByTagName("h1");
    styleColorArr(h1,"#fff");
    let h2About = document.querySelectorAll("#about .container h2");
    styleColorArr(h2About,"white");
    let h3About = document.querySelectorAll("#about .container h3");
    styleColorArr(h3About,"white");
    let h3Services = document.querySelectorAll(".services__container h3");
    styleColorArr(h3Services,"#484d55");
    let h3News = document.querySelectorAll(".news__container h3");
    styleColorArr(h3News,"#484d55");
    let h3Contact = document.querySelectorAll(".contact__container_top h3");
    styleColorArr(h3Contact,"#fff");
 
    let pBanner = document.querySelectorAll(".header__banner p");
    styleColorArr(pBanner,"rgba(255, 255, 255, 0.5)");
    let pAbout = document.querySelectorAll("#about .container p");
    styleColorArr(pAbout,"rgba(255, 255, 255, 0.75)");
    let pServices = document.querySelectorAll(".services__container p");
    styleColorArr(pServices,"#b1b4b9");
    let pServices2 = document.querySelectorAll(".services__container_flexbox .item div p");
    styleColorArr(pServices2,"#777");
    let pNews = document.querySelectorAll(".news__container_flexbox .item p");
    styleColorArr(pNews,"rgb(119, 119, 119)");
    let pContact1 = document.querySelectorAll(".contact__container_top p");
    styleColorArr(pContact1,"#b1b4b9");
    let pContact2 = document.querySelectorAll(".contact__container_bottom .flexbox .item div p");
    styleColorArr(pContact2,"#bfbfbf");
    let pContact3 = document.querySelectorAll(".contact__container footer p");
    styleColorArr(pContact3,"#999");
    let aAbout = document.querySelectorAll("#about .container .about_button a");
    styleBgColor(aAbout[0],"black");


    let aServices = document.querySelectorAll(".services__container_button a");
    styleColor(aServices[0],"white");
    styleBgColor(aServices[0],"#1f232b");
    aServices[0].addEventListener("mouseover",function(){aServices[0].style.color = "#9999a1"});
    aServices[0].addEventListener("mouseout",function(){aServices[0].style.color = "white"});
 
    styleColor(aServices[1],"#606167");
    aServices[1].addEventListener("mouseover",function(){aServices[1].style.color = "#9999a1"});
    aServices[1].addEventListener("mouseout",function(){aServices[1].style.color = "#606167"});

    
    let aContact = document.querySelectorAll(".contact__container_bottom .flexbox .item div a");
    styleColorArr(aContact,"#bfbfbf");

    let spanServices = document.querySelectorAll(".services__container_flexbox .item span");
    styleColorArr(spanServices,"white");
    styleBgColorArr(spanServices,"#2d3139");

   
}

function themeblack()
{
    document.body.style.setProperty('--main-color-1', 'rgba(254, 157, 38, 0.973)'); 
    let about = document.getElementById("about");
    styleBgColor(about,"black");
    let services = document.getElementById("services");
    styleBgColor(services,"#1c1c20");
    let news = document.getElementById("news");
    styleBgColor(news,"#1c1c20");
    let contact = document.getElementById("contact");
    styleBgColor(contact,"#111");
    let h1 = document.getElementsByTagName("h1");
    styleColorArr(h1,"#fe9b26");
    let h2About = document.querySelectorAll("#about .container h2");
    styleColorArr(h2About,"#fe9d26f8");
    let h3About = document.querySelectorAll("#about .container h3");
    styleColorArr(h3About,"#fe9d26f8");
    let h3Services = document.querySelectorAll(".services__container h3");
    styleColorArr(h3Services,"#fe9d26f8");
    let h3News = document.querySelectorAll(".news__container h3");
    styleColorArr(h3News,"#fe9d26f8");
    let h3Contact = document.querySelectorAll(".contact__container_top h3");
    styleColorArr(h3Contact,"#fe9d26f8");

    let pBanner = document.querySelectorAll(".header__banner p");
    styleColorArr(pBanner,"#fe9d26d7");
    let pAbout = document.querySelectorAll("#about .container p");
    styleColorArr(pAbout,"white");
    let pServices = document.querySelectorAll(".services__container p");
    styleColorArr(pServices,"white");

    let pNews = document.querySelectorAll(".news__container_flexbox .item p");
    styleColorArr(pNews,"rgba(255, 255, 255, 0.849)");
    let pContact = document.querySelectorAll(".contact p");
    styleColorArr(pContact,"white");
    let aAbout = document.querySelectorAll("#about .container .about_button a");
    styleBgColor(aAbout[0],"#fe9d26f1");


    let aServices = document.querySelectorAll(".services__container_button a");
    styleColor(aServices[0],"black");
    styleBgColor(aServices[0],"#d3753f");
    
    aServices[0].addEventListener("mouseover",function(){aServices[0].style.color = "white"});
    aServices[0].addEventListener("mouseout",function(){aServices[0].style.color = "black"});
  
    styleColor(aServices[1],"rgb(211, 117, 63)");
    aServices[1].addEventListener("mouseover",function(){aServices[1].style.color = "white"});
    aServices[1].addEventListener("mouseout",function(){aServices[1].style.color = "rgb(211, 117, 63)"});
    
    let aContact = document.querySelectorAll(".contact__container_bottom .flexbox .item div a");
    styleColorArr(aContact,"white");
  
    let spanServices = document.querySelectorAll(".services__container_flexbox .item span");
    styleColorArr(spanServices,"black");
    styleBgColorArr(spanServices,"rgba(255, 255, 255, 0.95)");

    
}
localStorage.setItem("mode","darkMode");
let mode = localStorage.getItem("mode");
let changeMode = document.getElementById("changeColor");
changeMode.className = mode;
if (changeMode.className === "normal") themeblack();
    else themeWhite();

changeMode.addEventListener("click",function()
{
    changeMode.classList.toggle("darkMode");
    changeMode.classList.toggle("normal");
    if (changeMode.className === "normal") themeblack();
    else themeWhite();
    localStorage.setItem("mode",changeMode.className);

})
