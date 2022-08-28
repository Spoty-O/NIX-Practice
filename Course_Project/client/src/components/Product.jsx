import React from 'react';
import '../styles/Product.css';
import Rout from './Rout';
import ProductDescrip from './ProductDescrip';

import img from '../styles/Prod1.svg';
import img1 from '../styles/Prod4.svg';
import img2 from '../styles/Prod5.svg';
import CommentSlider from './CommentSlider';

function Product() {

    const [heart, setHeart] = React.useState("fa-regular fa-heart");
    const reg = "fa-regular fa-heart";
    const sol = "fa-solid fa-heart";

    function color() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    const arr = [color(), color(), color(), color(), color(), color(), color(), color(), color(), color()];

    return (
        <>
            <Rout />
            <div className='prod_full'>
                <div>
                    <div className='left_side_prod'>
                        <img src={img} alt="none" />
                        <div className='prod_radio'>
                            {arr.map((item, index) => <input type={'radio'} name='radio' key={index} className='color_circle' style={{ backgroundColor: item }} />)}
                        </div>
                    </div>
                    <div>
                        <p className='big_names'><span>Шпагат Macrametr 4 мм, 100 нитей</span><i className={heart} onClick={() => { heart === reg ? setHeart(sol) : setHeart(reg) }}></i></p>
                        <p className='medium_discr'>Хлопковый шпагат для рукоделия 4 мм состоит из 100 тонких скрученных нитей. Для создания модных перьев (листьев), кисточек, панно, ловцов снов, брелков, украшений, салфеток, кашпо, наволочек и других изделий в технике макраме. Мягкий и приятный на ощупь, при желании, можно легко расплести в бахрому.</p>
                        <table>
                            <thead>
                                <tr>
                                    <th className='big_names'>Xарактеристики</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Длина</td>
                                    <td>100 м</td>
                                </tr>
                                <tr>
                                    <td>Производитель</td>
                                    <td>Россия</td>
                                </tr>
                                <tr>
                                    <td>Состав</td>
                                    <td>100% хлопок</td>
                                </tr>
                                <tr>
                                    <td>Толщина</td>
                                    <td>4 мм (100 нитей)</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='price_control'>
                            <span className='big_names'>332 $</span>
                            <div>
                                <button>–</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <button>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
                <p className='big_names'>Отзывы</p>
                <CommentSlider />
                <p className='big_names'>Смотрите также</p>
                <div>
                    <ProductDescrip img={img1} name={`Пряжа Arachna "Macrame MINI"`} price={"1053 $"} discount={'499 $'} />
                    <ProductDescrip img={img2} name={`Шнур "Gamma" 0.8 мм, 50 м`} price={"852 $"} discount={null} />
                </div>
            </div>
        </>
    );
}

export default Product;