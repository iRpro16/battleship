function createWinnerPrompt(winner) {
    // winner div
    const createWinnerDiv = document.createElement('div');
    createWinnerDiv.classList.add('winner-div');

    // win message
    const winMessage = document.createElement('h1');
    winMessage.classList.add('win-message');
    winMessage.innerText = `${winner} has won the game!`;

    // restart button
    const playAgainBtn = document.createElement('button');
    playAgainBtn.classList.add("again-btn");
    playAgainBtn.innerText = 'Play again?';
    playAgainBtn.type = 'button';
    playAgainBtn.addEventListener('click', () => window.location.reload());

    createWinnerDiv.append(winMessage, playAgainBtn);

    return createWinnerDiv;
}

export default createWinnerPrompt;