import React,{ useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className='MainloginPage'>
            {isLogin ? (
                <div className="loginPage">
                    <div className="formContainer">
                        <h1 className="title">Login to Your Account</h1>
                        <form className="loginForm">
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit" className="loginButton">Login</button>
                        </form>
                        <p><a href="">Forgot Password</a></p>
                        <p>Don't have an account? <a href="#" onClick={toggleForm}>Register</a></p>
                    </div>
                    <div className="imgContainer">
                        <img src="/bg.png" alt="Real Estate Background" />
                    </div>
                </div>
            ) : (
                <div className="loginPage">
                    <div className="formContainer">
                        <h1 className="title">Register Your Self</h1>
                        <form className="loginForm">
                            <input type="text" placeholder='Enter your username' required />
                            <input type="email" placeholder="Enter your Email" required />
                            <input type="password" placeholder="Enter your Password" required />
                            <button type="submit" className="loginButton">Register</button>
                        </form>
                        <p><a href="">Forgot Password</a></p>
                        <p>Already have an account? <a href="#" onClick={toggleForm}>Login</a></p>
                    </div>
                    <div className="imgContainer">
                        <img src="/bg.png" alt="Real Estate Background" />
                    </div>
                </div>
            )}
        </div>




    );
}

export default LoginPage;
