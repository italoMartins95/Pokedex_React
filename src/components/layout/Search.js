import Styles from "../layout/Search.module.css"
import  { searchTypes } from "../../Api"

import Input from "../forms/Input"
import Pagination from "./Pagination"

import { AiOutlineSearch , AiOutlineHome} from "react-icons/ai"
import { useEffect, useState } from "react"

function Search({onSearchHandle , onSearchTypeHandle , nowPage , totPagination , setPage}){

    const [search , setSearch] = useState()
    const [pokemonTypes , setPokemonTypes] = useState([])

    function prevPage(){
        if(nowPage > 0){
            setPage(nowPage-1)
        }
    }

    function nextPage(){
        if(nowPage+1 != totPagination){
            setPage(nowPage+1)
        }
    }

    function searchPokemon(){
        if(search == undefined || search == ""){
            onSearchHandle(undefined)
        }else{
            onSearchHandle(search)
        }
    }

    function searchPokemonPerTypes(type){
        onSearchTypeHandle(type)
    }

    const fetchPokemonTypes = async () => {
        try{
            const types = await searchTypes()

            const dataTypes = types.results.map( type => {
                return type.name
            })

            setPokemonTypes(dataTypes)

        }catch (error){
            console.log("Erro: " + error)
        }
    }

    useEffect(() => {
        searchPokemon()
    }, [search])

    useEffect(() => {
        fetchPokemonTypes()
    }, [])

    return(
        <article className={Styles.search}>
            <div className={Styles.searchTypes}>
                <span onClick={() => searchPokemonPerTypes(undefined)} className={Styles.btnInicio}>
                    <AiOutlineHome />
                    Inicio
                </span>
                <h3>
                    Pesquisar por tipo
                </h3>
                <div className={Styles.searchTypesContent}>
                    {
                        pokemonTypes.map((type , index) => {
                            if(type != "unknown" && type != "shadow"){
                            return(
                                <span onClick={() => searchPokemonPerTypes(type)} key={index}>{type}</span>
                            )}
                        })
                    }
            </div>
            </div>
            <div className={Styles.inputSearch} onSubmit={searchPokemon}>                
                <Pagination page={nowPage+1}
                            totPage={Math.ceil(totPagination/40)}
                            prevPage={prevPage}
                            nextPage={nextPage}
                />                
                <div className={Styles.inputSubmit}>

                    <Input type="search"
                        placeholder="Buscar Pokemon"
                        handleOnChange={(e) => setSearch(e.target.value)}
                    />
                    <button>
                            <AiOutlineSearch />
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Search