import "./styles.css";

interface ClassButtonProps {
	classType: string;
}

const ClassButton = (props: ClassButtonProps) => {
	return <button className="class--button">{props.classType}</button>;
};

export default ClassButton;
