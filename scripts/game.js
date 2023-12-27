const gameArea = document.getElementById('gameArea');
const rice = document.getElementById('fallingRice');
const bowl = document.getElementById('bowl');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
let score = 0;
let lives = 3;
let riceFallingInterval, riceHorizontalInterval;

function startGame() {
    bowl.style.left = (gameArea.offsetWidth - bowl.offsetWidth) / 2 + 'px';
    rice.style.top = '-50px';

    moveRice();
    moveBowl();
}

function moveRice() {
    let riceX = Math.floor(Math.random() * (gameArea.offsetWidth - rice.offsetWidth));
    rice.style.left = riceX + 'px';
    rice.style.top = '110px'; // Start from 110 pixels from the top
    let riceY = 110;

    // Show the GIF
    const prepGif = document.getElementById('prepGif');
    prepGif.style.display = 'block';
    // Align the center of the GIF with the center of the rice
    prepGif.style.left = (riceX + (rice.offsetWidth / 2) - (prepGif.offsetWidth / 2)) + 'px';
    // Position the GIF just above the rice's starting position
    prepGif.style.top = (riceY - prepGif.offsetHeight) + 'px';

    // Start the rice falling after a delay of 1 second
    setTimeout(function() {
        riceFallingInterval = setInterval(function() {
            riceY += 5;
            rice.style.top = riceY + 'px';

            if (riceY > gameArea.offsetHeight - bowl.offsetHeight) {
                if (isRiceCaught(riceX)) {
                    score++;
                    scoreDisplay.textContent = 'Score: ' + score;
                } else {
                    lives--;
                    livesDisplay.textContent = 'Lives: ' + lives;
                    if (lives === 0) {
                        alert('Game Over! Your score was ' + score);
                        score = 0;
                        lives = 3;
                        scoreDisplay.textContent = 'Score: 0';
                        livesDisplay.textContent = 'Lives: 3';
                    }
                }
                clearInterval(riceFallingInterval);
                moveRice();
            }
        }, 50);
    }, 1000); // Start rice falling after 1 second

    // Hide the GIF after its full duration
    setTimeout(function() {
        prepGif.style.display = 'none';
    }, 3000); // Adjust this duration to match the length of your GIF
}

function isRiceCaught(riceX) {
    let bowlX = bowl.offsetLeft;
    let bowlWidth = bowl.offsetWidth;
    return riceX >= bowlX && riceX <= (bowlX + bowlWidth);
}

function moveBowl() {
    document.addEventListener('keydown', function(event) {
        let bowlX = bowl.offsetLeft;
        if (event.key === 'ArrowLeft' && bowlX > 0) {
            bowl.style.left = (bowlX - 10) + 'px';
        } else if (event.key === 'ArrowRight' && bowlX < (gameArea.offsetWidth - bowl.offsetWidth)) {
            bowl.style.left = (bowlX + 10) + 'px';
        }
    });
}

startGame();
