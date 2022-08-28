import React from 'react';
import Header from './Header';
import Catalog from './Catalog';

function CatalogPage() {
    return (
        <div style={{background: '#FAF9F9', paddingBottom: '100px'}}>
            <Header />
            <div className='allPadding'>
                <Catalog />
            </div>
        </div>
    );
}

export default CatalogPage;