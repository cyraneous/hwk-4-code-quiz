// Declare questions as array

var myQuestions = [
  {
    question:
      "JavaScript is a lightweight, interpreted programming language with _______ -oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
    answers: {
      a: "direct",
      b: "user",
      c: "object",
      d: "subject",
    },
    correctAnswer: "c",
  },
  {
    question: "Which data type is not supported by Javascript?",
    answers: {
      a: "null",
      b: "boolean",
      c: "symbol",
      d: "destructor",
    },
    correctAnswer: "d",
  },
  {
    question: "Which item(s) below are advantages to using Javascript? ",
    answers: {
      a: "enhanced interactivity",
      b: "immediate feedback",
      c: "low server interaction",
      d: "all of the above",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Function names can contain letters, digits, underscores, and dollar signs (same rules as _______ ).",
    answers: {
      a: "objects",
      b: "variables",
      c: "Flintstone Chewables",
      d: "parameters",
    },
    correctAnswer: "b",
  },
  {
    question:
      "The ___EventListener() method attaches an event handler to the specified element",
    answers: {
      a: "add",
      b: "insert",
      c: "commit",
      d: "append",
    },
    correctAnswer: "a",
  },
];

// Show first question on page

var time = myQuestions.length * 15;

var currentQuestionIndex = 0;

var titleElement = document.getElementById("Questions-title");

var choicesElement = document.getElementById("Questions-choices");

var questionsElement = document.getElementById("questions");

function retrieveQuestions() {
  var currentQuestion = myQuestions[currentQuestionIndex];

  titleElement.textContent = currentQuestion.question;

  choicesElement.innerHTML = "";

  currentQuestion.answers.forEach(function (choice, i) {
    var choiceButton = document.createElement("button");

    choiceButton.setAttribute("class", "choice");

    choiceButton.setAttribute("value", choice);

    choiceButton.textContent = i + 1 + " " + choice;

    choicesElement.appendChild(choiceButton);
  });
}

function 