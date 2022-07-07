import NavBar from "./NavBar"
function SignUp () {
    
    

    return (
        <div>
            <NavBar />
            <h1>Trip Manager</h1>
            <h2>Sign Up for a New Account</h2>
            <form>
                <label>
                    Username
                    <input type="text" />
                </label>
                <label>
                    Password
                    <input type="password" />
                </label>
            <input type="submit" value="Sign up!" />
            </form>
            <a href="/signin">Return to Log In</a>
        </div>
        )
}

export default SignUp
