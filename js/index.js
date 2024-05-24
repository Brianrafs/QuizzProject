const question = document.querySelector("#question");
const answerBox = document.querySelector("#answer-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;


//Questions

const questions = [
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
            {
                "answer": "back-end",
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "Sistema operacional",
                "correct": false
            },
            {
                "answer": "Banco de dados",
                "correct": false
            },
        ]
    },
    {
        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [
            {
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual o seletor de id no CSS?",
        "answers": [
            {
                "answer": "#",
                "correct": true
            },
            {
                "answer": ".",
                "correct": false
            },
            {
                "answer": "@",
                "correct": false
            },
            {
                "answer": "/",
                "correct": false
            },
        ]
    },
]


//Start game - todo: Make a homepage to start the game
function init(){
    createQuestion(1);
}

function createQuestion(i){

    //Clean the old question
    const oldButtons = answerBox.querySelectorAll("button");

    oldButtons.forEach(button => {button.remove()})

    //Alter text question
    const questionText = question.querySelectorAll("#question-text");
    const questionNumber = question.querySelectorAll("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    //Insert questions
    questions[i].answers.forEach((answer, i) => {

        //Create Quizz Template
        const answerTemplate = document.querySelector(".answers-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        //Remove hide and template class
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");

        //Insert alternative on window
        answerBox.append(answerTemplate);

        //Event Click
        answerTemplate.addEventListener("click", function(){
            console.log(this);
        })
    })

    //Increments question number
    actualQuestion++;
}

init();