import { Link, Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import TravelerPage from "./Components/TravelerPage";
import TripPage from "./Components/TripPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import NavBar from "./Components/NavBar";

function App() {
  
  return (
    <div className="App">
      <h1> APP COMPONENT </h1>
      <Home />
    </div>
  );
}

export default App;
