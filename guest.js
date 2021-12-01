let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');
let guessCount = 10;
let resetButton=document.querySelector('resetButton');
let compteur = document.querySelector('.compteur');


console.log(randomNumber);


function checkGuess(){
    let userGuess = Number(guessField.value);
    guesses.textContent += userGuess + ' ';
    compteur.textContent = `NOMBRE DE TENTATIVE ${guessCount}`;
    if (guessCount === 1) {
      guesses.textContent = 'Propositions précédentes : ';
    }
  
    if (userGuess === randomNumber && guessCount >= 9) {
      lastResult.textContent = 'Bravo, vous ETES GENIE !';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    }

    // else if (userGuess === randomNumber ) {
    //   lastResult.textContent = 'Félicitations, vous avez gagné après N tentatives';
    //   lastResult.style.backgroundColor = 'green';
    //   lowOrHi.textContent = '';
    //   setGameOver();
    // }
    else if(userGuess===randomNumber){
      lastResult.textContent = `Félicitations, vous avez gagné après ${guessCount}  tentatives `;
      lastResult.style.backgroundColor = 'yellow';

    }

    
    else if (guessCount === 0) {
       lastResult.textContent = '!!! PERDU !!!';
       setGameOver();
    } else {
       lastResult.textContent = 'Faux !';
       lastResult.style.backgroundColor = 'red';
       if (userGuess < randomNumber) {
        lowOrHi.textContent = 'Le nombre saisi est trop petit !';
       } else if (userGuess > randomNumber) {
        lowOrHi.textContent = 'Le nombre saisi est trop grand !';
       }
    } 
     guessCount--;

  }

  
   
    guessField.value = '';
    guessField.focus();
    guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
        guessField.focus();


      }
      

  

  function resetGame() {
    guessCount = 1;
  
    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  

