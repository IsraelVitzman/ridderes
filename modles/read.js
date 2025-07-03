import { readFile } from "node:fs/promises";

export async function RaedRidders() {
    const filePath = "./dataRiddles/riddles.txt";

    try {
        const data = await readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        console.error(" Invalid error");
        throw err;
    }
}


