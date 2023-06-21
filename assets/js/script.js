// vars

// select dom elements
var startButton = document.querySelector(".start-button")
var resetButton = document.querySelector(".reset-button")
var timerEl = document.querySelector(".timer")
var wordBlanksEl = document.querySelector(".word-blanks")
var winsEl = document.querySelector(".win")
var lossesEl = document.querySelector(".lose")

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
      blanks += "_"
    }  
    wordBlanksEl.textContent =  blanks.split('').join(" ")
  }
  function startRound() {
    console.log("start")
    // start timer
    
    getRandomWord()
    renderWord()
    
  }

  function onKeydown(event) {
    // check if letter pressed is in the answer string
      // if yes
        // reveal letter in word-blanks
  }

  function tick() {
    // check if userGuesses has all letters that are in answer string
      // if has guess all letters
        // end round
        // increment wins
        // display "you won!"
      // else
        // is our timer count at 0?
          // if yes
            // diplay "lost round"
            // increment losses
          // else
            // decrement timer count
  }

  // Event Listeners
    // start - startRound()
    startButton.addEventListener("click", startRound)
    // reset
    // keydown - onKeydown