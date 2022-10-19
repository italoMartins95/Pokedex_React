import Styles from "./Footer.module.css"

import { BsGithub , BsLinkedin} from "react-icons/bs"
import { HiInformationCircle } from "react-icons/hi"

function Footer(){
    return(
        <footer className={Styles.footer}>
            <div>
                <a href="#" target="_self" className={Styles.a}>
                    <BsGithub />
                </a>
                <a href="#" target="_self" className={Styles.a}>
                    <BsLinkedin />
                </a>
                <a href="#" target="_self" className={Styles.a}>
                    <HiInformationCircle />
                </a>
            </div>
        </footer>
    )
}

export default Footer