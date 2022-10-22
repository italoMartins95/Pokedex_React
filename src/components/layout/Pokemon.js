import Styles from "../layout/Pokemon.module.css"

import { FaBalanceScaleRight } from "react-icons/fa"
import { SlEnergy } from "react-icons/sl"
import { AiOutlineColumnHeight } from "react-icons/ai"

function Pokemon({pokemonName , pokemonImg , pokemonAlt , pokemonId , pokemonTypes , pokemonWeight , pokemonHeight , colorsStyle}){

    return(
        <article className={Styles.pokemonCard}>
            <img src={pokemonImg} alt={pokemonAlt} />
            <div className={Styles.pokemonCardTop}>
                <p>#{pokemonId}</p>
                <h3>{pokemonName}</h3>
            </div>
            <div className={Styles.pokemonCardMediun}>
                {pokemonTypes.map((pokemon , index) => {
                    return(
                        <p key={index}>{pokemon.type.name}</p>
                    )
                })}
            </div>
            <div className={Styles.pokemonCardBottom}>
                <div className={Styles.flexBoxColumn}>
                    <div className={Styles.flexBoxRow}>
                        <FaBalanceScaleRight />
                        <h3>{pokemonWeight/10} kg</h3> 
                    </div>
                    <p>Peso</p>
                </div>
                <div className={Styles.flexBoxColumn}>
                    <div className={Styles.flexBoxRow}>
                        <AiOutlineColumnHeight />
                        <h3>{pokemonHeight/10} m</h3>                       
                    </div>            
                    <p>Altura</p>         
                </div>
			</div>
            <button className={Styles.btnMoreInformations} style={{color: colorsStyle.color , background: colorsStyle.backgroundColor}}>
                <SlEnergy />
                Mais Detalhes
            </button>
        </article>
    )
}

export default Pokemon