import { NavLink } from "react-router-dom";
import './Header.css'

const NavaBar = () => {
    return (
        <div className="navabar">
            <ul>
                <li>
                    <NavLink className="link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink className="UserDataDisply" to="/UserDataDisply">contact</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/Login">Login</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/Logout">Logout</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavaBar;