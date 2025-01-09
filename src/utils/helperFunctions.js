const helperFunctions = (function() {
    const generateCoordinates = (max) => {
        // start coordinates
        let x = Math.floor(Math.random() * max);
        let y = Math.floor(Math.random() * max);

        // return start coordinates
        return [x, y];
    };

    const convertInput = (string) => {
        let stringCoors = string.split(' ');
        return stringCoors.map((num) => parseInt(num));
    };

    const arrStringToArr = (string) => {
        let strringCoors = string.split('');
        return strringCoors.map((num) => parseInt(num))
        .filter((num) => !Number.isNaN(num));
    };

    const getAdjacentCoordinates = (lastMove) => {
        // if undefined
        if (lastMove === undefined) return null;

        // convert
        let coordinates = arrStringToArr(lastMove);

        // get x and y
        let [x,y] = coordinates;
        let axis = Math.floor(Math.random() * 2);

        // adjacent moves
        let moves = [-1, 1];
        let newY = y + moves[Math.floor(Math.random() * 2)];
        let newX = x + moves[Math.floor(Math.random() * 2)];

        if (axis === 0) {
            while (newY > 9 || newY < 0) {
                newY = y + moves[Math.floor(Math.random() * 2)];
            }
            return [x, newY];
        } else {
            while (newX < 0 || newX > 9) {
                newX = x + moves[Math.floor(Math.random() * 2)];
            }
            return [newX, y];
        }
    };

    return {
        generateCoordinates, 
        convertInput,
        getAdjacentCoordinates
    };
})();

export default helperFunctions;