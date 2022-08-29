import React from 'react';
import Catalog from './Catalog';

function CatalogPage() {

    document.getElementById('root').style.background = '#FAF9F9';

    return (
        <div style={{background: '#FAF9F9', paddingBottom: '100px'}}>
            <div className='allPadding'>
                <Catalog />
            </div>
        </div>
    );
}

export default CatalogPage;