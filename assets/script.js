const highScoresEl = document.getElementById("high-scores");
const timeEL = document.getElementById("timer");
const container = document.getElementById("container");
const startButton = document.getElementById("start-button");
const rightWrong = document.getElementById("rightorwrong");

const questions = [
  {
    question1: "Which of these is a valid JavaScript comment?",
    answers: [
      {text: "// This comment is valid", correct: true},
      {text: "<!-- This comment is valid-->", correct: false},
      {text: "This comment is valid", correct: false},
      {text: "?This comment is valid", correct: false},
    ]    
  },
  {
    question2: "Which one of the following is not used for a variable in Javascript?",
    answers: [
      {text: "let", correct: false},
      {text: "def", correct: true},
      {text: "const", correct: false},
      {text: "var", correct: false},
    ]    
  },
  {
    question3: "Arrays in JavaScript can be used to store...",
    answers: [
      {text: "numbers and strings", correct: false},
      {text: "other arrays", correct: false},
      {text: "booleans", correct: false},
      {text: "all of the above", correct: true},
    ]   
  },
  {
    question4: "Where in the HTML file to we link to the JavaScript file?",
    answers: [
      {text: "inside the head tag", correct: false},
      {text: "anywhere", correct: false},
      {text: "behind the last html tag", correct: false},
      {text: "before the closing of the body tag", correct: true},
    ]   
  },
  {
    question5: "How do you create a function in JavaScript?",
    answers: [
      {text: "function myFunction()", correct: false},
      {text: "function: myFunction()", correct: false},
      {text: "function = myFunction()", correct: true},
      {text: "function - myFunction()", correct: false},
    ] 
  },
];

const startQuiz = function() {
  //When I click the start button, set the interval to 75 seconds
  
  

  //When I click the start button, empty the container and start filling it with the questions one after another
  container.innerText = "";
    //create the html element to display the question
  const quizQuestionEl = document.createElement("h3");
  // if I want to add style, add classes quizQuestionEl.classList.add("question-style")
  const answerOption1 = document.createElement("button");
  //add a class for button styling
  questions.classList.add("btn");
  const answerOption2 = document.createElement("button");
  questions.classList.add("btn");
  const answerOption3 = document.createElement("button");
  questions.classList.add("btn");
  const answerOption4 = document.createElement("button");
  questions.classList.add("btn");

  //assign content to created elements
  quizQuestionEl.innerHTML = questions[i].question;
  answerOption1.innerHTML = questions[i].answer1;
  answerOption2.innerHTML = questions[i].answer2;
  answerOption3.innerHTML = questions[i].answer3;
  answerOption4.innerHTML = questions[i].answer4;

  //appending the above-created elements to show on the page
  container.appendChild()
  

  //create the button to

  function setNextQuestion() {

  }

}





//make the scoring logic
const rightorWrong = function() {

}



/*let count = 0;
let countDownMS = 75000;

function countdown() {
  //timer counts down from 75s
  var timeLeft = 75;
  
  //use the setInterval() method to call a function to be executed every 75000 milliseconds
  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
        timeLeft--;
    } else if {
        
    }
  }
    
  )
}*/


//add event listeners
startButton.addEventListener("click", startQuiz);