
import './Input.css';

const Input = (props) => {

    const { name, type = "text", placeholder, required, value, setValue } = props

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={ `input campo-${type}`}>
            <label>{ name }</label>
            <input 
                type={ type } 
                placeholder={ placeholder }
                required={ required }
                value={ value }
                onChange={ handleChange }
            />
        </div>
    );
}

export default Input;