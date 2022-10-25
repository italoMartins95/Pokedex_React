import Styles from "./PokemonDetails.module.css"
import { defaultColorForTypes } from "../../Api"

import { FiXCircle } from "react-icons/fi"
import { FaBalanceScaleRight } from "react-icons/fa"
import { AiOutlineColumnHeight } from "react-icons/ai"
import { CgPokemon } from "react-icons/cg"

function PokemonDetails({closeDetails , pokemonDetails}){

    return(
        <main className={Styles.details}>
            <button onClick={closeDetails}>
                <FiXCircle />
            </button>
            <article className={Styles.detailsCard}>
                <img src={pokemonDetails.sprites.other.dream_world.front_default} alt={pokemonDetails.name} />
                <div className={Styles.detailsId}>
                    <p>#{pokemonDetails.id}</p>
                    <h3>{pokemonDetails.name}</h3>
                </div>
                <div className={Styles.detailsTypes}>
                    {
                        pokemonDetails.types.map((pokemon , index) => {
                                let colorStyleOne = defaultColorForTypes.filter(el => el.nome == pokemon.type.name)
                            return(
                                <p key={index} style={{background: colorStyleOne[0].backgroundColor}}>
                                    <img src={colorStyleOne[0].ico} alt="icoType" />
                                    {pokemon.type.name}
                                </p>
                            )
                    })}
                </div>
                <div className={Styles.detailsMeasurements}>
                    <div className={Styles.flexBoxColumn}>
                        <div className={Styles.flexBoxRow}>
                            <FaBalanceScaleRight />
                            <h3>{pokemonDetails.weight/10} kg</h3> 
                        </div>
                        <p>Peso</p>
                    </div>
                    <div className={Styles.flexBoxColumn}>
                        <div className={Styles.flexBoxRow}>
                            <AiOutlineColumnHeight />
                            <h3>{pokemonDetails.height/10} m</h3>                       
                        </div>            
                        <p>Altura</p>         
                    </div>
                </div>
            </article>
            <article className={Styles.detailsMed}>
                <span></span>
                <CgPokemon />
                <span></span>
            </article>
            <ul className={Styles.detailsMore}>
                    <p>Stats</p>
                    <li>
                        <span>
                            Hp
                        </span>
                        <span>
                            {pokemonDetails.stats[0].base_stat}
                        </span>
                    </li>
                    <li>
                        <span>
                            Attack
                        </span>   
                        <span>
                            {pokemonDetails.stats[1].base_stat}
                        </span>                    
                    </li>
                    <li>
                        <span>
                            Defense
                        </span> 
                        <span>
                            {pokemonDetails.stats[2].base_stat}
                        </span>                  
                    </li>
                    <li>
                        <span>
                            Sp. Atk
                        </span>
                        <span>
                            {pokemonDetails.stats[3].base_stat}
                        </span>
                    </li>
                    <li>
                        <span>
                            Sp. Def
                        </span>
                        <span>
                            {pokemonDetails.stats[4].base_stat}
                        </span>
                    </li>
                    <li>
                        <span>
                            Speed
                        </span>
                        <span>
                            {pokemonDetails.stats[5].base_stat}
                        </span>
                    </li>
            </ul>
        </main>
    )
}

export default PokemonDetails

/*

*/