import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../../../../styles/Hader.css'
const Hader = () => {
    const [openLogoutButton, setLogoutButton] = useState(false);
    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [userMobilNo, setUserMobilNo] = useState(null);
    const [openUserProfil, setOpenUserProfil] = useState(false)
    const toggonButton = () => {
        setLogoutButton(!openLogoutButton)
    }

    useEffect(() => {
        const userLoginData = JSON.parse(localStorage.getItem('loginUserData'));
        if (userLoginData) {
            setUserName(userLoginData.userName)
            setUserEmail(userLoginData.email)
            setUserMobilNo(userLoginData.mobilNO)
            setUserPassword(userLoginData.password)
        }
    }, [userName])
    console.log(userName)
    const navigate = useNavigate()
    const handelLogout = () => {
        if (userName) {
            localStorage.removeItem('loginUserData')
            navigate('/UserLogin')
        }
    }

    const toggalProfil = () => {
        setOpenUserProfil(!openUserProfil)
    }
    return (
        <div className='navbar'>
            <div className='navbarLink'>
                <div className='homepagelink'>
                    <div className='user-profil'>
                        <NavLink onClick={toggonButton}>    <img
                            src="https://t3.ftcdn.net/jpg/02/61/90/28/240_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg"
                            alt="USer images"
                            title='user image'
                            className='user-icone' />
                            <span>{userName}</span></NavLink>
                        {openLogoutButton ?
                            <div className='UserLogoutButton'>
                                <div className='userButton'>
                                    <button onClick={toggalProfil} >Profile </button>
                                    <button type="button" onClick={handelLogout} >Logout</button>
                                </div>{openUserProfil ?
                                    <div className='userInfo'>
                                        <div className='userheding'>
                                            <span>user Name :</span><h3>{userName}</h3>
                                        </div>
                                        <div className='userheding'>
                                            <span>Contect No :</span><h3>{userMobilNo}</h3>
                                        </div>
                                        <div className='userheding'>
                                            <span>E-mail :</span><h3>{userEmail}</h3>
                                        </div>
                                        <div className='userheding'>
                                            <span>Password :</span><h3>{userPassword}</h3>
                                        </div>
                                        <div>
                                            <button onClick={toggalProfil}>cancel</button>
                                        </div>
                                    </div> : null} </div> : null}

                    </div>
                    <div className='logo'>
                        <NavLink to="/Home" >  Logo </NavLink>
                    </div>
                </div>
                <ul className='pagelink'>
                    <li className='link'>
                        <NavLink to="/" >  Home </NavLink>
                    </li>
                    <li className='link'>
                        <NavLink to="/About"> About </NavLink>
                    </li>
                    <li className='link'>
                        <NavLink to="/Contactus"> Contact us  </NavLink>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Hader;