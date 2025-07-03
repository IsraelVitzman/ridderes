import { Save, Import } from "./fileHelpers.js";

export async function UpdateRiddle(riddleId, newData) {
    const filePath = "./dataRiddles/riddles.txt";;
    try {
        const riddles = await Import(filePath);
        const index = riddles.findIndex(r => r.id === riddleId);
        if (index === -1) {
            console.log("Riddle not found.");
            return;
        }

        riddles[index] = { ...riddles[index], ...newData };
        await Save(filePath, riddles);
        console.log("Riddle updated.");
    } catch (err) {
        console.error("Update failed:", err);
    }
}
