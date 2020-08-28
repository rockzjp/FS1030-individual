import React from 'react';
import './admin.css';

function register() {
    return (
        <div>

            <div>Name: <input name="name" id="name" /></div>
            <div>Email: <input name="email" id="email" /></div>
            <div>Password: <input name="password" id="password" type="password" /></div>
            <div><input type="submit" value="Submit" /></div>

        </div>
    );
}

export default register;