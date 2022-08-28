import React from 'react';
import '../styles/Backet.css'
import Rout from './Rout';

import img from '../styles/Prod1.svg';

function Backet() {
    return (
        <>
            <Rout />
            <p id='back'><span>Моя корзина</span><span><a href="/#">Очистить корзину</a></span></p>
            <div className='backet_content'>
                <div className='backet_list'>
                    <table className='list_prod_info'>
                        <tbody>
                            {[...Array(5)].map((item, index) => <tr key={index}>
                                <td><img src={img} alt="" /></td>
                                <td className='td_name'>Шпагат Macrametr 4 мм, 100 нитей</td>
                                <td className='td_price'>332 $</td>
                                <td>
                                    <div>
                                        <button>–</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                </td>
                                <td className='td_price'>664 $</td>
                                <td><i className="fa-solid fa-trash-can"></i></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <div className='backet_price'>
                    <table>
                        <tbody>
                            <tr>
                                <td className='td_name'>Товары, 4 шт</td>
                                <td className='td_price'>1 184 $</td>
                            </tr>
                            <tr>
                                <td className='td_name'>Скидка на товары</td>
                                <td className='td_price'>35 $</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td>Вам будет начислено:</td>
                                <td>Итого:</td>
                            </tr>
                            <tr>
                                <td>51 бонус</td>
                                <td>1 149 $</td>
                            </tr>
                        </tbody>
                    </table>
                    <button>Оформить заказ</button>
                </div>
            </div>
            <p>С этим покупают</p>
            <div></div>
        </>
    );
}

export default Backet;