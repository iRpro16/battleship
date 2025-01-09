/**
 * 
 * @param {Number} length - the length of the ship
 */
function Ship(length, name) {
    let hits = 0;

    let sunk = false;

    const hit = () => {
        if (!sunk) hits++;
        isSunk(hits);
        return hits;
    }

    const isSunk = (numHits) => {
        if (numHits === length) sunk = true;
        return sunk;
    }

    const getHits = () => hits;

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