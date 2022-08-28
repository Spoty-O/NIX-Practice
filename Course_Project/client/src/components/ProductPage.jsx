import React from 'react';
import Header from './Header';
import Product from './Product';

function CatalogPage() {
    return (
        <div style={{ background: '#FFFFFF', paddingBottom: '100px'}}>
            <Header />
            <div className='allPadding'>
                <Product />
            </div>
        </div>
    );
}

export default CatalogPage;