/**
 * 
 * @param {Number} length - the length of the ship
 */
function Ship(length, name) {
    // number of hits
    let hits = 0;
    // is sunk
    let sunk = false;

    // hit() method
    const hit = () => {
        if (!sunk) hits++;
        isSunk(hits);
        return hits;
    }

    // isSunk() method
    const isSunk = (numHits) => {
        if (numHits === length) sunk = true;
        return sunk;
    }

    // get num hits
    const getHits = () => hits;

    // get if sunk
    const getSunkStatus = () => sunk;

    return {
        length: length,
        name: name,
        getSunkStatus,
        getHits,
        hit, 
        isSunk
    }
}

export default Ship;