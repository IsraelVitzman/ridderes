export function time() {
    return Date.now()
}

export function returnTime(start, end) {
    return (end - start) / 1000;
}

const secondsList = [];
let allTime = 0;


export function addSecondsForQuestion(sec) {
    secondsList.push(sec);
}
export function getSecondsForQuestion() {

    const sum = secondsList.reduce((acc, current) => acc + current, 0);
    return sum / secondsList.length;
}


export function addTimeForAllRidders(sec) {
    allTime = sec;

}
export function getTimeForAllRidders() {
    return allTime;
}




