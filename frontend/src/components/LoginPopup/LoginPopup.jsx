
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPopup.css'

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign up")

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <button type="button" onClick={() => setShowLogin(false)}>✕</button>
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Sign up" && (
                        <input type="text" placeholder='Your name' required />
                    )}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Your password' required />
                </div>
                <button type='submit'>
                    {currState === "Sign up" ? "Create account" : "Login"}
                </button>
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup