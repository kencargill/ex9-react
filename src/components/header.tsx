import { Link } from "react-router-dom";
// import '../css/Header.css'

export default function Header () {
    return (
        <header>
            <h1>
                <Link to='/'>menu</Link>
            </h1>
            <Link to='/search'>search</Link>
        </header>
    )
}