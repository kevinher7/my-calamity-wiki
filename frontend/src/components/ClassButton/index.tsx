import { Link } from "react-router-dom";

import "./styles.css";
import { capitalizeFirstLetter } from "../../utils/strings";

interface ClassButtonProps {
	classType: string;
}

const ClassButton = (props: ClassButtonProps) => {
	// return <button className="class--button">{props.classType}</button>;
	return (
		<Link to={`/${props.classType}`} className="class--link">
			{capitalizeFirstLetter(props.classType)}
		</Link>
	);
};

export default ClassButton;
