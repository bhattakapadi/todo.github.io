var button= document.getElementById("enter");
var clearListButton = document.getElementById("clearlist");
var input = document.getElementById("userinput");

const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
const deleteButton =  document.getElementsByTagName("i");




function strikeThrough(e) {
    console.log("event.target.tagName: " + e.target.tagName );
    if(e.target.tagName === "LI"){
        e.target.classList.add("li-done-wrapper");
    }
}



function createDeleteButtonIcon() {
   console.log(document.createElement("i"));
   console.log("li.length: " + li.length);
    for(var index = 0; index < li.length; index++){
        var createDeleteIcon = document.createElement("i");
        var createDiv = document.getElementsByClassName("div");
        // console.log(createDiv);
        createDeleteIcon.classList.add("fa","fa-trash");
        console.log(createDiv);
        createDiv[index].appendChild(createDeleteIcon);
    }
}




function createListElement(){
    /* creating div element which will inherit the li element*/
    var divClassWapper = document.createElement("div");
    divClassWapper.classList.add("wrapper");
    console.log("step1 completed");

    /* creating li element*/
    var li = document.createElement("li");
    li.classList.add("li-wrapper"); /*assigning attribute to the created li object*/
    /* crating onother element that will be inserted to div(wrapper)*/
    var createDiv = document.createElement("div");

    li.appendChild(document.createTextNode(input.value));
    divClassWapper.appendChild(li);
    divClassWapper.appendChild(createDiv);
    ul.appendChild(divClassWapper);

    input.value = "";
    createDiv.classList.add("div");
    var createDeleteButton= document.createElement("i");
    createDeleteButton.classList.add("fa","fa-trash");
    createDiv.appendChild(createDeleteButton);
    deleteParentNodeOnClick();
}

function deleteNodeOnClick(e) {
    var trash = document.querySelectorAll("i");
    for (var ind = 0; ind < trash.length; ind++) {
        console.log(e);
        this.parentNode.parentNode.remove();
    }
}

function deleteParentNodeOnClick() {
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteNodeOnClick);
    }
}

function addToList(){
   
    if(input.value.length > 0){
        console.log("going to create list");
        createListElement();
    } 
}

function clearList() {
    ul.innerHTML = "";
}

function addTolistAfterEnter(event) {
      if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

clearListButton.addEventListener("click", clearList);
button.addEventListener("click",addToList);
input.addEventListener("keypress",addTolistAfterEnter);

ul.addEventListener("click", strikeThrough);


clearListButton.addEventListener("click", clearList);
createDeleteButtonIcon();
deleteParentNodeOnClick();



