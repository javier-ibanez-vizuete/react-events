import { useState } from "react";
import "./InputChecked.css";

export const InputChecked = () => {
	const [check, setCheck] = useState(false);
	const onInputChange = () => setCheck(!check);

	return (
		<div className="input-checked-container">
			<h2>Checkbox con estados</h2>
			<label htmlFor="input-checked">ACEPTAR CONDICIONES</label>
			<input type="checkbox" name="input-checked" id="input-checked" onChange={onInputChange} />
			<h3>{check ? "ACEPTADAS" : "NO ACEPTADAS"}</h3>
		</div>
	);
};
