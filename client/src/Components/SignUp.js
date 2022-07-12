import {useState} from "react"
function SignUp ( ) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    function onSignup(e) {
        e.preventDefault()
        const user = {
            "name": username,
            "email": email,
            password
        }

        fetch(`/users`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res=> {
            if (res.ok){
                res.json()
                .then(alert("You've created an account, return to the Sign in page to sign in."))
            }
        })
    }
    return (
        <div> 
        <h1>Sign Up</h1>
        <form onSubmit={onSignup}>
        
        <label>
          Username
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
        Email
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label> <br></br>
        <label>
         Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        
       
        <input type="submit" value="Sign up!" />
      </form>
      { Object.keys(errors) ? Object.keys(errors).map((key, index) => <div>{key+': ' + Object.values(errors)[index]}</div>) : null }
      </div>
    )
}

export default SignUp
