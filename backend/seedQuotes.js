import mongoose from "mongoose";
import Quote from "./models/Quote.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read JSON dynamically
const quotesData = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "quotes.json"), "utf-8"));

mongoose.connect("mongodb://127.0.0.1:27017/bookQuotes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedQuotes() {
  try {
    await Quote.deleteMany({});
    await Quote.insertMany(quotesData);
    console.log("Database seeded with quotes!");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

seedQuotes();
