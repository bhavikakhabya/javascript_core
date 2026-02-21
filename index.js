import fs from "fs/promises";

// CREATE FILE
async function createFile(name, content) {
    try {
        await fs.writeFile(name, content);
        console.log("✅ File created successfully");
    } catch (error) {
        console.log("❌ Error creating file:", error.message);
    }
}

// READ FILE
async function readFile(name) {
    try {
        const data = await fs.readFile(name, "utf-8");
        console.log("📄 File Content:\n", data);
    } catch (error) {
        console.log("❌ Error reading file:", error.message);
    }
}

// APPEND TEXT
async function appendFile(name, content) {
    try {
        await fs.appendFile(name, content);
        console.log("✏️ Text added successfully");
    } catch (error) {
        console.log("❌ Error appending file:", error.message);
    }
}

// DELETE FILE
async function deleteFile(name) {
    try {
        await fs.unlink(name);
        console.log("🗑️ File deleted successfully");
    } catch (error) {
        console.log("❌ Error deleting file:", error.message);
    }
}

await createFile("test.txt", "Hello Bhavika! How are you?");
await appendFile("test.txt", "\nThis is new text.");
await readFile("test.txt");