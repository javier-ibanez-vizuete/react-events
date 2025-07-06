import { useState } from "react";
import "./AlertForm.css";

export const AlertForm = () => {
	const [form, setForm] = useState(false);
	const [input, setInput] = useState("");
	const onFormSubmit = () => {
		setForm(!form);
		setTimeout(() => {
			setForm(false);
		}, 3000);
	};
	const onChangeInput = (event) => setInput(event.target.value);

	return (
		<div className="alert-form-container">
            <h2>Formulario</h2>
			<form action="#" method="get" onSubmit={onFormSubmit}>
				<label htmlFor="input-alert-form">USUARIO</label>
				<input
					type="text"
					name="input-alert-form"
					value={input}
					id="input-alert-form"
					placeholder="Introduce tu usuario..."
					onChange={onChangeInput}
				/>
				<button>Enviar</button>
				{form && alert(`Bienvenido ${input}`)}
			</form>
		</div>
	);
};
