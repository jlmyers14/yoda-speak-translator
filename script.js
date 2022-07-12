//javascript for YodaSpeak API 
console.log("Hello world!")
let url = 'https://api.funtranslations.com/translate/yoda.json'

function getYodish(stringToConvert){
    let newUrl = `${url}?text=${stringToConvert}`
fetch(newUrl)
.then((data)=>data.json())
.then((data) => console.log(data))
}

const userTextBox = document.getElementsByClassName('new-yodish')
// userTextBox.addEventListener('click', function(e){
//     e.preventDefault()

//     let userInput = userTextBox.value
//     console.log(userInput)
// })

console.log(userTextBox)
// console.log(userInput)





// console.log(getYodish(userInput))
