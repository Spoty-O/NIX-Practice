import { Routes, Route } from 'react-router-dom';
import CatalogPage from './components/CatalogPage';
import ProductPage from './components/ProductPage';
import BacketPage from './components/BacketPage';
import './styles/App.css';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<CatalogPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/backet" element={<BacketPage />} />
            </Routes>
        </>
    );
}

export default App;