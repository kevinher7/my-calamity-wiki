export const capitalizeFirstLetter = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

export const removeUnderscores = (word: string) => {
	return word.replace("_", " ");
};
