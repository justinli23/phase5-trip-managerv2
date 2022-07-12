import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home";
import TravelerPage from "./Components/TravelerPage";
import TripPage from "./Components/TripPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import TravelerDetails from "./Components/TravelerDetails";
import TripDetails from "./Components/TripDetails";
import NavBar from "./Components/NavBar";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          if (user) {setIsAuth(true)}
          setUser(user);
          setIsAdmin(user.admin)
        });
      }
    });
  }, []);

    // if (!user) return <Login error={'please login'} />;

  return (
    <div className="App">
      <NavBar user={user} isAuth={isAuth} isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={<Home setIsAuth={setIsAuth} />} />
        <Route path="travelers" element={<TravelerPage user={user}/>} />
        <Route path="travelers/:id" element={<TravelerDetails isAdmin={isAdmin}/>} />
        <Route path="trips" element={<TripPage />} />
        <Route path="trips/:id" element={<TripDetails isAdmin={isAdmin}/>} />
        <Route path="signin"
          element={<SignIn
            setIsAuth={setIsAuth}
            setUser={setUser}
            user={user}
            isAuth={isAuth}
            setIsAdmin={setIsAdmin}/>} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
