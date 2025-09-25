// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import quotesRoute from "./routes/quotes.js";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection (options removed because v4+ does not need them)
mongoose.connect("mongodb://127.0.0.1:27017/bookQuotes")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/quotes", quotesRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
