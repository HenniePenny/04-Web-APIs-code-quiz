const highScoresEl = document.getElementById("high-scores");
const timeEl = document.getElementById("timer");
const container = document.getElementById("container");
const startButton = document.getElementById("start-button");
const rightWrong = document.getElementById("rightorwrong");
let questionIndex = 0;
let timeLeft = 75;

// let answerOption1
// let answerOption2
// let answerOption3
// let answerOption4


//let timer;
//let timerCount;

const questions = [
  {
    question: "Which of these is a valid JavaScript comment?",
    answer1: "//This comment is valid",
    answer2: "/This comment is valid",
    answer3: "This comment is valid",
    answer4: "?This comment is valid",
    correctAnswer: "//This comment is valid"
    
    /*answers: [
      {text: "// This comment is valid", correct: true},
      {text: "<!-- This comment is valid-->", correct: false},
      {text: "This comment is valid", correct: false},
      {text: "?This comment is valid", correct: false},
    ]*/
  },
  {
    question: "Which one of the following is not used for a variable in Javascript?",
    answer1: "let",
    answer2: "def",
    answer3: "const",
    answer4: "var",
    correctAnswer: "def"
    /*answers: [
      {text: "let", correct: false},
      {text: "def", correct: true},
      {text: "const", correct: false},
      {text: "var", correct: false},
    ] */   
  },
  {
    question: "Arrays in JavaScript can be used to store...",
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "booleans",
    answer4: "all of the above",
    correctAnswer: "all of the above"
    /*answers: [
      {text: "numbers and strings", correct: false},
      {text: "other arrays", correct: false},
      {text: "booleans", correct: false},
      {text: "all of the above", correct: true},
    ] */  
  },
  {
    question: "Where in the HTML file to we link to the JavaScript file?",
    answer1: "inside the head tag",
    answer2: "anywhere",
    answer3: "behind the last html tag",
    answer4: "before the closing of the body tag",
    correctAnswer: "before the closing of the body tag"
    /*answers: [
      {text: "inside the head tag", correct: false},
      {text: "anywhere", correct: false},
      {text: "behind the last html tag", correct: false},
      {text: "before the closing of the body tag", correct: true},
    ]*/
  },
  {
    question: "How do you create a function in JavaScript?",
    answer1: "function myFunction()",
    answer2: "function: myFunction()",
    answer3: "function = myFunction()",
    answer4: "function - myFunction()",
    correctAnswer: "function = myFunction()"
    /*answers: [
      {text: "function myFunction()", correct: false},
      {text: "function: myFunction()", correct: false},
      {text: "function = myFunction()", correct: true},
      {text: "function - myFunction()", correct: false},
    ]*/
  },
];

//calling init function when page is loaded to display previous high scores
function init() {
  getHighScores();
}

 

const startQuiz = function() {
  //timer shows 0 before clicking the start button
 timerCount = 0;

 //When I click the start button, set the interval to 75 seconds
 startTimer();    

 
  
  //Clicking on start button displays question 1 only (not all of the questions at the same time)
  //startButton.addEventListener("click", function(event) {
  //Stops event from bubbling up and new window opening
  //event.stopPropagation(event);
  //})
  setNextQuestion();
}

function setNextQuestion() {
   //When I click the start button, empty the container and start filling it with the questions one after another
   container.innerText = "";

   //for each question, create and element and append the question and answer buttons
   //for (var i=0; i < 1; i++) {
     const questionDisplay = document.createElement("div");
 
     //create the html element to display the question
     const quizQuestionEl = document.createElement("h3");
     // if I want to add style, add classes quizQuestionEl.classList.add("question-style")
     const answerOption1 = document.createElement("button");
     //add a class for button styling
     answerOption1.classList.add("btn");
     //add event listener for button
     answerOption1.addEventListener("click", evaluateAnswer);
     const answerOption2 = document.createElement("button");
     answerOption2.classList.add("btn");
     answerOption2.addEventListener("click", evaluateAnswer);
     const answerOption3 = document.createElement("button");
     answerOption3.classList.add("btn");
     answerOption3.addEventListener("click", evaluateAnswer);
     const answerOption4 = document.createElement("button");
     answerOption4.classList.add("btn");
     answerOption4.addEventListener("click", evaluateAnswer);
     
     //assign content to created elements
     quizQuestionEl.innerHTML = questions[questionIndex].question;
     answerOption1.innerHTML = questions[questionIndex].answer1;
     answerOption2.innerHTML = questions[questionIndex].answer2;
     answerOption3.innerHTML = questions[questionIndex].answer3;
     answerOption4.innerHTML = questions[questionIndex].answer4;
 
     //appending the above-created elements to show on the page
     container.appendChild(questionDisplay);
     container.appendChild(quizQuestionEl);
     container.appendChild(answerOption1);
     container.appendChild(answerOption2);
     container.appendChild(answerOption3);
     container.appendChild(answerOption4);
}

//start Timer function is called when Start button is clicked
function startTimer() {
  //set timer
  let timer = setInterval(function() {
    //as long as timeLeft is greater than 1
    if (timeLeft > 1) {
      //set the text content of timeEl to show remaining seconds
      timeEl.textContent = "Time: " + timeLeft;
      //decrement `timeLeft` by 1
      timeLeft--;
    } else {
      timeEl.textContent = "";
      clearInterval(timer);
      displayScore(); //TODO
    }
  }, 1000)
}
function quizEnd() {
  //TODO
}


function evaluateAnswer() {
  if(this.value !== questions[questionIndex].correctAnswer) {
    timeLeft -= 10;
    if(timeLeft < 0) {
      timeLeft = 0
    }
    timeEl.textContent = timeLeft; 
    rightWrong.textContent = "Wrong!";
  }
    else {
      rightWrong.textContent = "Correct!";
    }

  setTimeout(function() {
    rightWrong.setAttribute("class", hide);
  }, 1000); 
  questionIndex++;
  if(questionIndex === questions.length) {
    quizEnd();
  } else {
    setNextQuestion();
  }
}

//after the click of any answer button, move to next question
/*function setNextQuestion() {
  if (answerOption1 === true || answerOption2 === true || answerOption3 === true || answerOption4 === true) {
    rightorWrong.textContent = "Correct!"
    //and move to next question
  } else {
    rightorWrong.textContent = "Wrong!"
    //and move to next question
  }
  //if I click on a true answer, show true and move to next question
  /*if ("button" === true) {

  }
  //if I click on false answer, show false, deduct time and move to next question
 // container.innerText = questions.question
}*/



//make the scoring logic
const rightorWrong = function() {

}

//function displayScore() is called in start Timer function
function displayScore() {
  //All done!
  //Your final score is: 
  //Enter your initials: (form field)
  //submit button
  //display high score
}

//this function is used by init() called when page is loaded to 
function getHighScores () {
  var storedHighScores = localStorage.getItem()
}



//add event listeners
startButton.addEventListener("click", startQuiz);