import * as fs from "fs";

import express, { Request, Response } from "express";
import { scrapeWiki } from "./utils/scrapeWiki";

const app = express();
const PORT = 8050;

app.get("/api/get-class-setups", (req: Request, res: Response) => {
	const classSetups = {
		preHardmode: JSON.parse(
			fs.readFileSync("./db/preHardmodeClassSetupsData.json", "utf-8")
		),
		hardmode: JSON.parse(
			fs.readFileSync("./db/hardmodeClassSetupsData.json", "utf-8")
		),
		postMoonLord: JSON.parse(
			fs.readFileSync("./db/postMoonLordClassSetupsData.json", "utf-8")
		),
	};

	res.send(classSetups);
});

app.patch("/api/update-setups-data", (req: Request, res: Response) => {
	scrapeWiki();
	res.statusCode;
});

app.listen(PORT, async () => {
	console.log(`Server running on http://localhost:${PORT}`);
	scrapeWiki();
});

app.listen();
