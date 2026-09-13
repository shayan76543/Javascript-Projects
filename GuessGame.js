let RandomNumber=Math.floor(Math.random()*100)+1;
const UserInput=document.querySelector('#userGuess');
const SubmitBtn=document.querySelector('#submitButton');
const PreviousGuesses=document.querySelector('#previousGuesses');
const ResultMessage=document.querySelector('#resultMessage');
const RemainingGuess=document.querySelector('#GuessCount');
const HintMessage=document.querySelector('#hintMessage');
const p=document.createElement('p');
const bottomPortion=document.querySelector('.bottom_portion');
let Guesses=[];
let GuessCount=1;
let PlayGame=true;
SubmitBtn.addEventListener('click',function(e){
    e.preventDefault();
    const UserGuess=parseInt(UserInput.value);
    if (PlayGame){
        ValidateGuess(UserGuess);
    }
})
function ValidateGuess(UserGuess){
    if (isNaN(UserGuess)){
        alert('Please Enter only Number');
        return
    }else if(UserGuess<=0){
        alert('Please Enter Number in Range 1-100 Lower than Limit ');
        return
    }else if(UserGuess>100){
        alert('Please Enter Number in Range 1-100 Higher than Limit');
        return 
    }
    Guesses.push(UserGuess);
    if (Guesses.length===10){
        if (UserGuess===RandomNumber){
            ResultMessage.innerHTML=`Yah You Got it Congratulation ${UserGuess}`;
        }else{
            ResultMessage.innerHTML='Game Over! You Have Used ALL Your Guesses';
        }
        CleanUp(UserGuess);
        endGame();

    }else{
        CheckGuess(UserGuess);
    }
}
function CheckGuess(UserGuess){
    if (UserGuess===RandomNumber){
        ResultMessage.innerHTML=`Yah You Got it Congratulation ${UserGuess}`;
        HintMessage.innerHTML='';
        endGame();
        CleanUp(UserGuess);
    }else if(UserGuess<RandomNumber){
        HintMessage.innerHTML='Your Guess is Low';
        RemainingGuess.innerHTML=`Remaining Guesses is: ${10-Guesses.length}`;
        CleanUp(UserGuess);
    }else{
        HintMessage.innerHTML='Your Guess is High';
        RemainingGuess.innerHTML=`Remaining Guesses is: ${10-Guesses.length}`;
        CleanUp(UserGuess);
    }
}
function CleanUp(UserGuess){
    UserInput.value='';
    UserInput.focus();
    PreviousGuesses.innerHTML+=`${UserGuess}, `;
    RemainingGuess.innerHTML=`10-${Guesses.length}`;
}
function endGame(){
    UserInput.value='';
    UserInput.setAttribute('disabled',true);  
    PreviousGuesses.innerHTML='';
    PlayGame=false
    p.classList.add('button');
    p.innerHTML="<h2 id='StartGame'>Start NewGame</h2>"
    bottomPortion.appendChild(p)
    StartGame();
}
function StartGame(){
    const StartButton=document.querySelector('#StartGame');
    StartButton.addEventListener('click',function(e){
        e.preventDefault();
        RandomNumber=Math.floor(Math.random()*100)+1;
        UserInput.removeAttribute('disabled');
        RemainingGuess.innerHTML=10;
        bottomPortion.removeChild(p)
        Guesses=[];
        GuessCount=1;
        PlayGame=true;
        ResultMessage.innerHTML='';
        PreviousGuesses.innerHTML='';

    })
    

}