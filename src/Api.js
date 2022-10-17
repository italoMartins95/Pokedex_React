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