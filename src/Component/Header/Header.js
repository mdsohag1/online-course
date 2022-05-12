import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const element = <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
    return (
        <div className='nav d'>
            <nav className='container'>
                <a href="/Home">Home</a>
                <a href="/Blog">Blog</a>
                <a href="/About">About Course</a>
                <a href="/Course">All Course</a>
                <FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
                <span className='count'>{props.cart.length}</span>
            </nav>
        </div>
    );
};

export default Header;