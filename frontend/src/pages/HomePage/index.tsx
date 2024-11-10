import ClassButton from "../../components/ClassButton";
import "./styles.css";

function HomePage() {
	return (
		<main className="home--main">
			<h1>Calamity Class Setups</h1>
			<div className="classes-buttons--container">
				<ClassButton classType="Melee" />
				<ClassButton classType="Ranger" />
				<ClassButton classType="Magic" />
				<ClassButton classType="Summoning" />
				<ClassButton classType="Rogue" />
			</div>
		</main>
	);
}

export default HomePage;
