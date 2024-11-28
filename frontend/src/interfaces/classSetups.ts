export interface wikiItem {
	itemName: string;
	itemURL: string;
}

export interface classSetup {
	gameState: string;
	class: string;
	weapons: wikiItem[];
	armor: wikiItem[];
	accesories: wikiItem[];
	extra: wikiItem[];
}

export interface simpleClassSetup {
	class: string;
	weapons: wikiItem[];
	armor: wikiItem[];
	accesories: wikiItem[];
	extra: wikiItem[];
}
