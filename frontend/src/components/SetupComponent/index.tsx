import "./styles.css";

const SetupComponent = () => {
	return (
		<div className="setup-component">
			<h1 className="setup-h1">Pre-Boss</h1>
			<table className="setup-table">
				<thead>
					<tr>
						<th>Weapons</th>
						<th>Armor</th>
						<th>Accesories</th>
						<th>Extra</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<a href="https://calamitymod.wiki.gg/wiki/Avalanche">
								Avalanche
							</a>
						</td>
						<td>Iron Armor</td>
						<td>Hermes Boots</td>
						<td>Potions</td>
					</tr>
					<tr>
						<td>
							<a href="https://calamitymod.wiki.gg/wiki/Avalanche">
								Avalanche
							</a>
						</td>
						<td>Iron Armor</td>
						<td>Hermes Boots</td>
						<td>Potions</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default SetupComponent;
