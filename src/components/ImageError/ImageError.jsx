import "./ImageError.css";
export const ImageError = () => {
	const onImgError = (event) => (event.target.src = "/src/assets/pictures/image-error.jpeg");

	return (
		<div className="image-error-container">
			<h2>Imagen Erronea</h2>
			<div className="image-container">
				<img src="/src/assets/pictures/computer-imagee.jpeg" alt="default Image" onError={onImgError} />
			</div>
		</div>
	);
};
