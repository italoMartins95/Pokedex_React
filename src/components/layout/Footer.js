import Styles from "./Footer.module.css"
import { Link } from "react-router-dom"

import { BsGithub , BsLinkedin} from "react-icons/bs"
import { HiInformationCircle } from "react-icons/hi"

function Footer(){
    return(
        <footer className={Styles.footer}>
            <div>
                <a href="https://github.com/italoMartins95" target="_blank" className={Styles.a}>
                    <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/italo-martins-3a73b1190/" target="_blank" className={Styles.a}>
                    <BsLinkedin />
                </a>
                <a className={Styles.a}>
                    <HiInformationCircle />
                </a>
            </div>
        </footer>
    )
}

export default Footer