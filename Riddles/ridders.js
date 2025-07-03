import { time, addTimeForAllRidders, returnTime } from '../time/time.js';
import { riddle } from '../riddle/riddle.js';

export function Ridders(ridders) {

    const startTime = time();
    for (var ridder of ridders) {
        riddle(ridder)
    }
    const endTime = time();
    addTimeForAllRidders(returnTime(startTime, endTime));
}

