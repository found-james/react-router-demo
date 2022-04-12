
import { Link } from 'react-router-dom';

export default function Dashboard ({ stockData }) {

    const displayAllStocks = (obj, idx) => {
        return (

            <Link to={`/stock/${ obj.symbol }`}>
                <li key={ idx }>{ obj.name }</li>
            </Link>
        );
    }

    return (
        <ul>
            {stockData.map(displayAllStocks)}
        </ul>
    )
}

// <Link to={`/price/${ symbol }`}>
// <h2>{ name }</h2>
// </Link>
// );