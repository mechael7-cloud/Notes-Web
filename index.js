let notes = []
let editNote = null

const buttonAdd = document.getElementById("add-button");
const cards = document.getElementById("cards")
const headerPage = document.getElementById("header");
const removeNote = document.getElementById("remove-note");
const inputJudul = document.getElementById("inputJudul");
const inputContent = document.getElementById("inputContent");
const buttonSave = document.getElementById("save-button");


function keepNotes(e) {
    event.preventDefault()

    let keepJudul = inputJudul.value.trim();
    let keepContent = inputContent.value.trim();

    if (editNote) {
        const keepNote = notes.findIndex(note => note.id == editNote)
        notes[keepNote] = {
        ...notes[keepNote],
            keepJudul: keepJudul,
            keepContent: keepContent,
        }
    } else {
        notes.unshift({
            id: generateId(),
            Judul: keepJudul,
            Content: keepContent
        })
    }

     saveNote();
}


function loadingNotes () {
    const simNotes = localStorage.getItem("saveItem");
    return simNotes ? JSON.parse(simNotes) : []
}

function writeNotes () {

    const noteContainer = document.getElementById("main-container")

    if(noteContainer.length === 0) {
        noteContainer.innerHTML = ` <div class="kelas">
            <h2>Add Notes</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, earum!</h3>
            <button onclick="addButton()">+</button>
        </div>`
        return
    }
    
    noteContainer.innerHTML = notes.map(note =>`<h2>${note.keepJudul}</h2>
            <h3>${note.keepContent}</h3>
            <button onclick="addButton()">+</button>
        </div>`).join('')


}


function generateId() {
    return Date.now().toString()
}

function saveNote() {
    localStorage.setItem("saveItem", JSON.stringify(notes));

}

function savedNotes () {
    buttonSave.addEventListener("click", (e) => {
        e.preventDefault();
        keepNotes();
       
    })
}



function addButton() {
    buttonAdd.addEventListener("click", function () {
        cards.classList.toggle("show");
        headerPage.classList.toggle("tampil")
    });
};
function removeNotes() {
    removeNote.addEventListener("click", () => {

        cards.classList.remove("show")
        headerPage.classList.remove("tampil")
    })
}

function closeOut() {
    document.addEventListener("click", (e) => {
        if (!cards.contains(e.target) && e.target != buttonAdd) {
            cards.classList.remove("show");
            headerPage.classList.remove("tampil")
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    notes = loadingNotes();    
    addButton();
    removeNotes();
    closeOut();
    writeNotes();

   saveNote();
})
