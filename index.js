const quizData=[
    {
        question: "What does HTML stand for",
        options:[
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext machine Language",
            "Hyperlink and Text Markup Langauge",
        ],
        correct:0,
    },
    {
        question:"Which CSS property is used to control the spacing between elements?",
        options:["margin","padding","spacing","border-spacing"],
        correct:0,
    },
    {
        question:
        "What is the javaScript function used to select an HTMl element by its id?",
        options:["document.quary","getElementById","selectElement","findElementById"],
        correct:1,
    },
    {
        question:
        "In React.js which hook is use dto perform side effects in function component?",
        options:["useEffect","useState","useContext","useReducer"],
        correct:0,
    },
    {
        question:"Which HTMl tag is used to create an ordered list?",
        options:["'<ul>","<li>","<ol>","<dl>"],
        correct:2,
    },
];

//step2: javaScript Initialization
const quiz=document.querySelector("#quiz")

const answerElm =document.querySelectorAll(".answer");

const [questionElm,option_1,option_2,option_3,option_4]=document.querySelectorAll("#question,#option_1,#option_2,#option_3,#option_4");

const submitBtn=document.querySelector("#submit");

let currentQuiz=0;
let score=0;

//step 3 load quiz function

const loadQuiz=()=>{
    const{question,options}=quizData[currentQuiz];
    console.log(question);
    questionElm.innerText=`${currentQuiz+1}: ${question}`;

    options.forEach(
        (curOption,index)=>(window[`option_${index+1}`].innerText=curOption));

}
loadQuiz();



const getSelectedOption=()=>{
    let ans_index;
    answerElm.forEach((curOption,index)=>{
        if(curOption.checked){
            ans_index=index;
        }
    });
    return ans_index;
    // let answerElement=Array.from(answerElm);
    // return answerElement.forEach((curElem)=>curElem.checked);
}



// deselectedAnswers

const  deSelectedAnswers=()=>{
   return answerElm.forEach((curElem)=>curElem.checked=false);
};

//get the selected answer function on button click

submitBtn.addEventListener("click",()=>{
    const selectedOptionIndex=getSelectedOption();
    console.log(selectedOptionIndex);
    if(selectedOptionIndex===quizData[currentQuiz].correct){
        score=score+1;
    }
     currentQuiz++;
    if(currentQuiz<quizData.length){
        deSelectedAnswers();
        loadQuiz();
    }
    else{
        quiz.innerHTML=`
        <div class="result">
        <h2>🏆 Your Score:${score}/${quizData.length} correct Answer</h2>
         <p>Congratulation on completing the quiz!🎉</p>
         <button class="reload-button" onclick="location.reload()">Play Again🔁</button>
         </div>
          `}
});




