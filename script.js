'use strict'
const questionTexts = document.getElementsByClassName("main-texts");
const hiddenTexts = document.getElementsByClassName("hidden-texts");
const arrows = document.getElementsByClassName("arrow");
let before ;

for(let i = 0; i<questionTexts.length; i++){
    questionTexts[i].addEventListener('click',(event)=>{
        
        if(event.target.getAttribute("index")==="false"){
            for(let i = 0; i<hiddenTexts.length; i++){
                hiddenTexts[i].style.display ='none'
            }
            for(let i = 0; i<questionTexts.length; i++){
            questionTexts[i].style.color = "#4B4C5F";
            questionTexts[i].style.fontWeight = "400";
            questionTexts[i].childNodes[1].classList.remove('arrowRotate');
            questionTexts[i].removeAttribute('index');
            questionTexts[i].setAttribute('index','false')
            }
            before = event.target.nextElementSibling;
            event.target.removeAttribute('index')
            event.target.setAttribute('index','true')
            event.target.style.color = "#1E1F36"
            event.target.style.fontWeight = "700";
            event.target.childNodes[1].classList.toggle('arrowRotate');
            event.target.nextElementSibling.style.display ='block';
            setTimeout(()=>{
            event.target.nextElementSibling.classList.add('text-hider');
            },100)
        }else{
            event.target.removeAttribute('index')
            event.target.setAttribute('index','false')
            event.target.style.color = "#4B4C5F";
            event.target.style.fontWeight = "400";
            event.target.childNodes[1].classList.toggle('arrowRotate');
            event.target.nextElementSibling.classList.remove('text-hider');
            event.target.nextElementSibling.style.display ='none';
        }
        console.log(before)
        before.classList.remove('text-hider');
        
    })
}
