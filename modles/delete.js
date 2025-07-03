import { Save, Import } from "./fileHelpers";


export async function Delete(riddleId) {
    const filePath = "./dataRiddles/riddles.txt";
    try {
        const riddles = await Import(filePath);
        const updated = riddles.filter(r => r.id !== riddleId);
        await Save(filePath, updated);
        console.log("Riddle deleted successfully.");
    } catch (err) {
        console.error("Error deleting riddle:", err);
    }
}



