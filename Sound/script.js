let buttons = document.querySelectorAll('.simon-button');
let scoreDisplay = document.getElementById('score-display');
let levelDisplay = document.getElementById('level-display');
let gamePattern = [];
let userPattern = [];
let level = 0;
let score = 0;

function playSound(color) {
    const audio = document.getElementById(`${color}-sound`);
    audio.play();
}

function playSequence(pattern) {
    pattern.forEach((color, index) => {
        setTimeout(() => {
            playSound(color);
            animateButton(color);
        }, 1000 * index);
    });
}

function animateButton(color) {
    const button = document.getElementById(color);
    button.classList.add('flash');
    setTimeout(() => {
        button.classList.remove('flash');
    }, 500);
}

function startGame() {
    level = 0;
    score = 0;
    gamePattern = [];
    userPattern = [];
    updateScore();
    nextSequence();
}

function nextSequence() {
    const colors = ['green', 'red', 'yellow', 'blue'];
    const randomColor = colors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomColor);

    playSequence(gamePattern);
    level++;
    levelDisplay.textContent = `Level: ${level}`;
}

function handleButtonClick(color) {
    userPattern.push(color);
    playSound(color);
    animateButton(color);
    checkAnswer(userPattern.length - 1);
}

function checkAnswer(currentLevel) {
    if (userPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userPattern.length === gamePattern.length) {
            setTimeout(() => {
                userPattern = [];
                score++;
                updateScore();
                nextSequence();
            }, 1000);
        }
    } else {
        playSound('error');
        gameOver();
    }
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function gameOver() {
    alert(`Game Over! Your score: ${score}`);
    startGame(); // Restart the game after game over
}
