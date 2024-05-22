function Input(props) {
    return(
        <input 
            type={props.InputType} 
            placeholder={props.placeholder} 
        />
    )
}

const Button = props => <button type="submit">{props.name}</button>

export default Input;
export {Button};