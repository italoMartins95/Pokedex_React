import Styles from "./Pagination.module.css"

import { AiOutlineLeft , AiOutlineRight } from "react-icons/ai"

function Pagination({page , totPage , prevPage , nextPage}){
    return(
        <article className={Styles.paginationControl}>
            <button onClick={prevPage} className={Styles.buttons}>
                <AiOutlineLeft />
            </button>
            <span>{page} de {totPage}</span>
            <button onClick={nextPage} className={Styles.buttons}>
                <AiOutlineRight />
            </button>
        </article>
    )
}

export default Pagination