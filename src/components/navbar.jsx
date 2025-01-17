import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/navbar.css';
const navbar = ({size , setShow}) => {
    return (
        <nav className="nav-bar">
            <span className='my-shop' onClick={ () => setShow(true)}>Shopy</span>
        <div className="cart" onClick={() => setShow(false)}>
            <span> 
                <i className="fas fa-shopping-cart"></i>
            </span>
            <span>
                {size}
            </span>
        </div>
        </nav>
    );
    }

export default navbar;