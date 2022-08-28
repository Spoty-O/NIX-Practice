import React from 'react';
import '../styles/CommentSlider.css';

import img from '../styles/Face.svg';

function CommentSlider() {
    return (
        <div className='prod_comment'>
            <button><i className="fa-solid fa-angle-left"></i></button>
            <div className='comment_list'>
                <div className='comment_block'>
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
                </div>
                <div className='comment_block'>
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
                </div>
                <div className='comment_block'>
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
                </div>
            </div>
            <button><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
}

export default CommentSlider;