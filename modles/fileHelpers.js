import { readFile, writeFile } from "node:fs/promises";


export async function Import(filePath) {
    try {
        const data = await readFile(filePath, "utf-8");
        return data;
    } catch (err) {
        console.error(" Error reading file");
        throw err;
    }
}


export async function Save(filePath, data) {
    try {
        await writeFile(filePath, data, "utf-8");
        console.log("File saved successfully.");
    } catch (err) {
        console.error(" Error saving file");
        throw err;
    }
}
