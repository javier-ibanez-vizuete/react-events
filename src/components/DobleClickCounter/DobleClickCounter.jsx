import { useState } from "react";
import "./DobleClickCounter.css";

export const DobleClickCounter = () => {
	const [number, setNumber] = useState(0);
	const onButtonDobleClick = () => setNumber(number + 1);

	return (
		<div className="doble-click-counter-container">
			<h2>Contador Doble Click</h2>
			<h4>{number}</h4>
			<button onDoubleClick={onButtonDobleClick}>Doble Click</button>
		</div>
	);
};
