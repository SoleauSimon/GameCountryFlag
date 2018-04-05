

var time = document.querySelector('.time span');
var score = document.querySelector('strong');
var scoreNumber = score.textContent;
var counter = time.textContent;
var game_over = document.querySelector('#game-over');
var restart = document.querySelector('.restart');
var images = document.querySelectorAll('.img');
var find_country = document.querySelector('h2');
var clickImage = document.querySelectorAll('.flag');
var lives = document.querySelectorAll('.lives img');
var gameMain = document.querySelector('#game');
var startButton = document.querySelector('#game-start button');
var game_start = document.querySelector('#game-start');
var time = document.querySelector('.time span');
var game_over = document.querySelector('#game-over');
var game_overBtn = document.querySelector('#game-over button');
var game = document.querySelector('#game');
var counter = time.textContent;
var random = "";
var code = "";
var Name = "";
var countryName = "";

//gestion du temps / du start / du gameover

startButton.addEventListener('click', function() {
  game_start.style.display = 'none';
});
game_overBtn.addEventListener('click', function() {
  game_over.style.display = 'none';
  game.style.display = 'block';
  counter = 20;
});

// gestion du counter jusqu'au gameOver

function counterFunc() {
  if (counter > 0) {
    counter--;
    time.textContent = counter;
  } else {
    clearInterval();
    game_over.style.display = 'block';
  }
}
setInterval(counterFunc, 1000);

// génération des flags aléatoirement

 function randomFlag() {
  for ( var i = 0; i < 4; i++ ){
   random = Math.floor(Math.random() * flags.length) +1;
   code = flags[random].code;

   images[i].setAttribute('src', 'flags/' + code + '.svg');
   images[i].dataset.countryName = flags[random].name
   }
   Name = Math.floor(Math.random() * 4)
   countryName = images[Name].dataset.countryName
   find_country.innerHTML = countryName;

// gestion du scoreNumber et de la vie

  for (let i = 0; i < clickImage.length; i++) {
    clickImage[i].addEventListener('click', function () {
        if (clickImage[i].firstChild.dataset.countryName == countryName ) {
          scoreNumber ++;
          score.textContent = scoreNumber;
          randomFlag();
        }else if (clickImage[i].firstChild.dataset.countryName || countryName ){
          clickImage[i].classList.add('is-active');
          lives[i].classList.add('is-active');
        }
      });
      clickImage[i].classList.remove('is-active');
     }
    }
  randomFlag();
