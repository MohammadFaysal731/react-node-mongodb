import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav >
                <Link style={{ marginRight: '20px' }} to='/'>Home</Link>
                <Link to='user/add'>Add User</Link>
                <Link style={{ marginLeft: '20px' }} to='/update/:id'>Update User</Link>
            </nav>
        </div>
    );
};

export default Header;