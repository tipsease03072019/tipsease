import React from 'react';

const ProfilePage = () => {
    const clickHandler = () => {
        console.log('Editing User Details')
    }
    return (
        <div>
            <h2>Welcome *NAME*</h2>
            <h4>User Details</h4>
            {/* USER DETAILS. To Be Made into forms when 'edit user details is clicked' */}
                <p>Name</p>
                <p>Age</p>
                <p>Email</p>
                <p>Phone</p>
            <button onClick={()=> clickHandler()}>Edit User Details</button>
        </div>
    );
}

export default ProfilePage;
