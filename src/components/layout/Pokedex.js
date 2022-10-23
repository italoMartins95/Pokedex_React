import Styles from "./Pokedex.module.css"
import { Link , useLocation } from "react-router-dom"

import { defaultColorForTypes } from "../../Api"

import Pokemon from "./Pokemon"
import Loader from "./Loader"

function Pokedex({pokemons , loading , openCloseDetails}){  

    function openCloseUp(){
        openCloseDetails()
    }

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
                                let colorStyleOne = defaultColorForTypes.filter(typePokemon => typePokemon.nome == el.types[0].type.name)
                                return(
                                        <Pokemon key={index} 
                                                 pokemonName={el.name}
                                                 pokemonImg={el.sprites.other.dream_world.front_default}
                                                 pokemonAlt={el.name}
                                                 pokemonId={el.id}
                                                 pokemonTypes={el.types}
                                                 pokemonWeight={el.weight}
                                                 pokemonHeight={el.height}
                                                 colorsStyle={colorStyleOne[0]}
                                                 openCloseUp={openCloseUp}
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