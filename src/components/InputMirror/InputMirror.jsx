import { useState } from 'react'
import './InputMirror.css'

export const InputMirror = () => {
    const [text, setText] = useState("");
    const onInputChange = (event) => setText(event.target.value)
    
    return (
        <div className='input-mirror-container'>
            <h2>Espejo del input</h2>
            <h4>{text}</h4>
            <input type="text" name="input-mirror" placeholder='Escribe algo' id="input-mirror" onChange={onInputChange} />
        </div>
    )
}