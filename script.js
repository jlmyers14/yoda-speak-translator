//javascript for YodaSpeak API 
let url = 'https://api.funtranslations.com/translate/yoda.json'

function getYodish(stringToConvert){
    let newUrl = `${url}?text=${stringToConvert}`
    fetch(newUrl)
    .then((data)=>data.json())
    .then((data) => console.log(data))
}

const userTranslateButton = document.getElementById('user-input')
const userTextBox = document.getElementById('new-yodish-string')



// userTranslateButton.addEventListener('click', function takeUserInput(e){
//     e.preventDefault();
    
//     let userInput = userTextBox.value
//     const yodishString = (getYodish(userInput))
//     console.log(yodishString.translated)
// })

