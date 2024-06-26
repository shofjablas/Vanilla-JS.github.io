const numberForm = document.querySelector('#number-form');
const numberInput = document.querySelector('#number-input');
const numberGuess = document.querySelector('#number-guess');
const result = document.querySelector('#result');

function numberEnter(event) {
  event.preventDefault();

  const maxNum = parseInt(numberInput.value);
  const guessNum = parseInt(numberGuess.value);

  const randomNum = Math.floor(Math.random() * (maxNum + 1));

  let resultMessage = `You chose: ${guessNum}, the machine chose: ${randomNum}.`;
  if (guessNum === randomNum) {
    resultMessage += `You Win`;
  } else {
    resultMessage += `You lose`;
  }
  result.textContent = resultMessage;
}

numberForm.addEventListener('submit', numberEnter);
