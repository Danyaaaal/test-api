import express from "express";

const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/random-number", (req, res) => {
  const number = Math.floor(Math.random() * 100);
  res.send(number);
});

app.listen(PORT, () => {
  console.log(`server running om http://localhost:${PORT}`);
});
