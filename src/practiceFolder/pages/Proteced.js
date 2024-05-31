import { useEffect } from "react"
import { useNavigate } from "react-router"

const Proteced = (props) => {
    const { Componet } = props
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
    })
    return (
        <Componet />
    )
}

export default Proteced;