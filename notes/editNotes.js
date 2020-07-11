//first task get the notes from local storage

let notes = getNotes()

//populate the textArea and text with the value from notes
//to get the id passed from index.html

const noteId = location.hash.substring(1)

//get the individual note
let note = notes.find(note => note.id === noteId)

//if notes not found redirect to index.html
if (note === undefined) {
    location.assign("index.html")
}

//else populate the text and text area
const txtEl = document.querySelector('#editTxt')
const textareEl = document.querySelector('#editNotesTxtArea')
const spanEl = document.querySelector('#lastEdited')

txtEl.value = note.text
textareEl.value = note.textArea
const createdDate = note.createdAt
const modifiedDate = note.updatedAt

if (createdDate !== modifiedDate) {
    spanEl.textContent = latestModifiedTime(modifiedDate)
}

//when a user clicks on back button he should be redirected to index.html page
document.querySelector('#backButton').addEventListener('click', () => {
    location.assign('index.html')
})

//when a user clicks on delete button, the note will be deleted and he should be redirected to index.html page
document.querySelector('#deleteButton').addEventListener('click', () => {
    deleteNote(noteId)
    location.assign('index.html')
})

//modify the text area and save to local storage
textareEl.addEventListener('input', e => {
    const text = e.target.value
    const modifiedAt = moment().valueOf()
    note.textArea = text
    note.updatedAt = modifiedAt

    saveNotes(notes)
    //add the time to div when the last modification was done
    spanEl.textContent = latestModifiedTime(note.modifiedAt)
})

//to reflect changes to a window when opened in more than 1 widow

window.addEventListener('storage', e => {

    console.log('arun'+ e.newValue)
    if (e.key == 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(note => note.id === noteId)

        if (note === undefined) {
            location.assign("index.html")
        }

        textareEl.value = note.textArea
        spanEl.textContent = latestModifiedTime(note.updatedAt)
    }
})

