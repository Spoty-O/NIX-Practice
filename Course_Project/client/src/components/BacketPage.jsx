import React from 'react';
import Backet from './Backet';

function BacketPage() {

    document.getElementById('root').style.background = '#FFFFFF';

    return (
        <div style={{ background: '#FFFFFF', paddingBottom: '100px' }}>
            <div className='allPadding'>
                <Backet />
            </div>
        </div>
    );
}

export default BacketPage;