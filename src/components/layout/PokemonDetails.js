import Styles from "./PokemonDetails.module.css"

import { FiXCircle } from "react-icons/fi"

function PokemonDetails({closeDetails}){


    return(
        <main className={Styles.details}>
            <button onClick={closeDetails}>
                <FiXCircle />
            </button>
            <h2>Aqui você vai encontrar os detalhes do pokemon selecionado. Esse é o pokemon</h2>
        </main>
    )
}

export default PokemonDetails