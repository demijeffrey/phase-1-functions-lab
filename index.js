// Code your solution in this file!
function distanceFromHqInBlocks(destination, hq=42) {
    if (destination > hq) {
    return destination - hq
    } else {
        return hq - destination
    }
}

function distanceFromHqInFeet(destination, hq) {
    distanceFromHqInBlocks(destination, hq);
    return distanceFromHqInBlocks(destination, hq) * 264
}

function distanceTravelledInFeet (start, destination) {
    function blocks(start, destination) {
        if (start > destination) {
            return start - destination
        } else if (start < destination) {
            return destination - start
        }
    }
    return blocks(start, destination) * 264
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)
    if (feet < 400) {
        return 0
    } else if (feet > 400 && feet <=2000) {
        return (feet-400) * 0.02
    } else if (feet > 2000 && feet < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}