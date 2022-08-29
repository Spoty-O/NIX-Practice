import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import '../styles/Slider.css';
import svg_img from '../styles/Svg_img.svg';
import svg_pointer from '../styles/Svg_pointer.svg';
import svg_text from '../styles/Circle_text.svg'
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <div className='slider_main_block'>
            <Swiper modules=
                {
                    [Navigation, Pagination]
                }
                loop loopedSlides={5}
                navigation={
                    {
                        prevEl: '.slide_buttons .prev_el',
                        nextEl: '.slide_buttons .next_el'
                    }}
                pagination={
                    {
                        el: '.slide_buttons > span',
                        type: 'fraction'
                    }
                }>
                {[...Array(5)].map((item, index) => { 
                    return (<SwiperSlide key={index} className='slide'>
                        <div className='slider_fback'>
                            <div className='slider_back'>
                                <div>
                                    <img src={svg_img} alt="error" />
                                </div>
                                <div className='svg_pointer'>
                                    <img src={svg_pointer} alt="error" />
                                </div>
                                <div className='text'>
                                    <p className='slide_first_p'>Пряжа Macrametr</p>
                                    <p className='slide_second_p'>Повседневная практика показывает, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании форм воздействия.</p>
                                    <Link to={'/'} className='slide_link_button'>В каталог</Link>
                                </div>
                                <div className='mark_buttons'></div>
                            </div>
                        </div>
                    </SwiperSlide>)
                })}
                <div className='slide_buttons'>
                    <button className='prev_el'><i className="fa-solid fa-angle-left"></i></button>
                    <span></span>
                    <button className='next_el'><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </Swiper>
            <img src={svg_text} alt="error" className='svg_text' />
        </div >
    );
}

export default Slider;