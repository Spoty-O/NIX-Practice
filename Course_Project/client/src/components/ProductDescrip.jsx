import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductDescrip.css';

function ProductDescrip(props) {

    const [heart, setHeart] = React.useState("fa-regular fa-heart");
    const reg = "fa-regular fa-heart";
    const sol = "fa-solid fa-heart";
    function color() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    const arr = [color(), color(), color(), color()];

    return (
        <div className='prod_scrip'>
            <div className='prod_icons'>
                <i className={heart} onClick={() => { heart === reg ? setHeart(sol) : setHeart(reg) }}></i>
                <i className="fa-solid fa-ellipsis"></i>
            </div>
            <Link to={'/product'}><img src={props.img} alt="none" style={{ height: '150px', width: '100%' }} /></Link>
            <Link to={'/product'} className='prod_name'>{props.name}</Link>
            <div className='prod_colors'>
                {arr.map((item, index) => <div key={index} className='color_circle' style={{ backgroundColor: item }}></div>)}
                <span>+5</span>
            </div>
            <div className='price'>
                <span className={props.discount ? 'old_price' : 'prod_price'}>{props.price}</span><span className={props.discount ? 'new_price' : ''}>{props.discount}</span>
            </div>
            <button><i className="fa-solid fa-basket-shopping" /> В корзину</button>
        </div>
    );
}

export default ProductDescrip;