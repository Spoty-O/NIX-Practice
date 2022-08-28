import React from 'react';
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
                    <a href="/#">Каталог</a>
                    <a href="/#">Оплата и доставка</a>
                    <a href="/#">Бонусная программа</a>
                    <a href="/#">О компании</a>
                    <a href="/#">Контакты</a>
                    <a href="/#"><img src={img} alt="none" /></a>
                    <div className='nav_elements search'>
                        <input type="text" placeholder='Поиск товара'/>
                        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                    </div>
                    <button className='nav_elements'>
                        <i className="fa-solid fa-user" />
                        <span className='but_span'> Войти</span>
                    </button>
                    <button className='nav_elements'>
                        <i className="fa-solid fa-heart" />
                        <span className='but_span'> Избранное</span>
                        <div className='ellipse'>
                            <span>2</span>
                        </div>
                    </button>
                    <button className='nav_elements'>
                        <i className="fa-solid fa-basket-shopping" />
                        <span className='but_span'> Корзина</span>
                        <div className='ellipse'>
                            <span>2</span>
                        </div>
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;