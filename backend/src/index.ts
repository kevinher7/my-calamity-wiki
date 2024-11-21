import express, { Request, Response } from "express";
import { scrapeWiki } from "./utils/scrapeWiki";

const app = express();
const PORT = 8050;

scrapeWiki();

app.get("/api/get-wiki-data", (req: Request, res: Response) => {
	const wikiData = scrapeWiki();
	res.send(wikiData);
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

app.listen();
