import Styles from "./Pokedex.module.css"

import { especiesData } from "../../Api"

import Pokemon from "./Pokemon"
import Loader from "./Loader"

function Pokedex({pokemons , pokemonsEspecie , loading}){   

    return(
        <section className={Styles.pokedex}>
            <span className={Styles.hr}></span>
            <section className={Styles.pokedexContent}>
                {
                    loading ? (
                        <Loader />
                    ) : (
                        pokemons.map((el , index) => {
                            if(el.sprites.other.dream_world.front_default != null){
                                return(
                                    <Pokemon key={index} 
                                            pokemonName={el.name}
                                            pokemonImg={el.sprites.other.dream_world.front_default}
                                            pokemonAlt={el.name}
                                            pokemonId={el.id}
                                            pokemonTypes={el.types}
                                            pokemonWeight={el.weight}
                                            pokemonHeight={el.height}
                                            />
                                )
                            } 
                        })
                    )
                }
            </section>
        </section>
    )
}

export default Pokedex