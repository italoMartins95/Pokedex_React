import Styles from "../forms/Input.module.css"

function Input({type , placeholder , handleOnChange}){
    return(
        <input type={type} 
               placeholder={placeholder} 
               onChange={handleOnChange}
               className={Styles.input}/>
    )
}

export default Input