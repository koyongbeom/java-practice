const text_CN = document.querySelector(".text")
const form_CN = document.querySelector(".form")
const showing_CN = "showing"
const input = document.querySelector(".input-js")



function submitManager(event){
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem("userName", currentValue);
    greetings();    
}


function greetings(){
    const userName = localStorage.getItem("userName")
    if(userName===null)
    {
        form_CN.classList.add(showing_CN);
        form_CN.addEventListener("submit", submitManager)
        
    }
    else
    {
        text_CN.classList.add(showing_CN);
        form_CN.classList.remove(showing_CN);
        text_CN.innerText= `Hello ${userName}`;
    }

}

function init(){
    greetings();
}



init();