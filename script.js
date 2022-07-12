var API_KEY = config.API_KEY

//global declarations
let url = 'https://api.funtranslations.com/translate/yoda.json'
let yodishObject = {}
const userTranslateButton = document.getElementById('user-input')
const userTextBox = document.getElementById('new-yodish-string')
const newYodishStringOutput = document.getElementById('output')

//function to apply a string to the yodish api
function getYodish(stringToConvert){
    let newUrl = `${url}?text=${stringToConvert}`
    
    const configPolicy = {
        method: "GET",
        headers: {
          "X-FunTranslations-Api-Secret": API_KEY
        }
      }

    fetch(newUrl, configPolicy)
    .then((data) => data.json())
    .then((data) => yodishObject = data)
}

//eventlistener that runs the getYodish function with a user provided string to return conversion
userTranslateButton.addEventListener('click', function takeUserInput(e){
    e.preventDefault();
    
    let userInput = userTextBox.value
    getYodish(userInput)
    const yodishString = yodishObject.contents.translated
    console.log(yodishString)

    //appends
    const stringToOutput = document.createElement('p')
    stringToOutput.textContent = yodishString
    newYodishStringOutput.append(stringToOutput)
})

// function renderNewYodish(){
//     const stringToOutput = document.createElement('p')
//     stringToOutput.textContent = "this string needs to be yodish" //replace with relevant data once we can. Optimally this data is the translated yodish returned by our API
//     stringToOutput.setAttribute('id', 'string-output')
//     newYodishStringOutput.append(stringToOutput)
// }



