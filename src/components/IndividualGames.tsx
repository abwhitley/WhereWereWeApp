import allGames from "../GamesInterface";
import {useState} from "react";
import GamesInterface from "../GamesInterface";
import Details from "./Details";
const IndividualGames = ({title, upNext, lastDone}: GamesInterface) => {

	return(
			<tr>
				<td>{title}</td>
				<td><button onClick={() => {
					<Details upNext={upNext} lastDone={lastDone} />
				}}>More Details...</button></td>
			</tr>
		)
}

export default IndividualGames