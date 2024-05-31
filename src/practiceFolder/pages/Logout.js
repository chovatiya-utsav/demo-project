import { useNavigate } from "react-router";
import './Login.css'
import { useEffect } from "react";

const Login = () => {
    const hidepage = () => {
        localStorage.removeItem('login');
        localStorage.setItem('logout',true);
        navigate('/login')
    } 
    const navigate = useNavigate();
    useEffect(() => {
        let logout = localStorage.getItem('logout')
        if (!logout) {
            navigate('/login')
        }
    })  

    return (
        <div>
            <form action="#">
                    <button type="button" onClick={hidepage}>Logout</button>
            </form>
        </div>
    )
}

export default Login;