import React, { useState } from 'react'
import "./Login.css"
import logo from "./images/logo_black.png";
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

      //login 
    const signIn = event => {
        event.preventDefault()
        // auth.signInWithPopup().
        auth.signInWithEmailAndPassword(email, password).
            then(auth => {
            history.push('/')
            })
        .catch(error => alert(error.message))
    }

    //create user 
    const register = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
            history.push('/')
            })
        .catch(error => alert(error.message))
    }
    
    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src={logo}/>
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}
                        onChange={event => setEmail(event.target.value)} />
                    

                    <h5>Password</h5>
                    <input type="password" value={password}
                        onChange={event => setPassword(event.target.value)} />
                    

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to Wuzi's Conditions
                of Use & Sale. Please
                see our Privacy Notice, Our Cookies Notice and 
                our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton" >Create your Wuzi Account</button>
            </div>
            
        </div>
    )
}

export default Login
