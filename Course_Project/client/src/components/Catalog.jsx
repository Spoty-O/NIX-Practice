import React from 'react';
import '../styles/Catalog.css';
import AsideBar from './AsideBar.jsx';
import ProductDescrip from './ProductDescrip.jsx';
import Rout from './Rout.jsx';
import Slide from './Slide.jsx';

import img1 from '../styles/Prod1.svg';
import img2 from '../styles/Prod2.svg';
import img3 from '../styles/Prod3.svg';
import img4 from '../styles/Prod4.svg';
import img5 from '../styles/Prod5.svg';
import img6 from '../styles/Prod6.svg';

function Catalog() {

    const img_arr = [img1, img2, img3, img4, img5, img6];
    const names_arr = [
        'Шпагат Macrametr 4 мм, 100 нитей',
        'Шпагат джутовый Сибшнур 500 м',
        'Пряжа Arachna "Macrame MAXI"',
        'Пряжа Arachna "Macrame MINI"',
        'Шнур "Gamma" 0.8 мм, 50 м',
        'Шнур "Gamma" 0.8 мм, 50 м'
    ];
    const price_arr = ['332 $', '422 ₽', '1092 $', '1053 $', '852 $', '617 $'];
    return (
        <>
            <div className='slider'>
                <Slide />
            </div>
            <Rout />
            <div className='price_filter'>
                <button>Цена <i className="fa-solid fa-arrow-up"></i></button>
                <button>Цена <i className="fa-solid fa-arrow-down"></i></button>
            </div>
            <div className='bar_products'>
                <AsideBar />
                <div className='product_list'>
                    {img_arr.map((item, index) => <ProductDescrip key={index} img={item} name={names_arr[index]} price={price_arr[index]} discount={null} />)}
                    <ProductDescrip key={6} img={img_arr[0]} name={names_arr[0]} price={price_arr[0]} discount={'232 $'} />
                </div>
            </div>
        </>
    );
}

export default Catalog;