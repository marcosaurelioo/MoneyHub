import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CRYPTO_API_URL,
  headers: {
    "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_CRYPTO_API_KEY,
  },
});
