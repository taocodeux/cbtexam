//Questions, optioons and empty answers
let questions = [
    {
        myQuestion: "What is your Name?",
        myOptions: ["Taofikat", "Badmus", "Bamidele", "Sekinah"],
        myAnswer: " "
    },
    {
        myQuestion: "What is your favorite food?",
        myOptions: ["Potatoes", "Rice", "yam", "Beans"],
        myAnswer: " "
    },
    {
        myQuestion: "What is your favorite color?",
        myOptions: ["Red", "Blue", "Nude", "Yellow"],
        myAnswer: " "
    },
    {
        myQuestion: "Where is your hometown?",
        myOptions: ["Ibadan", "Ilorin", "Lagos", "Oshogbo"],
        myAnswer: " "
    },
    {
        myQuestion: "What is favourite course?",
        myOptions: ["HTML", "CSS", "JavaScript", "Python"],
        myAnswer: " "
    },
    {
        myQuestion: "What is your friend's name?",
        myOptions: ["sekinah", "Badmus", "Bamidele", "I don't have"],
        myAnswer: " "
    }
]

let storedQuestions = document.getElementById("questions")
let index = 0 //current question index
let updateQue = "" //current qustion html displayed
let submitBtn = document.getElementById("submitbtn")

//html content
function updateQuestion() {
    let previousAnswer = showAnswers()
    updateQue = `<ul>
                    <p>${index + 1}. ${questions[index].myQuestion}</p>
                    <li><input type="radio" name="option" value="${questions[index].myOptions[0]}" ${previousAnswer === questions[index].myOptions[0] ? 'checked' : ''}>${questions[index].myOptions[0]}</li>
                    <li><input type="radio" name="option" value="${questions[index].myOptions[1]}" ${previousAnswer === questions[index].myOptions[1] ? 'checked' : ''}>${questions[index].myOptions[1]}</li>
                    <li><input type="radio" name="option" value="${questions[index].myOptions[2]}" ${previousAnswer === questions[index].myOptions[2] ? 'checked' : ''}>${questions[index].myOptions[2]}</li>
                    <li><input type="radio" name="option" value="${questions[index].myOptions[3]}" ${previousAnswer === questions[index].myOptions[3] ? 'checked' : ''}>${questions[index].myOptions[3]}</li>
                </ul>`

    storedQuestions.innerHTML = updateQue
}
//next question function
function nextQue() {
    let selectedOption = document.querySelector("input[name='option']:checked")
    if(!selectedOption){
        alert("Please select an answer before moving to the next question")
        return
    }
    save(selectedOption.value)
    index++
    if (index < questions.length) { //if all questions are answered, display submit
        updateQuestion()
    } else {
        submitBtn.innerHTML = "<button onclick='submitExam()' class= 'btn btn-success'>Submit</button>"
    }
}
updateQuestion()

function submitExam(){
        alert("answers submitted successfully!")
        logOut()
}
//save answers to local storage
function save(answer){
    localStorage.setItem(`answer${index}`, answer)
}
//show saved answer
function showAnswers(){
    return localStorage.getItem(`answer${index}`)
}
function previousQue(){
    index--
    if(index < questions.length){
        updateQuestion()
        return
    }
}

// To set timeout
    let num = 25.00
    let time = document.getElementById("time")
    let myTime = time.innerHTML
    let goBack = document.getElementById("back")
    let num2 = setInterval(()=>{
        num -= 1 
        time.style.fontWeight = "700"
        time.innerHTML = num.toFixed(2)


        if(num == 0.00){
            alert("Time out")
            goBack.style.display = "block"
            clearInterval(num2)
        }
    },1000)
    
    function logOut(){
        window.location.href  ="index.html"
    }
    window.onload = function() {
        localStorage.clear()
    }