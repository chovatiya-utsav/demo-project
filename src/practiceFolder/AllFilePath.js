import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contect from './pages/Contect';
// import PageNotFound from './pages/PageNotFound';
// import Login from './pages/Login';
// import Proteced from './pages/Proteced';
// import Logout from './pages/Logout';
// import Header from './commonComponents/Header';
// import Footer from './commonComponents/Footer';
// import UserDataDisply from "./pages/UserDataDisply";
// import SaveUserData from "./pages/SaveUserData";
// import DeleteUserData from "./pages/DeleteAndUpdetUserData";
export default function AllFilePath() {
    return (
        <div>
            <>
                {/* <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/Login' element={<Login />} ></Route>
            <Route path='/Home' element={<Proteced Componet={Home} />} ></Route>
            <Route path='/About' element={<Proteced Componet={About} />} ></Route>
            <Route path='/contact' element={<Contect />} ></Route>
            <Route path='/Logout' element={<Proteced Componet={Logout} />} ></Route>
            <Route path='*' element={<PageNotFound />} ></Route>
            <Route path='/' exect={true} element={<Proteced Componet={Home} />} ></Route>
            <Route path='/UserDataDisply' element={<Proteced Componet={UserDataDisply} />} ></Route>
            </Routes>
            <Footer />
          </BrowserRouter> */}
                {/* <SaveUserData /> */}
                {/* <DeleteUserData /> */}
            </>
        </div>
    )
}
