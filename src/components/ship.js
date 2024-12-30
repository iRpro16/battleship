/**
 * 
 * @param {Number} length - the length of the ship
 */
export function Ship(length, name) {
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

    return {
        length: length,
        name: name,
        getHits,
        hit, 
        isSunk
    }
}

module.exports = Ship;