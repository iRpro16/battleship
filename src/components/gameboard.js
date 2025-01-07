import Ship from "./ship";
import helperFunctions from "../utils/helperFunctions";

function Gameboard() {
    // create 10 x 10 board filled with 0s
    let board = create2DArray( {rows: 10, columns: 10, value: 0} );

    // get ships
    let ships = createShips();

    // logged hits
    let loggedHits = [];

     // create array
     function create2DArray ({rows, columns, value}) {
        return Array.from({ length: rows }, () => (
            Array.from({ length: columns }, () => value)
        ));
    }

    /**
     * 
     * @param {Object} coordinates - the x, y coordinates as an array of a spot on the board
     * @param {Object} ships - an array of objects, which are the ship objects
     * @returns 
     */
    const receiveAttack = (coordinates, ships) => {
        // get coordinates
        let [x, y] = coordinates;

        // get coordinate
        let coordinate = board[x][y];

        // if spot already attacked
        if (loggedHits.includes(`[${coordinates}]`)) return 'Already hit this spot';

        // push to loggedhits
        loggedHits.push(`[${coordinates}]`);
        
        // match with ship
        if (coordinate !== 0) {
            // get ship
            let hitShip = logHit(coordinate, ships);
            hitShip.hit();
            board[x][y] = [hitShip.name, 'hit'];
            return true;
        } else {
            board[x][y] = 'x';
            return false;
        }
    }

    /**
     * 
     * @param {Object} ship - a ship object from Ship factory function
     * @param {Object} start - the x, y coordinates as an array of a spot on the board
     * @param {String} orientation - whether the ship is horizontal or vertical
     * @returns 
     */
    const placeShip = (ship, start, orientation) => {
        // coordinates
        let [x, y] = start;

        // possible postions
        let possiblePositions = [];

        // distance
        let distance = ship.length - 1;

        // push coordinates
        for (let i = 0; i <= distance; i++) {
            // new vars
            let newX = orientation === 'horizontal' ? x : x + i;
            let newY = orientation === 'horizontal' ? y + i : y;

            possiblePositions.push([newX, newY]);
        }

        // check if values are true
        if(possiblePositions.every(isTrue)) {
            // check each coordinate
            for (const coordinate of possiblePositions) {
                board[coordinate[0]][coordinate[1]] = ship.name;
            }
            return true;
        }
        return false;
    }

    // callback function to check if true
    const isTrue = (coordinate) => {
        if (onBoard(coordinate) && isEmpty(coordinate)) return true;
        return false;
    }
     // create ships
     function createShips () {
        // ships array
        const ships = [];

        // classic ships of Battleship
        const carrier = Ship(5, "carrier");
        const battleship = Ship(4, "battleship");
        const cruiser = Ship(3, "cruiser");
        const submarine = Ship(3, "submarine");
        const destroyer = Ship(2, "destroyer");

        // push all
        ships.push(carrier, battleship, cruiser, submarine, destroyer);

        // return array of ships
        return ships;
    }

    // initialize random ship positions
    const initShips = () => {
        // clear board first
        clearBoard();

        // orientations
        let orientations = ['horizontal', 'vertical'];

        // for each ship
        ships.forEach((ship) => {
            let placed = false;

            while(!placed) {
                // get random coordinates
                let start = helperFunctions.generateCoordinates(10);

                // choose random orientation
                let index = Math.floor(Math.random() * 2);

                // attempt to place ship
                placed = placeShip(ship, start, orientations[index]);
            }
        })
    }

    // shinks sunk
    const shipsSunk = (ships) => {
        let numShipsSunk = ships.filter((ship) => ship.getSunkStatus());
        if (numShipsSunk.length === 5) return true;
        return false;
    }

    // on board
    const onBoard = (coordinates) => {
        let [x, y] = coordinates;
        return x >= 0 && y <= 9 && x <= 9 && y >= 0;
    }

    // space occupied
    const isEmpty = (coordinates) => {
        let [x, y] = coordinates;
        return board[x][y] === 0;
    }

    // log hit
    const logHit = (shipName, ships) => {
        // get hit ship
        return ships.find((ship) => ship.name === shipName);
    }

    // clear board
    const clearBoard = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = 0;
            }
        }
    }

    return {
        board,
        ships,
        placeShip,
        receiveAttack,
        shipsSunk,
        createShips,
        initShips
    }
}

export default Gameboard;