import React from 'react';
import '../styles/Slide.css';
import svg_img from '../styles/Svg_img.svg';
import svg_pointer from '../styles/Svg_pointer.svg';
import svg_text from '../styles/Circle_text.svg'

function Slide() {
    return (
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
                <button className='slide_link_button'>В каталог</button>
            </div>
            <div className='mark_buttons'>
                <img src={svg_text} alt="error" className='svg_text'/>
                <div className='slide_buttons'>
                    <button><i className="fa-solid fa-angle-left"></i></button>
                    <span>1/5</span>
                    <button><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Slide;