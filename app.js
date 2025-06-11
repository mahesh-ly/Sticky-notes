const container = document.querySelector(".container");

const heading = document.createElement("h1");
heading.innerText = "Sticky Notes";

container.appendChild(heading);

//from branch feature2

/* add input field and add button */

const main = document.createElement("div");
main.classList.add("main");

container.appendChild(main);

const inputContainer = document.createElement("div");
inputContainer.classList.add("input-container");

main.appendChild(inputContainer);

const inputField = document.createElement("textarea");
inputField.placeholder = "Type a new note...";

inputContainer.appendChild(inputField);

const addBtn = document.createElement("button");
addBtn.innerText = "+";

inputContainer.appendChild(addBtn);

//Add Sticky notes we are using here localstorage for shake of simplycity one can use Api's for storing notes as per interest.

//create a grid to show the sticky notes

const notesContainer = document.createElement("div");
notesContainer.classList.add("notes-container");

main.appendChild(notesContainer);

const colors = [
    "#FFEB3B", // Yellow
    "#FFC107", // Amber
    "#FF5722", // Deep Orange
    "#4CAF50", // Green
    "#2196F3", // Blue
    "#9C27B0", // Purple
    "#E91E63", // Pink
    "#00BCD4", // Cyan
    "#8BC34A", // Light Green
    "#F44336", // Red
    "#FF9800", // Orange
    "#3F51B5"  // Indigo
  ];
  

const addStickyNotes = (notesContent) =>{
    const newNote = document.createElement("div");
    newNote.classList.add("sticky-note");
    
    notesContainer.appendChild(newNote);

    //generate random number to pick the color from colors

    const index = Math.floor(Math.random()*12);
    newNote.style.backgroundColor = colors[index];

    const notesTitle = document.createElement("p");
    notesTitle.innerText = `${notesContent}`;
    
    newNote.appendChild(notesTitle);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    newNote.appendChild(deleteBtn);

    deleteBtn.addEventListener("click",()=>{
        notesContainer.removeChild(newNote);
    });
}


addBtn.addEventListener("click", ()=>{
    const notesContent = inputField.value;
    if(notesContent.length >10)addStickyNotes(notesContent);
    else alert("notes content should contain more than 10 alphabet.");

    inputField.value = "";
});
