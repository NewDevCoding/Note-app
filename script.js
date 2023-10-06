const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click" , ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("i");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.className = "fa-solid fa-trash-can icon";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagNmae === "IMG"){
        e.target.parentElement.remove();
        updateStorage();

    }
    else if (e.target.tagname === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
   }
})