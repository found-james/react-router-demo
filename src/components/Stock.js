
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Stock ({ stockData }){

    const [stock, setStock] = useState(null);
    const params = useParams();
    const symbol = params.symbol

    const findNameUsingSymbol = () => {
        try {
            const res = stockData.filter( x => x.symbol === symbol);
            setStock( res );
            console.log(stock)
            
        } catch (err){
            console.error(err);
        }
    }

    useEffect (() => findNameUsingSymbol(), []);

    return stock ? (<>
                        <p>{ stock[0].name }</p> 
                        <p>{ stock[0].lastPrice }</p>
                        <p>{ stock[0].change }</p>

                     </>)
                  : <h1>no data</h1>
}