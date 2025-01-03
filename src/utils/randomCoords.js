function generateCoordinates(max) {
    // start coordinates
    let x = Math.floor(Math.random() * max);
    let y = Math.floor(Math.random() * max);

    // return start coordinates
    return [x, y];
}

export default generateCoordinates;