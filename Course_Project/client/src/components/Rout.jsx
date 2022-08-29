import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Rout.css';

function Rout() {
    return (
        <nav className='rout'>
            <Link to={'/'}>Главная</Link>
            <i className="fa-solid fa-arrow-right-long"></i>
            <Link to={'/'}>Каталог</Link>
            <i className="fa-solid fa-arrow-right-long"></i>
            <Link to={'/'}>Макраме</Link>
        </nav>
    );
}

export default Rout;