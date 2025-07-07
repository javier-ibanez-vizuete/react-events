import { useState } from "react";
import "./CustomizedSelect.css";

export const CustomizedSelect = () => {
	const [selectedOption, setSelectedOption] = useState("");
	const onSelectChange = (event) => setSelectedOption(event.target.value);
	// Si quiero seleccionar el texto seria con .selectedOptions[0].text

	return (
		<div className="customized-select-container">
			<h2>Select Personalizado</h2>
			<div>
				<label htmlFor="select-customized">Selecciona un idioma</label>
				<select name="select-customized" id="select-customized" onChange={onSelectChange}>
					<option disabled selected>
						Selecciona un idioma
					</option>
					<option value="english">Inglés</option>
					<option value="france">Francés</option>
					<option value="spanish">Español</option>
					<option value="deutch">Aleman</option>
				</select>
				{selectedOption && <p>{selectedOption}</p>}
			</div>
		</div>
	);
};
