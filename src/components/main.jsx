import { Route,Routes } from "react-router-dom";
import About from "./about";
import Users from "./users";
import Navbar from "./navbar";
import Home from "./home";
import Userdetails from "./Userdetails";
import Userlogin from "./userlogin";
function Main () {
    return (
        <>
         <Navbar/>
        <Routes>
           
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/userdetails/:id" element={<Userdetails />}></Route>
          <Route path="/userlogin/:id" element={<Userlogin />}></Route>
        </Routes>
        </>
    );
}
export default Main;