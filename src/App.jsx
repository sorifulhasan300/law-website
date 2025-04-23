import { Outlet, useNavigation } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Spiner from "./Components/Spiner/Spiner";
import { ToastContainer } from "react-toastify";
function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  if (isNavigating) {
    return (
      <div className="place-items-center mt-20">
        <Spiner></Spiner>
      </div>
    );
  }
  return (
    <div className="font-mulish">
      <ToastContainer></ToastContainer>
      <NavBar></NavBar>
      <div className="w-11/12 mx-auto mt-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
