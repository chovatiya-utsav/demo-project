import { useNavigate } from "react-router";
import './Login.css'
import { useEffect } from "react";

const Login = () => {
    const displaypage = () => {
        localStorage.setItem('login',true);
        navigate('/')
    }
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login')
        if (login) {
            navigate('/')
        }
    })

    return (
        <div>
            <form action="#">
                <div className="login">
                    <div>
                        <label >User Name:</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label >password:</label>
                        <input type="password" name="password" />
                    </div>
                    <button type="button" onClick={displaypage}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;