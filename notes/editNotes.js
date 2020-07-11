//first task get the notes from local storage

const notes = getNotes()

//populate the textArea and text with the value from notes
//to get the id passed from index.html

const noteId = location.hash.substring(1)

//get the individual note
const note = notes.find(note => note.id === noteId)

//if notes not found redirect to index.html
if (note === undefined) {
    location.assign("index.html")
}

//else populate the text and text area
const txtEl = document.querySelector('#editTxt')
const textareEl = document.querySelector('#editNotesTxtArea')

txtEl.value = note.text
textareEl.value = note.textArea

//when a user clicks on back button he should be redirected to index.html page
document.querySelector('#backButton').addEventListener('click', () => {
    location.assign('index.html')
})

//when a user clicks on delete button, the note will be deleted and he should be redirected to index.html page
document.querySelector('#deleteButton').addEventListener('click', () => {
    deleteNote(noteId)
    location.assign('index.html')
})