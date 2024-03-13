import IndividualGames from "./IndividualGames";
import {allGames} from "../GamesInterface";


const GamesList = () => {
	return(
		<>
			<table>
				<thead>
				<tr>
					<th>Games:</th>
				</tr>
				</thead>
				<tbody>
				{
					allGames.map((x) => (
						<IndividualGames title={ x.title } lastDone={ x.lastDone } upNext={ x.upNext } />
					))
				}
				</tbody>
			</table>
		</>
	);
}

export default GamesList;