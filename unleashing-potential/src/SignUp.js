import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="login-container">
            <div className="login-center">
                <div className="login-logo">Unleashing Potential Together</div>
                <h2>Create an account</h2>
                <p>Already have an account? <a href="#"><Link to="/login">Log in here</Link></a></p>
                <form>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button class="btnSignUp" type="submit">Sign up</button>
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

export default SignUp;