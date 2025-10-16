import { Route,Routes } from "react-router-dom";
import About from "./about";
import Users from "./users";
import Navbar from "./navbar";
import Home from "./home";
function Main () {
    return (
        <>
         <Navbar/>
        <Routes>
           
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
        </>
    );
}
export default Main;