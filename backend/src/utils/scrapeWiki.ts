import * as cheerio from "cheerio";
import { Element } from "domhandler";
import axios from "axios";
import { classSetup } from "../types/classSetup";

const getHTLM = async (url: string) => {
	const response = await axios.get(url);

	if (response.status !== 200) {
		throw new Error(`Response status: ${response.status}`);
	}

	return response.data;
};

const getClassSetups = (response: string) => {
	const gameStates: string[] = [""];
	const classSetups: classSetup[][] = [];

	const $ = cheerio.load(response);

	// Get Game States
	const $gameState = $("h2").find("span").filter(".mw-headline");

	$gameState.each((index, heading) => {
		gameStates[index] = heading.attribs?.id ?? "";
	});

	// Get Setups per Class

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

			// extractSetupsFromColumn($, $column, setup);

			$column.each((columnIndex, column) => {
				if (columnIndex === 0) {
					setup.class = $(column).text();
				}

				if (columnIndex === 1) {
					const $weapons = $(column).find("a");

					if (!$weapons) {
						return;
					}

					$weapons.each((weaponIndex, weapon) => {
						if (!$(weapon).text()) {
							return;
						}

						setup.weapons.push({
							itemName: weapon.attribs?.title ?? null,
							itemURL: weapon.attribs?.href ?? null,
						});
					});
				}
			});

			setups.push(setup);
		});

		classSetups.push(setups);
	});

	// console.log(classSetups[3][2]);

	return $tables;
};

const getTableData = ($cheerioTables: cheerio.Cheerio<Element>) => {};

export const scrapeWiki = async () => {
	// const wikiUrl = "https://calamitymod.wiki.gg/wiki/Guide:Class_setups";

	// getHTLM(wikiUrl)
	// 	.then((res) => getClassSetups(res))
	// 	.then(($tablaData) => getTableData($tablaData));

	const preHardmodeUrl =
		"https://calamitymod.wiki.gg/index.php?action=render&title=Guide%3AClass%20setups%2FPre-Hardmode";

	const wikiResponse = await getHTLM(preHardmodeUrl);

	getClassSetups(wikiResponse);

	return 0;
};
