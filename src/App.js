import { useState , useEffect } from "react";

import { searchPokemons , getPokemons , searchPokemonData , searchPokemonTypes , defaultColorForTypes } from "./Api"

import Container from "../src/components/layout/Conteiner";
import Header from "../src/components/layout/Header"
import Search from "../src/components/layout/Search"
import Pokemon from "../src/components/layout/Pokemon"
import Pokedex from "./components/layout/Pokedex";
import Footer from "./components/layout/Footer";

function App() {

  const [pokemons , setPokemons] = useState([])
  const [pokemonSearch , setPokemonSearch] = useState([])
  const [pokemonTypeSearch , setPokemonTypeSearch] = useState([])
  const [stylesPokemons , setStylesPokemons] = useState([])
  const [pokemonSearchStyle , setPokemonSearchStyle] = useState()

  const [loading , setloading] = useState(true)
  const [page , setPage] = useState(0)
  const [totPokemons , setTotPokemons] = useState(0)
  const [searchVisible , setSearchVisible] = useState(false)


  const search = async (pokemon) => {
    if(!pokemon){
      setSearchVisible(false)
    }else{
      const resultSearch = await searchPokemons(pokemon)
        if(!resultSearch){
          console.log(`Não encontramos ${pokemon} em nossa base de dados, verifique se você escreveu o nome correto do Pokemon..`)
        }else{
          setSearchVisible(true)
          setPokemonSearch(resultSearch)
          var stylePokemonSearch = defaultColorForTypes.filter(typePokemon => typePokemon.nome == resultSearch.types[0].type.name)
          setPokemonSearchStyle(stylePokemonSearch[0])
        }
    }
  }

  const searchType = async (type) => {
      if(type == undefined){
        setPokemonTypeSearch([])
      }else{
        const response = await searchPokemonTypes(type)

        const responseData = response.pokemon.map(async (pokemon) => {
          return await searchPokemonData(pokemon.pokemon.url)
        })

        const resultPromises = await Promise.all(responseData)

        setPokemonTypeSearch(resultPromises)
      }
  }

  const itemPerPage = 20

  const fetchPokemons = async () => {
    try{
      const response = await getPokemons(itemPerPage , page * itemPerPage)

      const dataResult = response.results.map(async (pokemon) => {
        return await searchPokemonData(pokemon.url)
      })

      const resultPromises = await Promise.all(dataResult)

      setPokemons(resultPromises)
      setloading(false)
      setTotPokemons(response.count)

    }catch (error){

      console.log(error)

    }
  }

  useEffect(() => {
    fetchPokemons()
  } , [page])

  return (
    <>
      <Header />
      <Container>
          <Search onSearchHandle={search}
                  onSearchTypeHandle={searchType}
                  totPagination={totPokemons}
                  nowPage={page}
                  setPage={setPage}
          />
          {
            searchVisible ? (
              <Pokemon  pokemonName={pokemonSearch.name}
                        pokemonImg={pokemonSearch.sprites.other.dream_world.front_default}
                        pokemonAlt={pokemonSearch.name}
                        pokemonId={pokemonSearch.id}
                        pokemonTypes={pokemonSearch.types}
                        pokemonWeight={pokemonSearch.weight}
                        pokemonHeight={pokemonSearch.height}
                        colorsStyle={pokemonSearchStyle}
              />
            ) : (
              pokemonTypeSearch.length > 0 ? (
                <Pokedex pokemons={pokemonTypeSearch} 
                         loading={loading}
                />
              ) : (
                <Pokedex pokemons={pokemons} 
                         loading={loading}
                />
              )
            )
      }
      </Container>
      <Footer />
    </>
  );
}

export default App;
