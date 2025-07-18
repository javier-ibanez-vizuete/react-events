import { AlertForm } from "./components/AlertForm/AlertForm";
import { BoxHover } from "./components/BoxHover/BoxHover";
import { Button } from "./components/button/Button";
import { ClicksCounter } from "./components/ClicksCounter/ClicksCounter";
import { CustomizedSelect } from "./components/CustomizedSelect/CustomizedSelect";
import { DobleClickCounter } from "./components/DobleClickCounter/DobleClickCounter";
import { EditableText } from "./components/EditableText/EditableText";
import { Form } from "./components/Form/Form";
import { ImageError } from "./components/ImageError/ImageError";
import { InputChecked } from "./components/InputChecked/InputChecked";
import { InputFocus } from "./components/InputFocus/InputFocus";
import { InputMirror } from "./components/InputMirror/InputMirror";
import { KeysCounter } from "./components/KeysCounter/KeysCounter";
import { ScrollingDiv } from "./components/ScrollingDiv/ScrollingDiv";
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
			<AlertForm />
			<ImageError />
			<ScrollingDiv />
			<InputChecked />
			<CustomizedSelect />
			<EditableText />
			<Button />
		</>
	);
};
