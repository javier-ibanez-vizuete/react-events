import { ClicksCounter } from "./components/ClicksCounter/ClicksCounter";
import { Form } from "./components/Form/Form";
import { InputMirror } from "./components/InputMirror/InputMirror";
import { ShowText } from "./components/ShowText/ShowText";

export const App = () => {
	return (
		<>
			<h1>Ejercicio eventos</h1>
			<ClicksCounter />
			<InputMirror />
			<Form />
			<ShowText />
		</>
	);
};
