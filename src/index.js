import "./styles.css"
import Gameboard  from "./components/gameboard";
import renderHeader from "./ui/header";
import renderBoard from "./ui/renderBoard";
import Player from "./components/player";

const loadPage = (function () {
    // player and enemy vars
    let player = Player("player");
    let enemy = Player("enemy");

    // init and display
    const initPlayerShips = () => {
        player.initPlayerShips();
        enemy.initPlayerShips();
    }

    // render page
    const renderPage = () => {
        renderHeader.createHeader();
        // both players
        renderBoard.appendBoards(player);
        renderBoard.appendBoards(enemy);
    }

    return {
        initPlayerShips,
        renderPage
    }
})();

loadPage.initPlayerShips()
loadPage.renderPage();