import "./styles.css"
import renderHeader from "./ui/header";
import gameController from "./controllers/gameController";

const loadPage = (function () {
     // init and display
    const initPlayerShips = () => {
        gameController.init()
    }

    // render page
    const renderPage = () => {
        // create the header
        renderHeader.createHeader();
        
        // both players
        gameController.renderBoards()
    }

    return {
        initPlayerShips,
        renderPage
    }
})();

loadPage.initPlayerShips()
loadPage.renderPage();