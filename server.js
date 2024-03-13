import express from "express";

const PORT = process.env.PORT_ENV
const app = express();
const enviornment = process.env.NODE_ENV

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/random-number", (req, res) => {
  const number = Math.floor(Math.random() * 100);
  res.send(number.toString());
});

app.listen(PORT, () => {
    if (enviornment === "development") {
        console.log(`server running om http://localhost:${PORT}`)
    } else {
  console.log(`server running o production`);
    }
});
