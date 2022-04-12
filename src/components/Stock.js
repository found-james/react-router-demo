
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Stock ({ stockData }){

    const [stock, setStock] = useState(null);
    const { symbol } = useParams();

    const findNameUsingSymbol = () => {
        try {
            const res = stockData.find( x => x.symbol === symbol);
            setStock( res );
            console.log(stock)
            
        } catch (err){
            console.error(err);
        }
    }

    useEffect (() => findNameUsingSymbol(), []);

    return stock ? (<>
                        <p>{ stock.name }</p> 
                        <p>{ stock.lastPrice }</p>
                        <p>{ stock.change }</p>

                     </>)
                  : <h1>no data</h1>
}