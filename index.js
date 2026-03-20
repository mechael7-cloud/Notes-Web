let notes = []

const buttonAdd = document.getElementById("add-button");
const cards = document.getElementById("cards")
const headerPage = document.getElementById("header");
const inputJudul = document.getElementById("inputJudul");
const removeNote = document.getElementById("remove-note");


function addButton() {
    buttonAdd.addEventListener("click", function () {
    if (buttonAdd.click) {
        cards.classList.toggle("show");
        headerPage.classList.toggle("tampil")
    }  
    });
};
function removeNotes () {
    removeNote.addEventListener("click",() => {
        if (removeNote.click) {
            cards.classList.remove("show")
            headerPage.classList.remove("tampil")
        } 
    })
}

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", () => {
        if (document.click) {
            document.removeNotes();
        }
    })    
})
