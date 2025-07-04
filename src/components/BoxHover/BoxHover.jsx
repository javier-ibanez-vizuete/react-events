import "./BoxHover.css";

export const BoxHover = () => {
	const onBoxMouseEnter = (event) => {
		console.log("Entrando en la caja");
		event.target.classList.toggle("colored-box-hover");
	};
	const onBoxMouseLeave = (event) => {
		console.log("Saliendo de la caja");
		event.target.classList.toggle("colored-box-hover");
	};

	return (
		<div className="box-hover-container">
			<h2>Caja del Hover</h2>
			<div className="box-hover" onMouseEnter={onBoxMouseEnter} onMouseLeave={onBoxMouseLeave}></div>
		</div>
	);
};
