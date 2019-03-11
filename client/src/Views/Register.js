import React from 'react';

const Register = () => {
    const clickHandler = () => {
        console.log('Logging In');
    }
    return (
        <div>
            <form>
                DROPDOWN
                <input type="text" />
                <input type="text" />
                <button onClick={()=>clickHandler()}></button>
            </form>
        </div>
    );
}

export default Register;
