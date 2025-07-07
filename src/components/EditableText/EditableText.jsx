import { useState } from "react";
import "./EditableText.css";

export const EditableText = () => {
	const [edit, setEdit] = useState(false);
	const [text, setText] = useState("");

	const onTextDobleClick = (event) => {
		setEdit(!edit);
		setText(event.target.innerText);
	};

	const onInputChange = (event) => {
		setText(event.target.value);
	};

	const onInputKeyDown = (event) => {
		if (event.key === "Enter") {
			setEdit(!edit);
		}
	};

	const onInputBlur = () => setEdit(!edit);

	return (
		<div className="editable-text-container">
			{edit ? (
				<textarea
					value={text}
					onChange={onInputChange}
					onKeyDown={onInputKeyDown}
					onBlur={onInputBlur}
					rows={6}
					cols={30}
				></textarea>
			) : (
				// Opcion con un input segun ejercicio, pero menos estetica
				// <input
				// 	type="text"
				// 	value={text}
				// 	onChange={onInputChange}
				// 	onKeyDown={onInputKeyDown}
				// 	onBlur={onInputBlur}
				// />
				<p onDoubleClick={onTextDobleClick}>
					{text ? text : "Un gran poder, conlleva una gran responsabilidad"}
				</p>
			)}
		</div>
	);
};
