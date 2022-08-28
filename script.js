let button = document.getElementsByClassName("button");
let loadingText = document.getElementsByClassName("loading_text");

function loading() {
    button[0].classList.remove("hover");
    button[0].classList.add("loading");
    loadingText[0].classList.add("loading_text_appear");
    


    setTimeout(() => {
        loadingText[0].textContent = "Complete"
    }, 4100)

};



button[0].addEventListener("click", loading);