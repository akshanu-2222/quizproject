var quizdata = [

    {
        question:"Which framework belongs to javascript",
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct:'c'

    },

    {
        question:"Which is not a programming language?",
        a:'HTML',
        b:'Python',
        c:'Java',
        d:'Javascript',
        correct:'a'

    },

    {
        question:"Which is not a framework",
        a:'react',
        b:'javascript',
        c:'angular',
        d:'django',
        correct:'b'

    },

    {
        question:"CSS stands for",
        a:'cascading style state',
        b:'cascading style sheet',
        c:'cascading sheet of style',
        d:'none',
        correct:'b'

    }


];


var quiz = document.getElementById("quiz-div")
var answer = document.querySelectorAll(".answer")
var question = document.getElementById("question")
var option_a = document.getElementById("a_value")
var option_b = document.getElementById("b_value")
var option_c = document.getElementById("c_value")
var option_d = document.getElementById("d_value")


var submitBtn = document.getElementById("submit")

var currentQuestion = 0
var quizScore = 0

loadQuiz()

function loadQuiz(){

    deselect()


     question.innerHTML=quizdata[currentQuestion].question
     option_a.innerText = quizdata[currentQuestion].a
     option_b.innerText = quizdata[currentQuestion].b
     option_c.innerText = quizdata[currentQuestion].c
     option_d.innerText = quizdata[currentQuestion].d
    

}

function deselect(){
    answer.forEach(answer=>answer.checked=false)
}

submitBtn.addEventListener('click',()=>{
    var selectedoption;

    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption = answer.id
        }

    })

    if(selectedoption==quizdata[currentQuestion].correct)
    {
        quizScore = quizScore+1
    }
    currentQuestion=currentQuestion+1
   
    if(currentQuestion==quizdata.length)
    {
        document.getElementById('quiz-div').innerHTML=`<h1>You have answered ${quizScore} correctly out of ${quizdata.length}</h1>`

    }
    else{
        loadQuiz()
    }

})