import { simpleClassSetup } from "../../interfaces/classSetups";

import { createSetupTableRowData } from "../../utils/createSetupTable";
import createAnchorElement from "../../utils/createAnchorElement";

import "./styles.css";
import { removeUnderscores } from "../../utils/strings";

interface SetupsComponentProps {
	gameState: string;
	classSetup: simpleClassSetup;
}

const SetupComponent = (props: SetupsComponentProps) => {
	return (
		<div className="setup-component">
			<h1 className="setup-h1">{removeUnderscores(props.gameState)}</h1>
			<h1 className="setup-h1">{props.gameState}</h1>
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
					{createSetupTableRowData(props.classSetup).map(
						(rowData, index) => (
							<tr key={index}>
								<td>{createAnchorElement(rowData.weapons)}</td>
								<td>{createAnchorElement(rowData.armor)}</td>
								<td>
									{createAnchorElement(rowData.accesories)}
								</td>
								<td>{createAnchorElement(rowData.extra)}</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</div>
	);
};

export default SetupComponent;
