import readlineSync from 'readline-sync';


import { Player } from '../players/Player.js';

import { getSecondsForQuestion, getTimeForAllRidders } from '../time/time.js';
import { readAllRiddles } from '../modles/read.js';
import { Ridders } from '../Riddles/ridders.js';

export async function ManagerGame() {

    console.log("Welcome to riddle Game");
    const namePlayer = readlineSync.question("What is your name");

    const riddles = await readAllRiddles();
    await Ridders(riddles);



    const allTime = getTimeForAllRidders();
    const averageTime = getSecondsForQuestion();


    console.log(`allTime: ${allTime}`);
    console.log(`average: ${averageTime}`);

    const player = new Player(namePlayer, averageTime, allTime);
    player.add();

}




