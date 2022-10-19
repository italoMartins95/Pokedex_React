import Styles from "../layout/Header.module.css"

import { SiPokemon } from "react-icons/si"

import charizard from "../../images/375px-Charizard_SSBU.webp"

function Header(){

    return(
        <header className={Styles.header}>
            <div className={Styles.headerContent}>
                <SiPokemon />
                <img src={charizard} alt="CharizarImage" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={Styles.waves}>
                <path fill="#6b251f" fill-opacity="1" d="M0,224L80,240C160,256,320,288,480,266.7C640,245,800,171,960,138.7C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                <path fill="#e5501e" fill-opacity="1" d="M0,256L60,250.7C120,245,240,235,360,213.3C480,192,600,160,720,160C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </header>
    )
}

export default Header