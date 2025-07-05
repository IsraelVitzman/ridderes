import { readFile, writeFile } from "node:fs/promises";


export async function Import(filePath) {
    try {
        const data = await readFile(filePath, "utf-8");
        return data.trim() ? JSON.parse(data) : {};
    } catch (err) {
        console.error("Error reading file:", err.message);
        throw err;
    }
}


export async function Save(filePath, data) {
    try {
        await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
        console.log("File saved successfully.");
    } catch (err) {
        console.error("Error saving file:", err.message);
        throw err;
    }
}
