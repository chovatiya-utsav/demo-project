import Home from "./componet/pages/Home";
import About from "./componet/pages/About";
import Contactus from "./componet/pages/Contactus";
import UserLogin from './componet/pages/UserLogin';
import Proteced from "./componet/commonComponet/Proteced";
import UserRegistration from "./componet/pages/UserRegistration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fichier from "./componet/pages/Fichier";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Proteced Componet={Home} />} />
        <Route path="/*" element={<Proteced Componet={Home} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contactus" element={<Proteced Componet={Contactus} />} />
        <Route path="/Fichier" element={<Proteced Componet={Fichier} />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserRegistration" element={<UserRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
