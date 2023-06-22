// vars

// select dom elements
var startButton = document.querySelector(".start-button")
var resetButton = document.querySelector(".reset-button")
var timerEl = document.querySelector(".timer-count")
var wordBlanksEl = document.querySelector(".word-blanks")
var winsEl = document.querySelector(".win")
var lossesEl = document.querySelector(".lose")
var wins = 0
var losses = 0
var time = 10
var intervalId

  // list of words
  var words = ["jellyfish", "bacon", "porcupine", "phonetics", "antidisestablishmentarianism", "boolean", "callback", "redacted", "eschatology", "arminianism", "hydrochloric", "ajflsjfskf"]
  var userGuesses = []
  var answer = "function"

  console.log(words.length)

  function getRandomWord(){
    var randomIdx = Math.floor(Math.random() * words.length)
    answer = words[randomIdx]
  }

  function renderWord (){
    var blanks = ""
    for (var i = 0; i < answer.length; i++){
      var letter = answer[i]
      if(userGuesses.includes(letter)){
        blanks += letter
      } else {
        blanks += "_"
      }
    }   
    wordBlanksEl.textContent =  blanks.split('').join(" ")
  }

  function startRound() {
    
    //userGuesses = []
    getRandomWord()
    renderWord()
    intervalId = setInterval(tick, 1000)
    
  }

  function onKeydown(event) {

    if (answer.includes(event.key) && !userGuesses.includes(event.key)){
      userGuesses.push(event.key)
      // reveal letter in word-blanks
    }
    renderWord()
  }

  function tick() {
    // check if userGuesses has all letters that are in answer string   
    if (!wordBlanksEl.innerText.includes("_"))  {
      clearInterval(intervalId)
      wins++
      wordBlanksEl.innerText = "You won!"
    } else {
      if (time <= 0){
        clearInterval(intervalId)
        losses++
        wordBlanksEl.innerText = "You lost!"
        timerEl.innerText = "Out of time!"
      } else {
        time--
        timerEl.innerText = time
      }
    }  // if has guess all letters
        // end round
      // else
        // are we out of time?
          // if yes

          // else
            // decrement timer count
  }

  // Event Listeners
    // start - startRound()
    startButton.addEventListener("click", startRound)
    // reset
    // keydown - onKeydown
    document.body.addEventListener("keydown", onKeydown)