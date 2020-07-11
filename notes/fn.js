const divElement = document.querySelector('#addNotesDiv')


const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const getNotes = function () {
    const notes = localStorage.getItem('notes')
    if (notes !== null) {
        return JSON.parse(notes)
    } else {
        return []
    }
}

//sort notes by one of the three ways
const sortNotes = function (notes, sortBy) {

    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    }
    else {
        return notes.sort((a, b) => {
            if (a.text.toLowerCase() > b.text.toLowerCase()) {
                return 1
            } else if (a.text.toLowerCase() < b.text.toLowerCase()) {
                return -1
            } else {
                return 0
            }
        })
    }
}
const renderNotes = function (notes, filters) {
    if (filters !== undefined) {
        notes = sortNotes(notes, filters.sortBy)
        notes = notes.filter(note => {
            return note.text.toLowerCase().includes(filters.searchText.toLowerCase())
        })
    }

    if (divElement !== null) {
        divElement.innerHTML = ''
    }

    notes.forEach(note => {
        const dom = generateDomWithXElementAndLinkToNextPage(note)
        if (divElement !== null) {
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
    para.textContent = note.text
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

/**
 * 
 * @param {add an event listener to button and link to next page} note 
 */
const generateDomWithXElementAndLinkToNextPage = function (note) {
    //create a div element
    const divEl = document.createElement('div')

    const buttonEl = document.createElement('button')
    buttonEl.innerText = 'x'

    divEl.appendChild(buttonEl)

    buttonEl.addEventListener('click', () => {
        deleteNote(note.id)
    })

    //add an anchor
    const anchorEl = document.createElement('a')
    anchorEl.textContent = note.text
    anchorEl.setAttribute('href', `edit.html#${note.id}`)

    divEl.appendChild(anchorEl)

    return divEl
}

/**
 * 
 * @param {deletes a note} id 
 */
const deleteNote = function (id) {
    const index = notes.findIndex(note => note.id === id)
    notes.splice(index, 1)
    saveNotes(notes)
    renderNotes(notes, undefined)
}

/**
 * 
 * @param {get the time from the timestamp passed} timestamp 
 */
const latestModifiedTime = function (timestamp) {
    return `last modified ${moment(timestamp).fromNow()}`
}
