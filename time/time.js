export function time() {
    return Date.now()
}

export function returnTime(start, end) {
    return (end - start) / 1000;
}

const secondsList = [];
let allTime = 0;

export function addSecondsForAsk(sec) {
    secondsList.push(sec);
}

export function getSecondsForAsk() {
    const sum = secondsList.reduce((acc, current) => acc + current, 0);
    return sum;
}

export function addTimeForAllRidders(sec) {
    allTime = sec;

}
export function timeLimit(time) {
    if (time > 5) {
        console.log("You got a fine 5 scconds");
        return time + (5 / 100)
    }
}
export function timeHint(time) {
    console.log("You got a fine 5 scconds for hint");
    return time + (5 / 100)

}

export function getTimeForAllRidders() {
    return allTime;
}
