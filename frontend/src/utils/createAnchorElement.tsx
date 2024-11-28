import { wikiItem } from "../interfaces/classSetups";

const createAnchorElement = (item: wikiItem) => {
	return (
		<a href={item.itemURL} target="_blank">
			{item.itemName}
		</a>
	);
};

export default createAnchorElement;
