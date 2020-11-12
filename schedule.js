const schedule_form = document.querySelector(".schedule_form")
const schedule_input = document.querySelector(".schedule_input")
const schedule_ul = document.querySelector(".schedule_ul")




function schedule_write(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    const span = document.createElement("span");
    delBtn.innerText="del";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    schedule_ul.appendChild(li);

}


function send_submit(event){
    event.preventDefault();
    localStorage.setItem("currentValue_ls", schedule_input.value);
    currentValue = localStorage.getItem("currentValue_ls");
    schedule_write(currentValue);
    schedule_input.value="";
}


function form_manager() {
    schedule_form.addEventListener("submit", send_submit);
}


function init() {
    form_manager()
}

init()

