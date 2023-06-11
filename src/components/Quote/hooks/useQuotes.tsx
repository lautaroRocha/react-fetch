import { useState, useEffect } from "react"
///typescript interfaces for objects
interface QUOTE_DATA {
    quote: string,
    author: string,
    currentAuthor: string
  }
  
  export interface PARAMS {
      random: boolean,
      author: string
  }
  
const API_URL = (params: string) =>   `https://api.quotable.io/random${params}` 

const useQuotes = () => {
    const [quote, setQuote] = useState<QUOTE_DATA>({} as QUOTE_DATA)
    const [selectedParam, setSelectedParam] = useState<PARAMS>({random:true, author: ''} as PARAMS)

    const fetchData = async() => {
        //the fetch API return a promise that resolves to the value of the HTTP Request
        const res = await fetch(API_URL(selectedParam.random ? '' : `?author=${selectedParam.author}`))
        //wait por response, and turn in into a JSON
        const data = await res.json()
        if(!res.ok){
            //manage error, if any
            console.error('error during fetch')
        }else{
            //setting quote state with response from API
            const newQuote : QUOTE_DATA = {
                quote: data.content,
                author: data.author,
                currentAuthor: data.authorSlug
            }
            setQuote(newQuote)

        }
    }

    if(!quote.quote){
        fetchData()
    }    

    useEffect(()=>{
        if(!selectedParam.random){
            setSelectedParam({
                random: false,
                author: quote.currentAuthor
            })
        }
    }, [selectedParam.random])

    return {quote, fetchData, selectedParam, setSelectedParam}
}

export default useQuotes