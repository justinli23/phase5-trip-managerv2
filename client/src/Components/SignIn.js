import { useState } from "react";
function SignIn( {setUser, setIsAuth, setIsAdmin} ) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function login(e) {
    e.preventDefault();
    document.getElementById('login').reset()
    const user = {
      username: username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    .then(res => {
        if(res.ok){
          res.json()
          .then(user=>{
            setUser(user)
            setIsAuth(true)
            setIsAdmin(user.admin)
            setErrors(null)
            alert("You are logged in!")
          })

        } else {
          res.json()
          .then(json => setErrors(json.error))
        }
      })
    
  }

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuth(false)
        setUser(null)
        setIsAdmin(false)
        alert("You have logged out.")
    })
}

  return (
    <div>
        <h2>Sign In</h2>
        
        <form onSubmit={login} id='login'>
            Username:{" "}
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />{" "}
            <br></br>
            Password: <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br></br>
            <input type="submit" value="Sign in" />
        </form>
        {errors ? <div>{errors}</div> : null}

        <button onClick={logout}>Logout</button>

        <br></br>
        <a href="/signup">Create a new account</a>
    </div>
  );
}

export default SignIn;
