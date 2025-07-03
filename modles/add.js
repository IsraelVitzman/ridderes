import { Save, Import } from "./fileHelpers.js";

export async function AddRiddle(data) {
    const filePath = "./dataRiddles/riddles.txt";

    try {
        // שלב 1: קריאה קיימת
        const riddlesRaw = await Import(filePath);
        let riddles = [];

        try {
            riddles = JSON.parse(riddlesRaw);
        } catch (err) {
            console.warn("File was empty or not valid JSON. Starting fresh.");
        }


        riddles.push(data);

        await Save(filePath, JSON.stringify(riddles, null, 2));

        console.log("✅ Riddle added successfully.");
    } catch (err) {
        console.error("❌ Failed to add riddle:", err.message);
    }
}

