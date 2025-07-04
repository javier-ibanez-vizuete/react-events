import { ClicksCounter } from "./components/ClicksCounter/ClicksCounter";
import { InputMirror } from "./components/InputMirror/InputMirror";

export const App = () => {
	return (
		<>
			<h1>Ejercicio eventos</h1>
			<ClicksCounter />
			<InputMirror />
		</>
	);
};
