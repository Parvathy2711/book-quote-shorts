import axios from "axios";

const API_URL = "http://localhost:5000/api/quotes";

export const getQuotes = () => axios.get(API_URL);
export const likeQuote = (id) => axios.post(`${API_URL}/like/${id}`);
