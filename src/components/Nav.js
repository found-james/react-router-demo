
import { Link } from "react-router-dom";

export default function Nav (){
    return (
        <nav>
            <Link to="/"><h3>home</h3></Link>
            <Link to="/about"><h3>about</h3></Link>
        </nav>
    )
}