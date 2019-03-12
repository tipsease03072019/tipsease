import React from 'react';
import { Link } from 'react-router-dom';

import loginIllustrations from '../assets/login.svg';

const Login = () => {
    const clickHandler = () => {
        console.log('Logging In');
    }
    return (
        <div>
            <form>
                <img src={loginIllustrations} alt=""/>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <button onClick={()=>clickHandler()}> Login</button>
                <Link to="/register">Register</Link>
            </form>
        </div>
    );
}

export default Login;
