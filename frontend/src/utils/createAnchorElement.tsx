const createAnchorElement = (text: string, url: string) => {
	return <a href={url}>{text}</a>;
};

export default createAnchorElement;
