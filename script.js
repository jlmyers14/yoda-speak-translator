//javascript for YodaSpeak API 
console.log("Hello world!")

const placeholderUserInput = document.querySelector('#userInput') //this is the value of the form text box I think
let url = 'https://api.funtranslations.com/translate/yoda.json'


function getYodaData(userInput){
    let userInput = "Something has been put here"
    let newUrl = `${url}?text=${userInput}`
fetch(newUrl)
.then((data)=>data.json())
.then((data) => {console.log(data)})
}

// console.log(getYodaData(userInput))
