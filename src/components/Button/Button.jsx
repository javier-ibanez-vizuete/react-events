import "./Button.css";
import { useState } from "react";

export const Button = () => {
	const nombres = ["Mario", "Juan", "Laura", "Fer", "John", "Raquel", "Luis", "Javi"];
	const [showMessage, setShowMessage] = useState(false);
	const [name, setName] = useState("");
	const onButtonClick = (name) => {
		setName(name);
		setShowMessage(true);
	};

	return (
		<div className="customized-button-container">
			<ul>
				{nombres.map((name) => (
					<li key={name}>
						<p>{name}</p>
						<button onClick={() => onButtonClick(name)}>Saludar</button>
					</li>
				))}
			</ul>
			{showMessage && <p>Bienvenido {name}</p>}
		</div>
	);
};
