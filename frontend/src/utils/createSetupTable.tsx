import { simpleClassSetup } from "../interfaces/classSetups";

export const createSetupTableRowData = (classSetup: simpleClassSetup) => {
	const maxLength = Math.max(
		classSetup.weapons.length,
		classSetup.armor.length,
		classSetup.accesories.length,
		classSetup.extra.length
	);
	const rowsData = [];

	for (let i = 0; i < maxLength; i++) {
		rowsData.push({
			weapons: classSetup.weapons[i] ?? "",
			armor: classSetup.armor[i] ?? "",
			accesories: classSetup.accesories[i] ?? "",
			extra: classSetup.extra[i] ?? "",
		});
	}

	return rowsData;
};
