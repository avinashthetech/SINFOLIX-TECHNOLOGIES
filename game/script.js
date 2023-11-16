let score = 0;

function rollDice() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.getElementById('die');
    const diceSound = document.getElementById('diceSound');

    // Change the dice image based on the random number
    diceImage.src = `dice${randomNum}.png`;

    // Play the dice rolling sound
    diceSound.play();

    // Update the score
    score += randomNum;
    document.getElementById('score').textContent = `Score: ${score}`;
}





