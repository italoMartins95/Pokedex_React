import bug from "./components/pokemonTypes/bug.svg"
import dark from "./components/pokemonTypes/dark.svg"
import dragon from "./components/pokemonTypes/dragon.svg"
import eletric from "./components/pokemonTypes/eletric.svg"
import fairy from "./components/pokemonTypes/fairy.svg"
import fighting from "./components/pokemonTypes/fighting.svg"
import fire from "./components/pokemonTypes/fire.svg"
import flying from "./components/pokemonTypes/flying.svg"
import ghost from "./components/pokemonTypes/ghost.svg"
import grass from "./components/pokemonTypes/grass.svg"
import ground from "./components/pokemonTypes/ground.svg"
import ice from "./components/pokemonTypes/ice.svg"
import normal from "./components/pokemonTypes/normal.svg"
import poison from "./components/pokemonTypes/poison.svg"
import psychic from "./components/pokemonTypes/psychic.svg"
import rock from "./components/pokemonTypes/rock.svg"
import steel from "./components/pokemonTypes/steel.svg"
import water from "./components/pokemonTypes/water.svg"

export const searchPokemons = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    }catch (error){
        console.log("Erro: " + error)
    }
}

export const getPokemons = async (limit = 40 , offSet = 0)=> {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`
        const response = await fetch(url)
        return await response.json()
    }catch (error){
        console.log("Erro: " + error)
    }
}

export const searchPokemonData = async (url) => {
    try{
        const response = await fetch(url)
        return await response.json()
    }catch (error){
        console.log("Erro: " + error)
    }
}

export const searchTypes = async () => {
    try{
        const typesPokemons = await fetch(`https://pokeapi.co/api/v2/type`)
        return typesPokemons.json()
    }catch (error){
        console.log("Erro: " + error)
    }
}

export const searchPokemonTypes = async (type) => {
    try{
        const typesPokemons = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        return typesPokemons.json()
    }catch (error){
        console.log("Erro: " + error)
    }
}

export const especiesData = async (pokemon) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
        return response.json()
    }catch (error){
        console.log("Erro: " + error)
    }
}

export const defaultColorForTypes = [
{nome: 'normal',
backgroundColor: '#9fa39d',
color: 'white',
ico: normal},
{nome: 'fighting',
backgroundColor: '#ff215b',
color: 'white',
ico: fighting},
{nome: 'flying',
backgroundColor: '#89bdff',
color: 'white',
ico: flying},
{nome: 'poison',
backgroundColor: '#f149ff',
color: 'white',
ico: poison},
{nome: 'ground',
backgroundColor: '#ff6b0d',
color: 'white',
ico: ground},
{nome: 'rock',
backgroundColor: '#d8bc5a',
color: 'white',
ico: rock},
{nome: 'bug',
backgroundColor: '#7bcf00',
color: 'white',
ico: bug},
{nome: 'ghost',
backgroundColor: '#4e6aff',
color: 'white',
ico: ghost},
{nome: 'steel',
backgroundColor: '#23a1bd',
color: 'white',
ico: steel},
{nome: 'fire',
backgroundColor: '#ff9900',
color: 'white',
ico: fire},
{nome: 'water',
backgroundColor: '#14a8ff',
color: 'white',
ico: water},
{nome: 'grass',
backgroundColor: '#1cd80e',
color: 'white',
ico: grass},
{nome: 'electric',
backgroundColor: '#ffde00',
color: 'white',
ico: eletric},
{nome: 'psychic',
backgroundColor: '#ff6c64',
color: 'white',
ico: psychic},
{nome: 'ice',
backgroundColor: '#2ee4c6',
color: 'white',
ico: ice},
{nome: 'dragon',
backgroundColor: '#0076ff',
color: 'white',
ico: dragon},
{nome: 'dark',
backgroundColor: '#5a566a',
color: 'white',
ico: dark},
{nome: 'fairy',
backgroundColor: '#ff76ff   ',
color: 'white',
ico: fairy}]