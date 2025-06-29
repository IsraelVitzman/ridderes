import readlineSync from 'readline-sync';

import { getRiddersEesy, getRiddersMedum, getRiddersHard, getLangteEesy, getLangteMedum, getLangteHard } from './ridddles/index.js';
import { namePlayer } from './classes/Player.js';
import { startriderts } from './classes/Riddle.js';
import { getSecondsForAsk, getTimeForAllRidders } from './time/time.js';


class startGame {
    start() {
        let result = null;
        let length = null;
        console.log("Welcome to riddle Game");
        const name = readlineSync.question("What is your name");

        console.log("esey  1");
        console.log("medum 2");
        console.log("hard  3");
        const difficultyLevel = readlineSync.question("choose  difficulty level ");
        switch (difficultyLevel) {
            case "1":
                result = getRiddersEesy();
                length = getLangteEesy();
                break;

            case "2":
                result = getRiddersMedum();
                length = getLangteMedum();
                break

            case "3":
                result = getRiddersHard();
                length = getLangteHard();
                break

            default:
                break;
        }
        const game = new startriderts(result);
        game.ask();

        const allTime = getTimeForAllRidders();
        const average = getSecondsForAsk() / length;

        console.log(`allTime: ${allTime}`);
        console.log(`average: ${average}`);


        const player = new namePlayer(name, average, allTime);
        player.add();
    }
}

const game = new startGame();
game.start();


