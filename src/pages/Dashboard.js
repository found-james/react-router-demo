
import { Link } from 'react-router-dom';

export default function Dashboard ({ stockData }) {


    // const displayAllStocks = 
    return (

        <ul>
            {
                stockData.map((obj, idx) => {
                    return (

                        <Link to={`/stock/${ obj.symbol }`}>
                            <li key={ idx }>{ obj.name }</li>
                        </Link>
                    );
                })
            }
        </ul>
    )
}

// <Link to={`/price/${ symbol }`}>
// <h2>{ name }</h2>
// </Link>
// );