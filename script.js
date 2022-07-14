const {API_KEY} = config.API_KEY
// !GOALS FOR THE REMAINDER OF THE PROJECT!
//  Debug double click issue
//Look into scaling the website to different resolutions
//  Add css styling to the favorites and yodism history
//  Change box text to red when switching to the dark side
//  Change Master at top to Sith when switching to the dark side

//global declarations
let url = 'https://api.funtranslations.com/translate/yoda.json'
let yodishObject = {}
const userTranslateButton = document.getElementById('user-input')
const userTextBox = document.getElementById('new-yodish-string')
const newYodishStringOutput = document.getElementById('output')
const lightDarkButton = document.getElementById('light-dark')
const history = document.getElementById('yodism-history-nest')
const upvoteArray = []
let image1 = true;
document.body.style.color = '#2FF924';

//function to apply a string to the yodish api

function getYodish(stringToConvert){
  const configPolicy = {
    method: "GET",
    headers: {
      "X-FunTranslations-Api-Secret": API_KEY
    }
  }
  let newUrl = `${url}?text=${stringToConvert}`
  
  fetch(newUrl, configPolicy)
  .then((data) => data.json())
  .then((data) => {
    yodishObject = data.contents
  })  
}
//How to fix this double click issue?

//eventlistener that allows user to switch between the light and dark side
lightDarkButton.addEventListener('click', function (e) {
  e.preventDefault();

  if(image1 === true) {
    document.body.style.backgroundImage = "url('assets/SithYoda.png')";
    //go to image2
    image1 = false;
    document.body.style.color = '#EB212E';
  }
  else if(image1 === false) {
    document.body.style.backgroundImage = "url('assets/yoda1.jpg')";
    //revert to image1
    image1 = true;
    document.body.style.color = '#2FF924';
  }
})

//eventlistener that runs the getYodish function with a user provided string to return conversion
userTranslateButton.addEventListener('click', function (e){
    e.preventDefault();

    let userInput = userTextBox.value
    getYodish(userInput)
    let yodishString = yodishObject.translated

    let stringToOutput = document.createElement('p')
    stringToOutput.textContent = yodishString
    newYodishStringOutput.append(stringToOutput)

    upvoteArray.push(stringToOutput.textContent)
    console.log(upvoteArray)
    
    addToHistory(upvoteArray)
})

//function that takes an array as a parameter, and populates the menu Tyler creates with values from it.
const addToHistory = upvoteArray => {
  userTranslateButton.addEventListener('click', function(e){
    e.preventDefault();
    const historyText = upvoteArray.slice(-1)
    let tr = document.createElement('tr')
    tr.textContent = historyText
    history.append(tr)
  })
}
