let myAge = 27
let message


if (myAge >= 18) {
    message = 'you can vote'
} else {
    message = 'you cannot vote'
}
console.log(message)

//ternary operator
myAge = 5

message = myAge >= 18 ? 'You can vote' : 'You cannot vote'

console.log(message)


const showPage = () => {
    return 'Showing the page'
}

const showErrorPage = () => {
    return 'Showing the error page'
}

const newMessage = myAge >= 10 ? showPage() : showErrorPage()
console.log(newMessage)


const team = ['Tyler', 'Porter']

const teamSize = team.length < 4 ? team.length : 'Too many people in the team'
console.log(teamSize) 