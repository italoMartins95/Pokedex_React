import Styles from "../layout/Header.module.css"

import {useState , useEffect} from "react"

function Header(){

    const [search , setSearch] = useState()

    return(
        <header className={Styles.header}>
           <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeApi" />
        </header>
    )
}

export default Header