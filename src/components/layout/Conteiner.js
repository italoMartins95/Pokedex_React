import Styles from "./Conteiner.module.css"

function Conteiner(props){
    return(
        <main className={Styles.conteiner}>
            {props.children}
        </main>
    )
}

export default Conteiner