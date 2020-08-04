// Declare variables

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

var quizContainer = document.getElementById("quiz");

var resultsContainer = document.getElementById("results");

var submitButton = document.getElementById("submit");

// Generate Quiz!

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // first reset the list of answers
      answers = [];

      // for each available answer to this question...
      for (letter in questions[i].answers) {
        // ...add an html radio button
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>"
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  // show the questions
  showQuestions(questions, quizContainer);

  function showResults(questions, quizContainer, resultsContainer) {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var userAnswer = "";
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // find selected answer
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[i].style.color = "red";
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
  }

  // when user clicks submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
