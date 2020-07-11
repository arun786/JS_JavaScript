let notes = getNotes()

const filter = {
    searchText: '',
    sortBy: 'byEdited'
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
    renderNotes(notes, filter)
})

renderNotes(notes, filter)


document.querySelector('#filterTxt').addEventListener('input', e => {
    const enteredFilter = e.target.value
    console.log(enteredFilter)
    filter.searchText = enteredFilter
    renderNotes(notes, filter)
})

document.querySelector('#filter-by').addEventListener('change', e => {
    const selection = e.target.value
    console.log(selection)
    filter.sortBy = selection
    renderNotes(notes,filter)
})

//changes in the a window can be reflected in more than 1 window

window.addEventListener('storage', e=>{
    console.log('inside notes')
    if(e.key == 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filter)
    }
})