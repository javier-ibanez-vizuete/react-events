import "./ClicksCounter.css";
import { useState } from "react";

export const ClicksCounter = () => {
	const [clickNumber, setClickNumber] = useState(0);
	const handleClick = () => setClickNumber(clickNumber + 1);
	const onButtonClick = (event) => console.log(`Click Numero ${clickNumber}`);

	return (
		<div className="clicks-counter-container">
			<h2>Contador de Clicks</h2>
			<h3>{clickNumber}</h3>
			<button
				onClick={(event) => {
					onButtonClick(event);
					handleClick();
				}}
			>
				Haz Click
			</button>
		</div>
	);
};
