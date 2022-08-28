import React from 'react';
import '../styles/Rout.css';

function Rout() {
    return (
        <nav className='rout'>
            <a href="/#">Главная</a>
            <i className="fa-solid fa-arrow-right-long"></i>
            <a href="/#">Каталог</a>
            <i className="fa-solid fa-arrow-right-long"></i>
            <a href="/#">Макраме</a>
        </nav>
    );
}

export default Rout;