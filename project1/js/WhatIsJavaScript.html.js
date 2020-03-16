// 創造1~100的變數
let randomNumber = Math.floor(Math.random()*100)+1;

// 輸出猜測數字 
const guesses = document.querySelector('.guesses');
// 輸出結果文字
const lastResult = document.querySelector('.lastResult');
// 輸出太低或太高
const lowOrHi = document.querySelector('.lowOrHi');

// 抓取按鈕
const guessSubmit = document.querySelector('.guessSubmit');
// 抓取輸入數值
const guessField = document.querySelector('.guessField');

// 設定回合數=1
let guessCount=1;
//重製按鈕
let resetButton;


guessSubmit.addEventListener('click',checkGuess);




function checkGuess() {
    var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = '你輸入過的數字:';
  }
  guesses.textContent += userGuess + ' ';
 
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = '數字太小';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = '數字太大';
    }
  }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();
  }

