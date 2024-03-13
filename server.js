import express from "express";

const API_KEY =process.env.API_KEY
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const app = express();
const enviornment = process.env.NODE_ENV;

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/random-number", (req, res) => {
  const number = Math.floor(Math.random() * 100);
  res.json({ value: number });
});

app.get("/greeting", (req, res) => {
  const greetings = ["hey", "hi", "hola", "ciao"];
  const greetingIndex = Math.floor(Math.random() * greetings.length);
  res.json({ value: greetings[greetingIndex] });
});

app.get("/weather/:location", async (req, res) => {
	const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${req.params.location}&apikey=${API_KEY}`);
	const data = await response.json();
	res.send("Current temperature: " + data.timelines.minutely[0].values.temperature);
	// res.json(data);
})

app.listen(PORT, () => {
  if (enviornment === "development") {
    console.log(`server running om ${HOST}:${PORT}`);
  } else {
    console.log(`server running o production`);
  }
});
