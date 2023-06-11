import { Display, Options } from './components';
import './quote.css'
import useQuotes from './hooks/useQuotes';
import { PARAMS } from './hooks/useQuotes';


const Quote = () => {
    //bringing state managemente and datafetch from custom hook,
    //destructuring its return values
    const { quote, selectedParam, setSelectedParam, fetchData} = useQuotes()

    return(
        <div className="quote">
            <Display quote={quote.quote} by={quote.author}/>
            <Options params={selectedParam} 
                    change={(data : PARAMS)=>{setSelectedParam(data)}}
                    fetch={fetchData}/>
        </div>
    )
}

export default Quote;