import { useState } from "react";
import "./Form.css";

export const Form = () => {
	const initialData = { user: "", password: "" };
	const [data, setData] = useState(initialData);
	const [view, setView] = useState(false);
	const onSubmitForm = (event) => {
		event.preventDefault();
		if (data.user === "" || data.password === "") return;
		setView(!view);
		setTimeout(() => {
			setView(false);
			setData(initialData);
		}, 2000);
	};

	const onChangeInput = (event) => {
		const { name, value } = event.target;
		setData((prev) => ({ ...prev, [name]: value.trim() }));
	};

	return (
		<div className="form-container">
			<h2>Formulario de login</h2>
			<form action="#" method="get" onSubmit={onSubmitForm}>
				<input
					type="text"
					name="user"
					value={data.user}
					placeholder="Escriba su nombre"
					id="input-user-name"
					onChange={onChangeInput}
				/>
				<input
					type="password"
					name="password"
					value={data.password}
					placeholder="Escriba su contraseña"
					id="input-user-pass"
					onChange={onChangeInput}
				/>
				<button>Enviar</button>
				{view && (
					<div className="data-form-container">
						<h2>DATOS</h2>
						{Object.entries(data).map(([data, value]) => {
							console.log(data);
							console.log(value);
							return (
								<div className="data-container" key={data}>
									<h3>{data}</h3>
									<p>{value}</p>
								</div>
							);
						})}
					</div>
				)}
			</form>
		</div>
	);
};

// ESTA FORMA ES CON UN ARRAY (Pero no puedo identificar que dato pertenece a cada campo)

// export const Form = () => {
// 	const [data, setData] = useState([]);
// 	const [view, setView] = useState(false);
// 	const onSubmitForm = (event) => {
// 		event.preventDefault();
// 		setData([]);
// 		setView(!view);
// 		const childrens = Array.from(event.target.elements);
// 		const inputs = childrens.filter((children) => children.tagName === "INPUT");
// 		const values = inputs.map((input) => input.value.trim()).filter((value) => value !== "");

// 		if (values.length === 0) return;

// 		setData((data) => [...data, ...values]);
// 		inputs.forEach((input) => (input.value = ""));

// 		setTimeout(() => {
// 			setView(false);
// 		}, 2000);
// 	};

// 	return (
// 		<div className="form-container">
// 			<h2>Formulario de login</h2>
// 			<form action="#" method="get" onSubmit={onSubmitForm}>
// 				<input type="text" name="input-user-name" placeholder="Escriba su nombre" id="input-user-name" />
// 				<input
// 					type="password"
// 					name="input-user-pass"
// 					placeholder="Escriba su contraseña"
// 					id="input-user-pass"
// 				/>
// 				<button>Enviar</button>
// 				{data.length > 0 && view && (
// 					<div className="data-form-container">
// 						<h2>DATOS</h2>
// 						{data.map((value, index) => (
// 							<h4 key={index}>{value}</h4>
// 						))}
// 					</div>
// 				)}
// 			</form>
// 		</div>
// 	);
// };
