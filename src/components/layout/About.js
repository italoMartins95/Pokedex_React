import Styles from "./About.module.css"
import { Link } from "react-router-dom"

import { AiOutlineHome } from "react-icons/ai"

function About(){
    return(
        <main>
                <Link to="/" className={Styles.btnHome}>
                    <AiOutlineHome /> 
                    Início
                </Link>
        </main>
    )
}

export default About