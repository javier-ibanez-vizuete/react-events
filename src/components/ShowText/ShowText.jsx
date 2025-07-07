import { useState } from "react";
import "./ShowText.css";

export const ShowText = () => {
	const [view, setView] = useState(false);
	const onButtonClick = () => setView(!view);
	return (
		<div className="show-text-container">
			<h2>Mostrar u ocultar Texto</h2>
			<button onClick={onButtonClick}>{view ? "Ocultar" : "Mostrar"} texto</button>
			{view && <h4>Texto que se muestra o oculta</h4>}
		</div>
	);
};
