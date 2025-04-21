import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
function App() {
  return (
    <div className="font-mulish">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
