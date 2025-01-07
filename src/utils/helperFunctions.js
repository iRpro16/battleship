const helperFunctions = (function() {
    // generate random coordinates
    const generateCoordinates = (max) => {
        // start coordinates
        let x = Math.floor(Math.random() * max);
        let y = Math.floor(Math.random() * max);

        // return start coordinates
        return [x, y];
    }

    // convert id input to array
    const convertInput = (string) => {
        let stringCoors = string.split(' ');
        return stringCoors.map((num) => parseInt(num));
    }

    // adjacent coordinates
    const getAdjacentCoordinates = (lastMove) => {
        // get x and y
        let [x,y] = lastMove;
        let binaryIndex = Math.floor(Math.random() * 2);

        // adjacent moves
        let moves = [-1, 1];

        // if
        if (binaryIndex === 0) {
            let newY = y + moves[Math.floor(Math.random() * 2)];
            return [x, newY];
        } else {
            let newX = x + moves[Math.floor(Math.random() * 2)];
            return [newX, y];
        }
    }

    return {
        generateCoordinates, 
        convertInput
    };
})();

export default helperFunctions;

/**
 * either let x remain constant, and change y either up or down
 * or let x change, and make y remain the same
 */