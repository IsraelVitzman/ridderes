import readlineSync from 'readline-sync';


import { time, returnTime, addSecondsForAsk, addTimeForAllRidders } from '../time/time.js';

export class startriderts {

    constructor(ridders) {

        this.ridders = ridders

    }

    ask() {

        const startAll = time();

        for (let ridder of this.ridders) {

            let answer = null;

            const startTime = time()

            console.log(ridder.id);
            console.log(ridder.name);

            do {

                console.log(ridder.question);
                answer = readlineSync.question("what your anser");
                console.log(typeof answer);



                if (answer !== ridder.answer) {

                    console.log("this misstek... try agen");
                    console.log("-------------------------");

                }

            }
            while (answer !== ridder.answer);

            const endAskTime = time();

            addSecondsForAsk(returnTime(startTime, endAskTime));

            console.log("good anser ");

        }
        const endAllTime = time()
        const scondsForRidder = returnTime(startAll, endAllTime)
        addTimeForAllRidders(scondsForRidder)

    }

}


