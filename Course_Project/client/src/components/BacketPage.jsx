import React from 'react';
import Header from './Header';
import Backet from './Backet';

function BacketPage() {
    return (
        <div style={{ background: '#FFFFFF', paddingBottom: '100px' }}>
            <Header />
            <div className='allPadding'>
                <Backet />
            </div>
        </div>
    );
}

export default BacketPage;