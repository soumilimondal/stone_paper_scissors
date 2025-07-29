let userScore = 0;
let compScore = 0;
let flag = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const container = document.querySelector(".msg-container");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector(".reset");

let setValue = (flag) =>{
    if(flag === 1)
    {
        userScore = 0;
        compScore = 0;
        return true;
    }
}

const drawGame = () =>{
    console.log("Game was draw");
    container.innerText = Game was draw.Play again;
    container.style.backgroundColor = "#48435C";
}

const gameWinner = (userWin,userChoice,comChoice) =>{
    if(setValue){
        flag = 0;
        setValue(flag);
    }
    if(userWin){
        console.log("!!!You Win!!!");
        container.innerText = You Win! Your ${userChoice} beats ${comChoice};
        container.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        console.log("!!!Computer Win!!!");
        container.innerText = You Lost! ${comChoice} beats your ${userChoice};
        container.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const genCompChoice = () =>{
    const opt = ["rock","paper","scissors"];
    const randId = Math.floor(Math.random()*3);
    return opt[randId];
}

const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    const comChoice = genCompChoice();
    console.log("user choice =",comChoice);
    if(userChoice === comChoice){
        drawGame();
    }  
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors or paper
            userWin = comChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock or scissors
            userWin = comChoice === "scissors" ? false : true;
        }
        else{
            //rock or paper
            userWin = comChoice === "rock" ? false : true;
        }
        gameWinner(userWin,userChoice,comChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

resetBtn.addEventListener("click",() =>{
    console.log("Game was reset");
    resetGame();
}); 

const resetGame = () =>{
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    container.innerText = "Play your move";
    container.style.backgroundColor = "#48435C";
    flag = 1;
    setValue(flag);
}
