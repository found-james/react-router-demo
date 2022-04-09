import { Link } from "react-router-dom";

export default function Home (){
    return (
        <>
            <h1> home page </h1>
            <Link to='/stocks'><h3> check out stocks</h3></Link>
        </>
    )
}