import express from "express";

const app = express();
const PORT = 8050;

app.get("/", (req, res) => {
	res.send("hi");
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

app.listen();
