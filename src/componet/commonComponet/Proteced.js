import { useEffect } from "react"
import { useNavigate } from "react-router"

const Proteced = (props) => {
    const { Componet } = props
    const navigate = useNavigate();
    useEffect(()=>{
        let userLogin = localStorage.getItem('loginUserData')
        if(!userLogin){
            navigate('/UserLogin')
        }
    })
    return (
        <Componet />
    )
}

export default Proteced;