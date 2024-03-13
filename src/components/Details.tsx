interface DetailsProps {
	upNext: string,
	lastDone: string;
}
const Details = ({upNext,lastDone}: DetailsProps) => {
	return(
		<>
			<div>
				<h3>upNext</h3>
				<p>{upNext}</p>
			</div>
			<div>
				<h3>lastDone</h3>
				<p>{lastDone}</p>
			</div>
		</>
	)
}

export default Details;