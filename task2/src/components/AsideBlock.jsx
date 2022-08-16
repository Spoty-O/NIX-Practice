import React from 'react';

function AsideBlock(props) {

    function getRandomInt() {
        return Math.floor(Math.random() * 255);
    }

    const albom = ['Days Well Spent', 'A Year to Remember', 'Our Best Times Together', 'Little Joys in Life', 'A Trip Around the Sun'];

    return (
        <div>
            <button className='user_name' style={{ backgroundColor: `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})` }}>{props.name}</button>
            <ul>
                <li>
                    <span>{albom[0]}</span>
                    <span><i className="fa-regular fa-images"></i> 1</span>
                </li>
                <li>
                    <span>{albom[1]}</span>
                    <span><i className="fa-regular fa-file"></i> 17</span>
                </li>
                <li>
                    <span>{albom[3]}</span>
                    <span><i className="fa-regular fa-file"></i> 20</span>
                </li>
            </ul>
        </div>
    );
}

export default AsideBlock;