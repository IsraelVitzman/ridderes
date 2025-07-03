import readlineSync from 'readline-sync';


export function QuestionsManager(ridder) {

    let answer = null;

    console.log(ridder.id);
    console.log(ridder.name);

    do {
        console.log(ridder.question);
        answer = readlineSync.question("what your anser /if you wont hint write hint ");
        if (answer === "hint") {
            console.log(ridder.hint);

        }

        if (answer !== ridder.answer) {
            console.log("this misstek... try agen");
            console.log("-------------------------");
        }
    }

    while (answer !== ridder.answer);
    console.log("good anser ");

}


