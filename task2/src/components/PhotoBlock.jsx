import React from 'react';
import '../styles/Photo_block.css';

function PhotoBlock(props) {
// https://www.business2community.com/wp-content/uploads/2016/09/busy-outdoors-900x250.jpg
// https://ic.p24.to/unsafe/420x420/filters:quality(80)/my.p24.app/files/e18b5e68-18d7-44ed-99ad-6c9bce0a6735.png
    return (
        <div className='stories'>
            <div className='story_1' style={{ backgroundImage: `url(${props.back})` }}>
                <div className='comment_story'>
                    <div id='comment'>
                        <span>Manifesto Futurist Architecture was published in August 1914, supposedly by ...</span>
                    </div>
                    <div id='icon_block'>
                        <i className="fa-solid fa-heart slide_icons"></i><span>78</span>
                        <i className="fa-solid fa-message slide_icons"></i><span>28</span>
                    </div>
                </div>
                <div className='info_story'>
                    <p>Martin Speedfreak</p>
                    <img src={`${props.img}`} alt="none" />
                </div>
                <div className='number'>
                    <span>17.10</span>
                </div>
            </div>
        </div>
    );
}

export default PhotoBlock;