import { useState } from "react";
import "./KeysCounter.css";

export const KeysCounter = () => {
	const [number, setNumber] = useState(0);
	const [letter, setLetter] = useState("");
	const [word, setWord] = useState("");
	const onInputChange = () => {
		setWord(event.target.value);
		setNumber(number + 1);
	};
	const onInputKeyDown = (event) => {
		setLetter(event.key);
	};
	const onButtonClick = () => {
		setNumber(0);
		setLetter("");
		setWord("");
	};

	return (
		<div className="keys-counter-container">
			<h2>Contador de Teclas</h2>
			<input
				type="text"
				name="input-keys-counter"
				id="input-keys-counter"
				onChange={onInputChange}
				onKeyDown={onInputKeyDown}
				value={word}
			/>
			{letter && <h4>{letter}</h4>}
			{number > 0 && <h4>{number}</h4>}
			<button onClick={onButtonClick}>Reiniciar contadores</button>
		</div>
	);
};
