import { Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import TravelerPage from "./Components/TravelerPage";
import TripPage from "./Components/TripPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import TravelerDetails from "./Components/TravelerDetails"
import TripDetails from "./Components/TripDetails"

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="travelers" element={<TravelerPage />} />
        <Route path="travelers/:id" element={<TravelerDetails />} />
        <Route path="trips" element={<TripPage />} />
        <Route path="trips/:id" element={<TripDetails />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
    </Routes>
    </div>
  );
}

export default App;
