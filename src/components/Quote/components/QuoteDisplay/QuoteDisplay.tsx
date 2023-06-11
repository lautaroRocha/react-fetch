const QuoteDisplay = ({quote, by} : {quote: string, by: string}) => {
    return <main>
                <h3>
                    {quote}
                </h3>
                <p>
                    {by}
                </p>
            </main>   
    
}

export default QuoteDisplay