import React from 'react';
import '../styles/Aside.css';
import AsideBlock from './AsideBlock';

function Aside() {

    return (
        <aside>
            <div id='search'>
                <i className="fa-solid fa-bars fa-2x"></i>
                <input type="text" />
                <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </div>
            <div className='info'>
                <i className="fa-solid fa-user"></i>
                <span>Storybook</span>
                <span>5</span>
            </div>
            <AsideBlock name='Alex' />
            <AsideBlock name='Oleg' />
            <AsideBlock name='Andrey' />
            <AsideBlock name='Jeka' />
            <AsideBlock name='Vova' />
        </aside>
    );
}

export default Aside;