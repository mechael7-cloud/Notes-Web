let notes = []
let editNote = null

const buttonAdd = document.getElementById("add-button");
const cards = document.getElementById("cards")
const headerPage = document.getElementById("header");
const removeNote = document.getElementById("remove-note");
const inputJudul = document.getElementById("inputJudul");
const inputContent = document.getElementById("inputContent");
const buttonSave = document.getElementById("save-button");
const noteContainer = document.getElementById("main-container")


buttonSave.addEventListener("click", () => {
    cards.classList.remove("show");
    headerPage.classList.remove("tampil")
})

buttonAdd.addEventListener("click", function () {
    cards.classList.toggle("show");
    headerPage.classList.toggle("tampil");
    noteContainer.classList.toggle("lihat");
});

removeNote.addEventListener("click", () => {

    cards.classList.remove("show")
    headerPage.classList.remove("tampil")
})

function closeOut() {
    document.addEventListener("click", (e) => {
        if (!cards.contains(e.target) && e.target != buttonAdd) {
            cards.classList.remove("show");
            headerPage.classList.remove("tampil")
        }
    })
}

function keepNotes() {
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
            id: Date.now().toString(),
            Judul: keepJudul,
            Content: keepContent
        })
    }

    saveNote();
}


function loadingNotes() {
    const simNotes = localStorage.getItem("saveItem");
    return simNotes ? JSON.parse(simNotes) : []
}

function writeNotes() {


    if (notes.length === 0) {
        noteContainer.innerHTML = ` <div class="kelas">
            <h2>Add Notes</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, earum!</h3>
            <button onclick="addButton()">+</button>
        </div>`
        return
    } else {
        noteContainer.innerHTML = notes.map(note => `
         <div class="kelas-1">
         <div class="kelas-2">
        <h2>${note.Judul}</h2>
        <div class="kelas-3">
          <button onclick="addButton()">X</button>
            <button onclick="addButton()"><i class ="fas fa-pen"></i></button>
            </div>
            </div>
            <h3>${note.Content}</h3>

        </div>
        </div>`).join('');
    }
}


function saveNote() {
    localStorage.setItem("saveItem", JSON.stringify(notes));

}

function savedNotes() {
    buttonSave.addEventListener("click", (e) => {
        e.preventDefault();
        keepNotes();

    })
}

document.addEventListener("DOMContentLoaded", () => {
    notes = loadingNotes();
    closeOut();
    writeNotes();
    saveNote();
})
