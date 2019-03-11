import React from 'react';

const Login = () => {
    const clickHandler = () => {
        console.log('Logging In');
    }
    return (
        <div>
            <form>
                <input type="text" />
                <input type="text" />
                <button onClick={()=>clickHandler()}></button>
            </form>
        </div>
    );
}

export default Login;
