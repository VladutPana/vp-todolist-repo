const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
    alert('You must type something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value; // sets the list in HTML to the current input value given
        listContainer.appendChild(li);  // adding an element(child) to the already existent parent "list container"

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // close icon
        li.appendChild(span); // adding an element(child) to the already existent parent "list container"
    }
    inputBox.value = ''; // clearing the input value after every use
    saveData(); // save local data
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){ // if a list element is clicked, its marked as checked
        e.target.classList.toggle("checked"); 
        saveData() // save local data
        }
    else if(e.target.tagName === 'SPAN'){ //if a span element is clicked, it is removed
        e.target.parentElement.remove();
        saveData() // save local data
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); 
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem("data"); // get the data everytime browser opens
}

displayData();