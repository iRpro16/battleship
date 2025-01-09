import gameScreen from "./gameScreen";

function startButton(player) {
    const startBtn = document.querySelector('.start-btn');
    const randomizeBtn = document.querySelector('.randomize-btn');

    // add event listeners
    startBtn.addEventListener('click', () => {
        if (player.name === 'enemy') {
            // disable
            startBtn.disabled = true;
            randomizeBtn.disabled = true;

            // get enemyboard
            const items = document.querySelectorAll('.board-enemy > div');
            items.forEach((item) => {
                item.addEventListener('click', gameScreen.handleEnemyBoardClick, {once: true})
            })
        }
    })
}

export default startButton;