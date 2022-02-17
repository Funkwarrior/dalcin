const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const technology = "HTML";
const resultModal = new bootstrap.Modal(document.getElementById('resultModal'))

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions;


document.addEventListener("DOMContentLoaded", function () {


let url = window.location.href;
const facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url ;
const twitterShareUrl = "https://twitter.com/intent/tweet/?text=Ho scoperto di quale assicurazione ho bisogno: " + url;

const fbshare = document.getElementById('fbshare');
const twshare = document.getElementById('twshare');

fbshare.setAttribute('href', facebookShareUrl);
twshare.setAttribute('href', twitterShareUrl);


});

function loadJSON() {

    //Create XHR Object
    let xhr = new XMLHttpRequest();

    //OPEN - call type, url/file , sync/async
    xhr.open('GET', 'html.json', false);

    //SEND
    xhr.send()

    xhr.onload = function () {
        if (this.status == 200) {
            //console.log(this.response)

        } else {
            console.log("Ooops something went wrong! Check network tab for more details.")
        }
    }


    return xhr.response;

}

let questions = JSON.parse(loadJSON())

//CONSTANTS
const MAX_QUESTIONS = 2;
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = getRandom(questions, MAX_QUESTIONS);

    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0){
        displayResults();
        return
    }


        questionCounter++;
        questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`

    currentQuestion = availableQuestions[0];
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const answer = choice.dataset['answer'];
        choice.innerText = currentQuestion[answer];
    })
    availableQuestions.shift();
    acceptingAnswers = true;

}

choices.forEach(choice => {
    choice.addEventListener("click", e => {

        if(!acceptingAnswers) return

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["answer"];

        /* Wersja do tutrialu
        const classToApply = (selectedAnswer === currentQuestion.answer) ? 'correct' : 'incorrect';

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000)
        */

        //Wersja MDB z fajerwerkami (dodajaca sie ikona)
        const succcessNode = '<div class="success-checkmark"><div class="check-icon"><span class="icon-line line-tip"></span><span class="icon-line line-long"></span><div class="icon-circle"></div><div class="icon-fix"></div></div></div>';
        if (selectedAnswer === currentQuestion.answer) {
            selectedChoice.insertAdjacentHTML("afterend", succcessNode);
            score++;
            scoreText.innerText = score;

        } else {
            selectedChoice.parentElement.classList.add('incorrect')
        }

        setTimeout(() => {
            elem = document.querySelector('.success-checkmark');
            if (elem)
                elem.parentNode.removeChild(elem);
            selectedChoice.parentElement.classList.remove('incorrect')

            getNewQuestion();

        }, 2000)


    })
})




function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function displayResults(){
const scoreSummary = document.getElementById('scoreSummary');
const totalSummary = document.getElementById('totalSummary');

scoreSummary.innerText = score;
totalSummary.innerText = MAX_QUESTIONS;
resultModal.show();
}

startGame();
