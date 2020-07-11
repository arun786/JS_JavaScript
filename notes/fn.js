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
        const dom = generateDomWithXButton(note)
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
 * if you want to add a button with text next to it
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