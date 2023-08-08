let questions = document.querySelectorAll(".q");
let answers = document.querySelectorAll(".a");
for (let i = 0; i < questions.length; i++) {
    questions[i].className = "q" + i;
    answers[i].className = "a" + i;
    questions[i].addEventListener("click", ()=> {
        if (answers[i].style.display != "flex") {
            console.log("opening!" + i);
            answers[i].style.display = "flex";
            answers[i].style.height = "auto";
            questions[i].style.transform = "rotate(180deg)";
        } else {
            console.log("closing!" + i);
            answers[i].style.display = "none";
            answers[i].style.height = "0";
            questions[i].style.transform = "rotate(0deg)";
        }
    });
};