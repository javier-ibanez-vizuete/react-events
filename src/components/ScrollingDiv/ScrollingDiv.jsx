import { ImageError } from "../ImageError/ImageError";
import "./ScrollingDiv.css";

export const ScrollingDiv = () => {
	const onDivScroll = () => {
		console.log("Haciendo Scroll");
	};

	return (
		<div className="scrolling-div-container">
			<h2>Logger Scroll</h2>
			<div className="div-to-scroll" onScroll={onDivScroll}>
				<ImageError />
			</div>
		</div>
	);
};
