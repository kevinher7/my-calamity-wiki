import * as fs from "fs";
import * as path from "path";

import * as cheerio from "cheerio";
import axios from "axios";

import { Element } from "domhandler";
import { classSetup, wikiItem } from "../types/classSetup";

// Main Function
export const scrapeWiki = async () => {
	const preHardmodeUrl =
		"https://calamitymod.wiki.gg/index.php?action=render&title=Guide%3AClass%20setups%2FPre-Hardmode";

	const wikiResponse = await getHTLM(preHardmodeUrl);

	const classSetups = getClassSetups(wikiResponse);

	writeJsonFile(classSetups);

	return 0;
};

const getClassSetups = (response: string) => {
	const gameStates: string[] = [""];
	const classSetups: classSetup[][] = [];

	const $ = cheerio.load(response);

	// Get Game States from h2's
	const $gameState = $("h2").find("span").filter(".mw-headline");

	$gameState.each((index, heading) => {
		gameStates[index] = heading.attribs?.id ?? "";
	});

	// Get Setups from Tables

	const $tables = $("table.terraria");

	$tables.each((tableIndex, table) => {
		// console.log(`table ${tableIndex}`);
		const setups: classSetup[] = [];

		const $rows = $(table).find("tr").filter(".bottomline");

		$rows.each((rowIndex, row) => {
			// console.log(`row ${rowIndex}`);
			const setup: classSetup = {
				class: "",
				weapons: [],
				armor: [],
				accesories: [],
				extra: [],
			};

			const $column = $(row).find("td");

			extractSetupsFromColumn($, $column, setup);

			setups.push(setup);
		});

		classSetups.push(setups);
	});

	// console.log(classSetups[0][0]);

	return classSetups;
};

const getHTLM = async (url: string) => {
	const response = await axios.get(url);

	if (response.status !== 200) {
		throw new Error(`Response status: ${response.status}`);
	}

	return response.data;
};

const writeJsonFile = (
	jsonData: object[],
	filePath = "./db/classSetupsData.json"
) => {
	try {
		const directory = path.dirname(filePath);

		if (!directory) {
			throw new Error(`File path '${filePath}' does not exist`);
		}

		fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");

		console.log(`JSON data successfully written to ${filePath}`);
	} catch (error) {
		console.error(`Failed to write JSON data to ${filePath}:`, error);
	}
};

const getTableData = ($cheerioTables: cheerio.Cheerio<Element>) => {};

const extractSetupsFromColumn = (
	$: cheerio.CheerioAPI,
	$column: cheerio.Cheerio<Element>,
	setupObject: classSetup
) => {
	$column.each((columnIndex, column) => {
		if (columnIndex === 0) {
			setupObject.class = $(column).text();
		}

		if (columnIndex === 1) {
			setupObject.weapons = getColumnItems($, column) ?? [];
		}

		if (columnIndex === 2) {
			setupObject.armor = getColumnItems($, column) ?? [];
		}

		if (columnIndex === 3) {
			setupObject.accesories = getColumnItems($, column) ?? [];
		}

		if (columnIndex === 4) {
			setupObject.extra = getColumnItems($, column) ?? [];
		}
	});
};

const getColumnItems = (
	$: cheerio.CheerioAPI,
	column: Element
): wikiItem[] | null => {
	const columnItems: wikiItem[] = [];
	const $items = $(column).find("a");

	if (!$items) {
		return null;
	}

	$items.each((itemIndex, item) => {
		if (!$(item).text()) {
			return;
		}

		columnItems.push({
			itemName: item.attribs?.title ?? null,
			itemURL: item.attribs?.href ?? null,
		});
	});

	return columnItems;
};
