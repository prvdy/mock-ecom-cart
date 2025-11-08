const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Wireless Mouse", price: 499 },
  { id: 2, name: "Keyboard", price: 999 },
  { id: 3, name: "Headphones", price: 1499 },
  { id: 4, name: "Smartwatch", price: 1999 },
  { id: 5, name: "USB-C Cable", price: 299 }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => console.log(`✅ Backend running on http://localhost:${port}`));
