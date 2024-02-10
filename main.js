let start = document.getElementById("start");
let result = document.getElementById("result");
let main = document.getElementById("main");

let allQuestions = [
    {
       question: "2+2",
       correct: 4 ,
       anwers: [4, 5, 10, 12,] ,
} ,
{
    question: "4+4",
       correct: 8 ,
       anwers: [1, 5, 8, 12,] ,
} ,
];
let currentQuestions = 0;
let countSuccess = 0; 
