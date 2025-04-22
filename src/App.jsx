import { Outlet, useNavigation } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Spiner from "./Components/Spiner/Spiner";
function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div className="font-mulish">
      <NavBar></NavBar>
      <div className="w-11/12 mx-auto">
        <div className="place-items-center">{isNavigating && <Spiner />}</div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
