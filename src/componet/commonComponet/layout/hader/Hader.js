import { NavLink, useNavigate } from 'react-router-dom'
import '../../../../styles/Hader.css'
import { useEffect, useState } from 'react';
const Hader = () => {
    const [userLoginName, setUserLoginName] = useState(null);
    const [userProfileImageUrl, setUserProfileImageUrl] = useState("https://t3.ftcdn.net/jpg/02/61/90/28/240_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg");

    useEffect(() => {
        const login = JSON.parse(localStorage.getItem('loginUserData'));
        // console.log(login.imageUrl)
        if (login) {
            const name = login.userName.split(' ');
            setUserProfileImageUrl(login.imageUrl)
            if (name[1]) {
                setUserLoginName(name[0] + ' ' + name[1])
            } else {
                setUserLoginName(name[0])
            }
        }
    }, [])

    const navigate = useNavigate();
    const userLogout = () => {
        if (userLoginName) {
            localStorage.removeItem('loginUserData')
            navigate('/UserLogin')
        }
    }
    return (
        <div className='navbar'>
            <div className='navbarLink'>
                <div className='homepagelink'>
                    <div className='user-profil'>
                        <NavLink to="/Home"> <img
                            src={userProfileImageUrl}
                            alt="USer images"
                            title='user image'
                            className='user-icone' /><span>{userLoginName}</span>
                            {userLoginName ?
                                <div className="dropdown-content">
                                    <h5>profile</h5>
                                    <h5 onClick={userLogout}>Logout</h5>
                                    <h5>cancel</h5>
                                </div> : null}
                        </NavLink>
                    </div>
                </div>
                <div className='menuIcone'>
                    <div className='menuIconediv'>
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className='dropdown-menu-content'>
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
                            <li className='link'>
                                <NavLink to="/Fichier">Fichier </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hader;