var questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used to style web pages?",
        answers: ["HTML", "CSS", "Java", "Python"],
        correct: 1
    },
    {
        question: "Which language makes web pages interactive?",
        answers: ["CSS", "HTML", "JavaScript", "C++"],
        correct: 2
    },
    {
        question: "Which HTML tag is used to create a link?",
        answers: ["<a>", "<link>", "<href>", "<url>"],
        correct: 0
    },
    {
        question: "Which CSS property changes text color?",
        answers: ["color", "font-style", "background-color", "text-style"],
        correct: 0
    }
];

var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var nextBtn = document.getElementById("next-btn");
var resultEl = document.getElementById("result");

var currentQuestion = 0;
var score = 0;

function loadQuestion() {
    var q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach(function(answer, index) {
        var div = document.createElement("div");
        div.textContent = answer;
        div.classList.add("answer");

        div.onclick = function() {
            selectAnswer(index);
        };

        answersEl.appendChild(div);
    });
}

function selectAnswer(index) {
    var q = questions[currentQuestion];
    var options = document.getElementsByClassName("answer");

    for (var i = 0; i < options.length; i++) {
        options[i].onclick = null;

        if (i === q.correct) {
            options[i].classList.add("correct");
        }
    }

    if (index === q.correct) {
        score++;
    } else {
        options[index].classList.add("wrong");
    }
}

nextBtn.onclick = function() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    questionEl.style.display = "none";
    answersEl.style.display = "none";
    nextBtn.style.display = "none";

    resultEl.innerHTML = `
        Your Final Score: ${score} / ${questions.length}
        <br><br>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    questionEl.style.display = "block";
    answersEl.style.display = "block";
    nextBtn.style.display = "inline-block";
    resultEl.innerHTML = "";

    loadQuestion();
}

loadQuestion();