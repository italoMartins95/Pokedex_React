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
backgroundColor: '#837f7e',
color: 'black'},
{nome: 'fighting',
backgroundColor: '#f49a63',
color: 'black'},
{nome: 'flying',
backgroundColor: 'white',
color: 'black'},
{nome: 'poison',
backgroundColor: '#521a62',
color: 'white'},
{nome: 'ground',
backgroundColor: '#8f7918',
color: 'black'},
{nome: 'rock',
backgroundColor: '#a38c21',
color: 'white'},
{nome: 'bug',
backgroundColor: '#486a21',
color: 'white'},
{nome: 'ghost',
backgroundColor: '#7b62a3',
color: 'white'},
{nome: 'steel',
backgroundColor: '#9eb7b8',
color: 'black'},
{nome: 'fire',
backgroundColor: '#fd7d24',
color: 'white'},
{nome: 'water',
backgroundColor: '#3159ff',
color: 'white'},
{nome: 'grass',
backgroundColor: '#4bae40',
color: 'black'},
{nome: 'electric',
backgroundColor: '#fbff00',
color: 'black'},
{nome: 'psychic',
backgroundColor: '#eeaad2',
color: 'black'},
{nome: 'ice',
backgroundColor: '#51c4e7',
color: 'black'},
{nome: 'dragon',
backgroundColor: '#179ee6',
color: 'black'},
{nome: 'dark',
backgroundColor: '#707070',
color: 'white'},
{nome: 'fairy',
backgroundColor: '#e52c98',
color: 'white'}]