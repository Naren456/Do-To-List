let InputBox = document.querySelector("#input-box");
let taskArea = document.querySelector("#list-container");
let addbtn = document.querySelector(".Add-btn");




function saveTasks(){
    tasklist= []

}

addbtn.addEventListener("click", () => {
  let taskname = InputBox.value;
  console.log(taskname);
  if (taskname == "") {
    alert("Enter Task");
  } else {
    let listitem = document.createElement("li");
    listitem.innerText = taskname;
    listitem.draggable = true;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listitem.appendChild(span);
    taskArea.appendChild(listitem);
    InputBox.value = "";
  }
});

taskArea.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});

// taskArea.addEventListener('dragstart',(e)=>{
//     if(e.target.tagName==='LI'){
//      e.target.classList.add('dragging')
//     }

// })


// taskArea.addEventListener('dragend',()=>{
//     if(e.target.tagName==='LI'){
//         e.target.classList.remove('dragging')
//     }
// })


