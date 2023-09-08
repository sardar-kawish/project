const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');



const questions = [
  {
    question: '.1 what is your name?',
    answers: [
      { text: 'A)_Hamad', correct: false },
      { text: 'B)_Kawish', correct: true },
      { text: 'Bazad', correct: false },
      { text: 'Muqrab', correct: false}
    ]
},
{
  question: '.2 What is the primary function of an operating system in a computer?',
  answers: [
    { text: 'A)_Solid State Disk', correct: true },
    { text: 'B)_Super Storage Device', correct: false },
    { text: 'C)_System Software Directory', correct: false },
    { text: 'D)_Solid State Drive', correct: false }
  ]
},
  {
    question: '.3 What does "SSD" stand for in the context of data storage?',
    answers: [
      { text: 'A) To manage hardware resources and provide a user interface', correct: true },
      { text: 'B) To run web browsers', correct: false },
      { text: 'C) To create documents and spreadsheets', correct: false },
      { text: 'D) To protect against malware', correct: false }
    ]
  },
  {
    question: '.4 Which programming language is often used for developing mobile apps on the Android platform?',
    answers: [
      { text: 'A) JavaScript', correct: false },
      { text: 'B) Swift', correct: false },
      { text: 'C) Python', correct: false },
      { text: 'D) Java', correct: true }
    ]
  },
  {
    question: '.5 In networking, what does "IP" stand for?',
    answers: [
      { text: 'A) Internet Protocol', correct: true },
      { text: 'B) Information Pathway', correct: false },
      { text: 'C) Internet Provider', correct: false },
      { text: 'D) Integrated Programming', correct: false }
    ]
  },
  
];

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', startQuiz);
startButton.addEventListener('mouseover', addMouseOverEffect);
startButton.addEventListener('mouseout', removeMouseOverEffect);

restartButton.addEventListener('click', startQuiz);
restartButton.addEventListener('mouseover', addMouseOverEffect);
restartButton.addEventListener('mouseout', removeMouseOverEffect);

function addMouseOverEffect(event) {
  event.target.classList.add('hover-effect'); // Add a CSS class for hover effect
}

function removeMouseOverEffect(event) {
  event.target.classList.remove('hover-effect'); // Remove the CSS class for hover effect
}


function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.classList.add('hide');
  startButton.classList.add('hide');
  questionContainer.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  if (answer.correct) {
    score += 100 / questions.length;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setNextQuestion();
  } else {
    showScore();
  }
}

function showScore() {
    questionContainer.classList.add('hide');
    scoreElement.innerText = score.toFixed(0);
    scoreContainer.classList.remove('hide');
  }

// startQuiz();