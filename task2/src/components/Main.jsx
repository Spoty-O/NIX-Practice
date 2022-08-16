import React from 'react';
import PhotoBlock from './PhotoBlock';
import '../styles/Main.css';

function Main() {
    return (
        <main>
            <div className='header'>
                <div id='icons'>
                    <i className="fa-solid fa-pencil fa-3x"></i>
                    <i className="fa-solid fa-x fa-3x"></i>
                </div>
                <div className='user'>
                    <img src="https://igstart-up.com/wp-content/uploads/2022/06/Johnny-depp-5.jpg" alt="none" />
                    <div className='info_user'>
                        <div id='user_name'>
                            <span>Johny Depp</span>
                            <i className="fa-solid fa-trophy"></i>
                        </div>
                        <div id='user_act'>
                            <label><span>24</span> STORIES</label>
                            <label><span>172</span> FOLLOWERS</label>
                            <label><span>2</span> <i className="fa-solid fa-comment-dots fa-xl"></i></label>
                        </div>
                    </div>
                </div>
                <div className='navigation'>
                    <ul>
                        <li>My Stories</li>
                        <li>Following</li>
                        <li>Hot Stuff</li>
                        <li>Everyone</li>
                        <li>Categories <i className="fa-solid fa-caret-down"></i></li>
                    </ul>
                </div>
            </div>
            <PhotoBlock img={`https://ic.p24.to/unsafe/420x420/filters:quality(80)/my.p24.app/files/e18b5e68-18d7-44ed-99ad-6c9bce0a6735.png`} back={`https://www.business2community.com/wp-content/uploads/2016/09/busy-outdoors-900x250.jpg`} />
            <PhotoBlock img={`https://ic.p24.to/unsafe/420x420/filters:quality(80)/my.p24.app/files/e7dd3f20-2acc-46ab-8ad4-aece41036855.jpeg`} back={`https://images.squarespace-cdn.com/content/v1/59273c91f7e0ab8b7b4c7417/1496872102520-TJK2H71K0OLPQYAVKAVH/Banner5.jpg?format=2500w`} />
            <PhotoBlock img={`https://ic.p24.to/unsafe/420x420/filters:quality(80)/my.p24.app/files/c4efd885-3fd9-48ec-8648-bcace43b9fb2.jpeg`} back={`https://www.ice.cam.ac.uk/sites/www.ice.cam.ac.uk/files/styles/letterbox/public/externals/fe6d3331e9608fced42cdd078b126bc5.jpg?itok=_B2Du2N8`} />
            <PhotoBlock img={`https://ic.p24.to/unsafe/420x420/filters:quality(80)/my.p24.app/files/e18b5e68-18d7-44ed-99ad-6c9bce0a6735.png`} back={`https://www.business2community.com/wp-content/uploads/2016/09/busy-outdoors-900x250.jpg`} />
        </main>
    );
}

export default Main;