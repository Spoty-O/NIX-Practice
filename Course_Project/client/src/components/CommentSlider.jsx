import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../styles/CommentSlider.css';

import img from '../styles/Face.svg';

function CommentSlider() {
    return (
        <div className='prod_comment'>
            <button className='prev_el'><i className="fa-solid fa-angle-left"></i></button>
            <Swiper className='comment_list' modules={[Navigation, EffectCoverflow]} navigation={
                {
                    prevEl: '.prod_comment .prev_el',
                    nextEl: '.prod_comment .next_el',
                }}
                loop loopedSlides={3}
                spaceBetween={24}
                centeredSlides={true}
                slidesPerView={3}
                slidesPerGroup={1}
                effect={'coverflow'}
                coverflowEffect={
                    {
                        rotate: 50,
                        depth: 200,
                        stretch: 0,
                        slideShadows: false
                    }
                }>
                {[...Array(3)].map((item, index) => {
                    return (
                        <SwiperSlide key={index} className='comment_block'>
                            <div className='comment_info'>
                                <img src={img} alt="" />
                                <span>
                                    <span>
                                        Евгения Доценко
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                </span>
                                <span>13.06.2021 12:30</span>
                            </div>
                            <p><span>Комментарий:</span> <span>Хороший шпагат</span></p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <button className='next_el'><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
}

export default CommentSlider;