const {API_KEY} = config.API_KEY

// !GOALS FOR THE REMAINDER OF THE PROJECT!
// ! Debug double click issue
// ! Fix color of text in favorites and history box

//  Look into scaling the website to different resolutions

// styling generated HTML via JS: 
// (element.style.CSSproperties = property wanted as a string)

//global declarations
let url = 'https://api.funtranslations.com/translate/yoda.json'
let yodishObject = {}
const userTranslateButton = document.getElementById('user-input')
const userTextBox = document.getElementById('new-yodish-string')
const newYodishStringOutput = document.getElementById('output')
const lightDarkButton = document.getElementById('light-dark')
const history = document.getElementById('yodism-history-nest')
const favoritesMenu = document.getElementById('table-values')
let favoritesButton = document.createElement('button')
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
    const newTitle = document.getElementById('title-text')
    newTitle.textContent = 'Wise Words of Sith Yoda'
  }
  else if(image1 === false) {
    document.body.style.backgroundImage = "url('assets/yoda1.jpg')";
    //revert to image1
    image1 = true;
    document.body.style.color = '#2FF924';
    const newTitle = document.getElementById('title-text')
    newTitle.textContent = 'Wise Words of Master Yoda'
  }
})

//eventlistener that runs the getYodish function with a user provided string to return conversion
userTranslateButton.addEventListener("click", addYodishString)
 

function addYodishString(e){
  e.preventDefault();

  let userInput = userTextBox.value
  getYodish(userInput)
  let yodishString = yodishObject.translated

  let stringToOutput = document.getElementById('output')
  stringToOutput.textContent = yodishString
  stringToOutput.style.position = 'relative'
  stringToOutput.style.top = '60'

  upvoteArray.push(stringToOutput.textContent)
  addToHistory(upvoteArray)
}


//function that takes an array as a parameter, and populates the menu Tyler creates with values from it.
const addToHistory = upvoteArray => {
  userTranslateButton.addEventListener('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    let historyItem = document.createElement('tr')
    favoritesButton = document.createElement('button')
    const historyText = upvoteArray.slice(-1)
    favoritesButton.innerHTML = ' ☆'
    historyItem.textContent = historyText
    history.append(historyItem)
    historyItem.appendChild(favoritesButton)
    
    favoritesButton.addEventListener('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      favoritesButton.innerHTML = ""
      favoritesMenu.append(historyItem.textContent)
    })
 })
}
