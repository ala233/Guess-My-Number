

// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;//element不只有textcontent
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}//将传入的message参数设置为类名为.message的HTML元素的文本内容


document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //When there is no input
  if(!guess) {
   //document.querySelector('.message').textContent = '⛔️ No number!'
   displayMessage('⛔️ No number!')
  }
  //When player wins
  else if(guess === secretNumber){
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor= '#60b347';//多个单词取名一定要驼峰，等于的值一定要是字符串

    document.querySelector('.number').style.width = '30rem';

    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  }else if(guess!==secretNumber){
    if(score>1){
      //document.querySelector('.message').textContent = guess > secretNumber ?'📈Too high!' : '📉Too low!';
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;} else {
        //document.querySelector('.message').textContent = '💥You lost the game!';
        displayMessage('💥You lost the game!')
        document.querySelector('.score').textContent = 0;
      }
  }
});

document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  secretNumber = Math.floor(Math.random()*20) + 1; //reassign the score and secretNumber
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value= '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})