import express from "express";

const HOST = process.env.HOST
const PORT = process.env.PORT
const app = express();
const enviornment = process.env.NODE_ENV

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/random-number", (req, res) => {
  const number = Math.floor(Math.random() * 100);
  res.json({value: number});
});

app.get("/greeting", (req, res) => {
	const greetings = ["hey", "hi", "hola", "ciao"];
	const greetingIndex = Math.floor(Math.random() * greetings.length);
	res.json({ value: greetings[greetingIndex] })
})

app.listen(PORT, () => {
    if (enviornment === "development") {
        console.log(`server running om ${HOST}:${PORT}`)
    } else {
  console.log(`server running o production`);
    }
});
