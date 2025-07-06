import './InputFocus.css'

export const InputFocus = () => {
    const onInputFocus = (event) => {
        event.target.classList.toggle("focused-input-focus")
    }
    
    return (
        <div className='input-focus-container'>
            <h2>Focus en Input</h2>
            <input type="text" name="input-focus" id="input-focus" onFocus={onInputFocus} onBlur={onInputFocus}/>
        </div>
    )
}