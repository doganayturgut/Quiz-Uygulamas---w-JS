const quizData = [  
    {  
    question: "Html etiketleri hangi karakterler arasına yazılır?",  
    a: "< >",  
    b: "# #",  
    c: "{ }",  
    d: "[]",  
    correct: "a",  
    },  
    {  
    question: "Bir web sayfası hangi HTML etiketi ile başlar?",  
    a: "<body>",  
    b: "<html>",  
    c: "<head>",  
    d: "<title>",  
    correct: "b",  
    },  
    {  
    question: "Bir tablonun kenarlık kalınlığını ayarlamak için kullanılan HTML parametresi aşağıdakilerden hangisidir?",  
    a: "Border",  
    b: "Height",  
    c: "Width",  
    d: "Align",  
    correct: "a",  
    },  
    {  
    question: "Bir yazının yazı karakter boyutunu değiştirmek için kullanılan HTML parametresi aşağıdakilerden hangisidir?",  
    a: "Size",  
    b: "Height",  
    c: "Title",  
    d: "Width",  
    correct: "a",  
    },  
];  

const quiz = document.getElementById("quiz");  
const answerElements = document.querySelectorAll(".answer");  
const questionElement = document.getElementById("question");  
const a_text = document.getElementById("a_text");  
const b_text = document.getElementById("b_text");  
const c_text = document.getElementById("c_text");  
const d_text = document.getElementById("d_text");  
const submitButton = document.getElementById("submit");  

let currentQuiz = 0;  
let score = 0;  

const deselectAnswers = () => {  
    answerElements.forEach((answer) => (answer.checked = false));  
};  

const getSelected = () => {  
    let answer;  
    answerElements.forEach((answerElement) => {  
    if (answerElement.checked) answer = answerElement.id;  
    });  
    return answer;  
};  

const loadQuiz = () => {  
    deselectAnswers();  
    const currentQuizData = quizData[currentQuiz];  
    questionElement.innerText = currentQuizData.question;  
    a_text.innerText = currentQuizData.a;  
    b_text.innerText = currentQuizData.b;  
    c_text.innerText = currentQuizData.c;  
    d_text.innerText = currentQuizData.d;  
};  

loadQuiz();  

submitButton.addEventListener("click", () => {  
    const answer = getSelected();  
    if (answer) {  
        if (answer === quizData[currentQuiz].correct) score++;  
        currentQuiz++;  
        if (currentQuiz < quizData.length) loadQuiz();  
        else {  
            quiz.innerHTML = `  
            <h2>${quizData.length} sorudan ${score} tanesini bildin.</h2>  
            <button onclick="history.go(0)">Baştan Başla</button>  
            ` 
        }  
    }  
});