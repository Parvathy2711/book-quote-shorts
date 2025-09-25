import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  text: String,
  author: String,
  book: String,
  likes: { type: Number, default: 0 },
});

export default mongoose.model("Quote", QuoteSchema);
