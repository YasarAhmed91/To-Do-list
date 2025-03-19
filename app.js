// const inputBox = document.querySelector("#input-box");
const inputBox = document.getElementById("input-box");
// const listCont = document.querySelector("#list-container");
const listCont = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listCont.addEventListener("click",(evt)=>{
    if(evt.target.tagName === "LI"){
        evt.target.classList.toggle("checked");
        saveData();
    }
    else if(evt.target.tagName === "SPAN"){
        evt.target.parentElement.remove();
    }
},false);

function saveData(){
    localStorage.setItem("data",listCont.innerHTML);
}
function showTask(){
    listCont.innerHTML =localStorage.getItem("data");
}
showTask();