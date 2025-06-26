import readlineSync from 'readline-sync';

import { getRidders } from './ridddles/index.js';
import { namePlayer } from './classes/Player.js';
import { startriderts } from './classes/Riddle.js';
import { getSecondsForAsk, getTimeForAllRidders } from './time/time.js';
import { getLangte } from './ridddles/index.js';

class startGame {
    start() {
        console.log("Welcome to riddle Game");
        const name = readlineSync.question("What is your name");

        const game = new startriderts(getRidders());
        game.ask();

        const allTime = getTimeForAllRidders();
        const average = getSecondsForAsk() / getLangte();

        console.log(`allTime: ${allTime}`);
        console.log(`average: ${average}`);


        const player = new namePlayer(name, average, allTime);
        player.add();
    }
}

const game = new startGame();
game.start();


