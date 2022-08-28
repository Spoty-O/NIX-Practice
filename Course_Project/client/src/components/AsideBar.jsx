import React from 'react';
import '../styles/AsideBar.css';

function AsideBar() {
    return (
        <aside>
            <dl>
                <dt>Тип изделий</dt>
                <dd>
                    <input type="checkbox" />
                    <label>Шпагат, шнуры, веревки</label>
                </dd>
                <dd>
                    <input type="checkbox" />
                    <label>Кольца, бусины</label>
                </dd>
                <dd>
                    <input type="checkbox" />
                    <label>Джут</label>
                </dd>
            </dl>
            <dl>
                <dt>Состав</dt>
                <dd>
                    <input type="checkbox" />
                    <label>Хлопок</label>
                </dd>
                <dd>
                    <input type="checkbox" />
                    <label>Синтетика</label>
                </dd>
                <dd>
                    <input type="checkbox" />
                    <label>С сердечником</label>
                </dd>
            </dl>
            <dl>
                <dt>Диаметр</dt>
                <dd>
                    <input type="checkbox" />
                    <label>3 мм</label>
                </dd>
                <dd>
                    <input type="checkbox" />
                    <label>4 мм</label>
                </dd>
                <dd>
                    <input type="checkbox" />
                    <label>4,5 мм</label>
                </dd>
                <dd>
                    <input type="checkbox" />
                    <label>5 мм</label>
                </dd>
            </dl>
            <dl>
                <dt>Производитель</dt>
                <dd>
                    <input type="checkbox" />
                    <label>Macrametr</label>
                </dd>
                <dd>
                    <input type="checkbox" />
                    <label>Зефирка</label>
                </dd>
                <dd>
                    <input type="checkbox" />
                    <label>Гамма</label>
                </dd>
                <dd>
                    <input type="checkbox" />
                    <label>Сибшнур</label>
                </dd>
            </dl>
            <button className='button_show'>Показать</button>
            <button className='button_clear'>Очистить</button>
            <span className='product_count'>Подобрано 6 товаров</span>
        </aside>
    );
}

export default AsideBar;