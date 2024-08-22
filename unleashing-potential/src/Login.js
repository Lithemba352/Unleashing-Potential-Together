import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-center">
                <div className="login-logo">Unleashing Potential Together</div>
                <h2>Log in to your account</h2>
                <p>Don't have an account? <a href="#"><Link to="/signup">Sign up here</Link></a></p>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button class="btnLogIn" type="submit">Log in</button>
                    <div className="or-divider"></div>
                </form>
                <footer>
                    <a href="#">Terms of Service</a> · <a href="#">Privacy Policy</a> 
                    <p>© 2024 Unleashing Potential Together, Inc.</p>
                </footer>
            </div>
        </div>
    );
};

export default Login;