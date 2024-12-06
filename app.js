const questions = [
    {
        question: "Which hogwarts house harry sorted?",
        answers: [
            { text: "Slyhterin", correct: false },
            { text: "Hufflepuff", correct: false },
            { text: "Gryffindor", correct: true },
            { text: "Ravenclaw", correct: false },
        ]
    },
    {
        question: "Who is Harry parents killer?",
        answers: [
            { text: "Snape", correct: false },
            { text: "Dumbldore", correct: false },
            { text: "Voldemort", correct: true },
            { text: "Grindlewort", correct: false },
        ]
    },
    {
        question: "Who is the owner of fluffy?",
        answers: [
            { text: "Flitch", correct: false },
            { text: "Minerva", correct: false },
            { text: "Hagrid", correct: true },
            { text: "Ron", correct: false },
        ]
    },
    {
        question: "which Book Cedric die?",
        answers: [
            { text: "Philospher-stone", correct: false },
            { text: "half-blood-prince", correct: false },
            { text: "Goblet of fire", correct: true },
            { text: "Deathly hallow", correct: false },
        ]
    },
    {
        question: "who is muggle?",
        answers: [
            { text: "Wizards are muggle", correct: false },
            { text: "Half-Blood students", correct: false },
            { text: "Dont know the magic", correct: true },
            { text: "Know the magic", correct: false },
        ]
    },
    {
        question: "How many dragon are in the First round of Goblet of fire?",
        answers: [
            { text: "8", correct: false },
            { text: "5", correct: false },
            { text: "4", correct: true },
            { text: "2", correct: false },
        ]
    },
    {
        question: "Which animal have the Dumbloder?",
        answers: [
            { text: "Dragon", correct: false },
            { text: "Dog", correct: false },
            { text: "Phoneix", correct: true },
            { text: "BugBee", correct: false },
        ]
    },
    {
        question: "which book have sirius first apperance is shown?",
        answers: [
            { text: "Philospher-stone", correct: false },
            { text: "half-blood-prince", correct: false },
            { text: "prison of Azkaban", correct: true },
            { text: "Deathly hallow", correct: false },
        ]
    },
    {
        question: "which Book Dumbldore die?",
        answers: [
            { text: "Philospher-stone", correct: false },
            { text: "half-blood-prince", correct: true },
            { text: "Goblet of fire", correct: false },
            { text: "Deathly hallow", correct: false },
        ]
    },
    {
        question: "how many hocrux are?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "0", correct: false },
            { text: "7", correct: true },
        ]
    },

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => { 
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "PlayAgian";
    nextButton.style.display = "block";
}



function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}



nextButton.addEventListener("click", () => { 
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();