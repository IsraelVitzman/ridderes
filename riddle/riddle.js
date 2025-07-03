import { time, returnTime, addSecondsForQuestion } from '../time/time.js';
import { QuestionsManager } from '../Questions Manager/QuestionsManager.js';

export function riddle(riddle) {
    const startTime = time();
    QuestionsManager(riddle)
    const endAskTime = time();
    addSecondsForQuestion(returnTime(startTime, endAskTime));

}


