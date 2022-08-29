let button = document.getElementsByClassName("button");
let loadingText = document.getElementsByClassName("loading_text");
let completeText = document.getElementsByClassName("complete_text");
let complete = document.getElementsByClassName("complete");

function loading() {
    button[0].classList.remove("hover");
    button[0].classList.add("loading");
    loadingText[0].classList.add("appear");



    setTimeout(() => {
        loadingText[0].classList.remove("appear");
        button[0].style.opacity = 0;

        setTimeout(() => { 
            complete[0].classList.add("appear") 
            completeText[0].classList.add("appear")
        }, 700);


    }, 4100)

};



button[0].addEventListener("click", loading);