import React from 'react';
import Product from './Product';

function CatalogPage() {

    document.getElementById('root').style.background = '#FFFFFF';

    return (
        <div style={{ background: '#FFFFFF', paddingBottom: '100px'}}>
            <div className='allPadding'>
                <Product />
            </div>
        </div>
    );
}

export default CatalogPage;