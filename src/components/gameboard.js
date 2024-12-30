import { Ship } from "./ship";

export function Gameboard() {
    // create array
    const create2DArray = ({rows, columns, value}) => {
        return Array.from({ length: rows }, () => (
            Array.from({ length: columns }, () => value)
        ));
    }
    
    // create 10 x 10 board filled with 0s
    let board = create2DArray( {rows: 10, columns: 10, value: 0});

    // create array of ships
    let ships = []

    // logged hits
    let loggedHits = [];

    // receiveAttack()
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
            return 'you missed';
        }
    }

    // place ship
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
        board: board,
        placeShip,
        receiveAttack,
        shipsSunk
    }
}

module.exports = Gameboard;