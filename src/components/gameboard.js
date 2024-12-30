export function Gameboard() {
    // create array
    const create2DArray = ({rows, columns, value}) => {
        return Array.from({ length: rows }, () => (
            Array.from({ length: columns }, () => value)
        ));
    }
    
    // create 10 x 10 board filled with 0s
    let board = create2DArray( {rows: 10, columns: 10, value: 0});

    // receiveAttack()
    const receiveAttack = (coordinates) => {

    }

    // place ship
    const placeShip = (ship, start, orientation) => {
        // coordinates
        let x = start[0];
        let y = start[1];

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

    return {
        board: board,
        placeShip
    }
}

module.exports = Gameboard;

/**
 * this means the input of where I drag the boat, must be used
 * as input to then place ship function.
 * 
 * [0, 0] as starting point
 * if length is 3, then it is length - 1
 * if horizontal: it is [0, 0], [0,1], [0, 2] where length is 3.
 * therefore [x][i]
 * 
 * let's say its bottom half:
 * so [6, 2] as starting point, with ship length 3 and horizontal
 * --> [6, 2 + 0] = [6, 2]
 * --> [6, 2 + 1] = [6, 3]
 * --> [6, 2 + 2] = [6, 4]
 * 
 * 
 * cases:
 * where x1 and x2 are the same -> horizontal so we do y2 - y1 along x.
 * where y1 and y2 are the same -> vertical so we do x2 - x1 along y
 */