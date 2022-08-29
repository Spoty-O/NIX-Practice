import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import img from '../styles/Hobby_Art_4_1.svg';

function Header() {
    return (
        <header>
            <div className='allPadding short_info'>
                <label><i className="fa-solid fa-phone" /><span>+1 (824) 765 28 20</span></label>
                <label><i className="fa-solid fa-location-dot" /><span className='except_span'>г. Киев, ул. Петра Алексеева, д. 6</span></label>
                <label><i className="fa-solid fa-clock" /><span>Ежедневно с 10:00 до 19:00</span></label>
            </div>
            <div className='allPadding nav_bar'>
                <nav>
                    <Link to={'/'}>Каталог</Link>
                    <Link to={'/'}>Оплата и доставка</Link>
                    <Link to={'/'}>Бонусная программа</Link>
                    <Link to={'/'}>О компании</Link>
                    <Link to={'/'}>Контакты</Link>
                    <Link to={'/'}><img src={img} alt="none" /></Link>
                    <div className='nav_elements search'>
                        <input type="text" placeholder='Поиск товара'/>
                        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                    </div>
                    <button className='nav_elements'>
                        <i className="fa-solid fa-user" />
                        <span className='but_span'> Войти</span>
                    </button>
                    <Link to={'/#'} className='nav_elements'>
                        <i className="fa-solid fa-heart" />
                        <span className='but_span'> Избранное</span>
                        <div className='ellipse'>
                            <span>2</span>
                        </div>
                    </Link>
                    <Link to={'/backet'} className='nav_elements'>
                        <i className="fa-solid fa-basket-shopping" />
                        <span className='but_span'> Корзина</span>
                        <div className='ellipse'>
                            <span>2</span>
                        </div>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;