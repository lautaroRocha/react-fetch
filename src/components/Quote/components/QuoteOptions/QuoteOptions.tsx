import { PARAMS } from "../../hooks/useQuotes"

const QuoteOptions = ({params, fetch, change} : {params: PARAMS, fetch:()=>void, change: (arg: PARAMS)=>void}) => {
    return(
        <form >
            <fieldset>
                <label htmlFor="author">
                    <input 
                        type="radio" name="author" value='author' 
                        onChange={()=>change({random: false, author : ''})}/>
                    <input type="radio" name="author" value='random' 
                        defaultChecked={params.random}
                        onChange={()=>change({random: true, author: ''})}
                    />
                </label>
            </fieldset>
            <span>
                (bear in mind, some authors may only have one quote in our database)
            </span>
            <button onClick={(e)=>{e.preventDefault(), fetch()}} type="button">
                GET QUOTE
            </button>
        </form>
    )
}

export default QuoteOptions