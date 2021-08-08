const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var highScores = [
  {
    name: "Ayush",
    score: 5,
  },
  {
    name: "Prakash",
    score: 3,
  },
  {
    name: "Tanay",
    score: 6,
  },
];

// ex13: put a list of questions together
var questions = [
  {
    question: "First Question - \n- Which writing font was inspired by Detective Comics (DC)?: ",
    answer: "comic sans",
  },
  {
    question: "Second Question - \n- Which famous superhero originally had no flight ability?: ",
    answer: "superman",
  },
  {
    question: "Third Question - \n- Which hospital did Harley Quinn intern at as a psychologist?: ",
    answer: "arkham asylum",
  },
  {
    question: "Fourth Question - \n- What is Task Force X also called?: ",
    answer: "the suicide squad",
  },
  {
    question: "Fifth Question - \n- Who killed Thomas and Martha Wayne?: ",
    answer: "joe chill",
  },
  {
    question: "Sixth Question - \n- What does the tattoo on Simon Baz's arm say?: ",
    answer: "courage",
  },
  {
    question: "Seventh Question - \n- What was Bruce Wayne's IQ estimated to be?: ",
    answer: "192",
  },
  {
    question: "Eighth Question - \n- What is Superman's logo a Kryptonian symbol for?: ",
    answer: "hope",
  },
];

// ex01 to ex04: do it all together
var username = readlineSync.question(chalk.cyanBright("\nWhat is your name? 🙂 : "));
var uppercaseUsername = username.charAt(0).toUpperCase() + username.slice(1);

function welcomeUser() {
  console.log(chalk.yellowBright.bold("\nWelcome '" + uppercaseUsername + "' to - The 'DC Comics' QUIZ.\n" + "\nLet's start the quiz!\n" + "------------------------------" + "\n"));
}

// ex14: club everything to make the game
function askQuestion(question, answer) {
  var userAnswer = readlineSync.question(chalk.cyanBright(question));
  console.log("You entered '" + userAnswer + "'.");
  // ex08: function to check the answer
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    rightAnswer();
  } else {
    wrongAnswer(answer);
  }
  console.log('Current score:', score);
  console.log(chalk.yellowBright('------------------------------\n'));
}

// ex06: increment score if the right answer
function rightAnswer() {
  console.log(chalk.green('Right answer 👍'));
  score++;
}

function wrongAnswer(correctAnswer) {
  console.log(chalk.redBright('Wrong answer 👎'));
  console.log("The correct answer is '" + correctAnswer + "'.");
}

function showScores() {
  congratulateOrTryAgain();
  console.log(chalk.yellow.bold("High scores of other players: "));
  for (var i = 0; i < highScores.length; i++) {
    console.log(chalk.yellowBright(highScores[i].name, ':', highScores[i].score));
  }
}

// ex15: print the final score to the user
function congratulateOrTryAgain() {
  if (score !== 0) {
    console.log(chalk.green("CONGRATULATIONS! You have scored '" + score + "'. 👏"));
    var userHasBeatenHighScore = hasUserBeatenHighScore();
    console.log(chalk.green('\n' + userHasBeatenHighScore) + chalk.yellowBright("------------------------------\n"));
  } else {
    console.log(chalk.redBright("TRY AGAIN! You have scored '" + score + "'.\n"));
    console.log(chalk.yellowBright("------------------------------\n"));
  }
}

// bonus homework: has the user beaten high score?
function hasUserBeatenHighScore() {
  var maxScore = 0;
  for (var i = 0; i < highScores.length; i++) {
    var currentHighScore = highScores[i].score;
    if (currentHighScore > maxScore) {
      maxScore = currentHighScore;
    }
  }
  if (score > maxScore) {
    return "CONGRATULATIONS AGAIN! You have broken the HIGH SCORE RECORDS. 👏\n" + 
    "Kindly, send me the screenshot of your score to update the scoreboard.\n";
  } else {
    return "";
  }
}

function playGame() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    askQuestion(currentQuestion.question, currentQuestion.answer);
  }
}

welcomeUser();
playGame();
showScores();
console.log(chalk.yellowBright("------------------------------\n") + chalk.cyanBright("\nThank you '" + uppercaseUsername + "' for playing this quiz game! ❤️\n"));
