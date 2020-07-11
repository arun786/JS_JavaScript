const notes = getNotes()

document.querySelector('#addNotesFrm').addEventListener('submit', e => {
    e.preventDefault()
    const textValue = e.target.elements.addNotesTxt.value
    const id = uuidv4()
    const now = moment().valueOf()
    notes.push({
        id: id,
        text : textValue,
        createdAt: now,
        updatedAt: now,
        textArea : textValue
    })
    saveNotes(notes)
    renderNotes(notes)
})

renderNotes(notes)