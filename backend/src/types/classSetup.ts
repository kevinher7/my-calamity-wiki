export interface wikiItem {
	itemName: string;
	itemURL: string;
}

export interface classSetup {
	class: string;
	weapons: wikiItem[];
	armor: wikiItem[];
	accesories: wikiItem[];
	extra: wikiItem[];
}
