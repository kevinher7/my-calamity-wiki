import express, { Request, Response } from "express";
import { scrapeWiki } from "./utils/scrapeWiki";

const app = express();
const PORT = 8050;

app.patch("/api/update-wiki-data", (req: Request, res: Response) => {
	scrapeWiki();
	res.statusCode;
});

app.listen(PORT, async () => {
	console.log(`Server running on http://localhost:${PORT}`);
	scrapeWiki();
});

app.listen();
