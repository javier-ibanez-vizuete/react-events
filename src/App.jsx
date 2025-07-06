import { BoxHover } from "./components/BoxHover/BoxHover";
import { ClicksCounter } from "./components/ClicksCounter/ClicksCounter";
import { DobleClickCounter } from "./components/DobleClickCounter/DobleClickCounter";
import { Form } from "./components/Form/Form";
import { InputFocus } from "./components/InputFocus/InputFocus";
import { InputMirror } from "./components/InputMirror/InputMirror";
import { KeysCounter } from "./components/KeysCounter/KeysCounter";
import { ShowText } from "./components/ShowText/ShowText";

export const App = () => {
	return (
		<>
			<h1>Ejercicio eventos</h1>
			<ClicksCounter />
			<InputMirror />
			<Form />
			<ShowText />
			<DobleClickCounter />
			<BoxHover />
			<KeysCounter />
			<InputFocus />
		</>
	);
};
