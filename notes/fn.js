const divElement = document.querySelector('#addNotesDiv')

const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const getNotes = function () {
    const notes = localStorage.getItem('notes')
    if (notes !== null) {
        return notes
    } else {
        return []
    }
}

const renderNotes = function (notes) {
    if (divElement !== null) {
        divElement.innerHTML = ''
    }

    notes.forEach(note => {
        const dom = generateDomWithXButtonAndWithEventListener(note)
        if (divElement != null) {
            divElement.appendChild(dom)
        }
    })
}

/**
 * if you want to add a particular item in a paragraph
 * @param {a specific note which you want to display} note 
 */
const generateDom = function (note) {
    const para = document.createElement('p')
    para.textContent = note.note
    return para
}

/**
 * if you want to add a button(x) with text next to it
 * @param {a specific note with a button before it} note 
 */
const generateDomWithXButton = function (note) {
    const innerDivElement = document.createElement('div')

    const innerButtonElement = document.createElement('button')
    innerButtonElement.innerText = 'x'
    innerDivElement.appendChild(innerButtonElement)

    const innerSpanElement = document.createElement('span')
    innerSpanElement.innerText = note.note
    innerDivElement.appendChild(innerSpanElement)
    return innerDivElement
}

/**
 * 
 * @param {add an event listener to the button} note 
 */
const generateDomWithXButtonAndWithEventListener = function (note) {
    //create a div element 
    const innerDivElement = document.createElement('div')

    //create a button element
    const buttonElement = document.createElement('button')
    buttonElement.innerText = 'x'
    innerDivElement.appendChild(buttonElement)

    buttonElement.addEventListener('click', () => {
        //delete the element
        deleteNote(note.id)
    })

    //add a span element 
    const innerSpanElement = document.createElement('span')
    innerSpanElement.innerText = note.note
    innerDivElement.appendChild(innerSpanElement)
    return innerDivElement
}

const deleteNote = function (id) {
    const index = notes.findIndex(note => note.id === id)
    notes.splice(index, 1)
    saveNotes(notes)
    renderNotes(notes)
}