import express from "express";
import Quote from "../models/Quote.js";

const router = express.Router();

// Get all quotes
router.get("/", async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Like a quote
router.post("/like/:id", async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    quote.likes += 1;
    await quote.save();
    res.json(quote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
