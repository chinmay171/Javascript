let guess = Math.floor(Math.random() * 90 + 10);
console.log(guess);

let guessesLeft = 10;

let currNumber = document.querySelector("#inputNumber");
let submit = document.querySelector(".submitGuess");
let attempsNo = document.querySelector(".attempsLeft");
let prevNo = document.querySelector(".prevGuess")

attempsNo.textContent = 'Guesses Remaining: 10'
prevNo.textContent = 'Previous Guesses: Null'

submit.addEventListener("click", function(){
    if(guessesLeft == 1){
        alert("You used all available guesses! \n Try again with new number by refreshing this page.")
        submit.disabled = true; 
    }
    guessesLeft--;

    let currInput = currNumber.value;
    if(currInput == guess){
        alert(`Got It!!! You are really good at guessing \n ${currInput} is the right guess. \n Wanna try it once more with new guess?`)
        location.reload();
    }
    
    currInput.value = '';
    prevNo.textContent = `Previous Guesses: ${currInput}`;
    attempsNo.textContent = `Guesses Remaining: ${guessesLeft}`
})