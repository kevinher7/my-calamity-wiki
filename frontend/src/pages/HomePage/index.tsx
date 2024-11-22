import ClassButton from "../../components/ClassButton";
import "./styles.css";

function HomePage() {
	const classTypes = ["melee", "ranger", "magic", "summoning", "rogue"];

	return (
		<main className="home--main">
			<h1>Calamity Class Setups</h1>

			<div className="classes-buttons--container">
				{classTypes.map((classType) => (
					<ClassButton key={classType} classType={classType} />
				))}
			</div>
		</main>
	);
}

export default HomePage;
