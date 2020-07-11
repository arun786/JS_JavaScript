const notes = getNotes()

const filter = {
    searchText: ''
}

const textNotes = document.querySelector('#filterNotesTxt')

document.querySelector('#addNotesFrm').addEventListener('submit', e => {
    e.preventDefault()
    const textValue = e.target.elements.addNotesTxt.value
    const id = uuidv4()
    const now = moment().valueOf()
    notes.push({
        id: id,
        text: textValue,
        createdAt: now,
        updatedAt: now,
        textArea: textValue
    })
    saveNotes(notes)
    renderNotes(notes,filter)
})

renderNotes(notes,filter)


document.querySelector('#filterTxt').addEventListener('input', e =>{
    const enteredFilter = e.target.value
    console.log(enteredFilter)
    filter.searchText = enteredFilter
    renderNotes(notes,filter)
})