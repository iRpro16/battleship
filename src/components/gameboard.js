import Ship from "./ship";

function Gameboard() {
    // create 10 x 10 board filled with 0s
    let board = create2DArray( {rows: 10, columns: 10, value: 0});

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
        } else {
            board[x][y] = 'x';
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

        // distance
        let distance = ship.length - 1;

        // place ship
        for (let i = 0; i <= distance; i++) {
            // new vars
            let newX = orientation === 'horizontal' ? x : x + i;
            let newY = orientation === 'horizontal' ? y + i : y;

            // if on board and is not occupied
            if (onBoard([newX, newY]) && isEmpty([newX, newY])) {
                board[newX][newY] = ship.name;
            } else {
                return 'cannot place ship here';
            }
        }
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

    // shinks sunk
    const shipsSunk = (ships) => {
        let numShipsSunk = ships.filter((ship) => ship.getSunkStatus());
        if (numShipsSunk.length === 5) return 'all ships sunk';
        return 'still missing ships!';
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

    return {
        board,
        ships,
        placeShip,
        receiveAttack,
        shipsSunk,
        createShips
    }
}

module.exports = Gameboard;
export default Gameboard;