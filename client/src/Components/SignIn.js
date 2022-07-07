import NavBar from "./NavBar"
function SignIn () {
    
    

    return (
        <div>
            <NavBar />
            <h1>Trip Manager</h1>
            <h2>Sign In</h2>
            <form>
                <label>
                    Username
                    <input type="text" />
                </label>
                <label>
                    Password
                    <input type="password" />
                </label>
            <input type="submit" value="Sign in!" />
            </form>
            <a href="/signup">Create a new account</a>
            
        </div>
        )
}

export default SignIn
