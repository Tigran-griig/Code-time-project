import React from 'react';

import './additional.scss'


const Additional = () => {
    return (
        <div className={'additional'}>
            <div className={'additional__wrapper'}>
                    <p className={'additional__wrapper__title'}>Дополнительное воздействие на организм</p>
                <ul className={'additional__wrapper__list'}>
                    <li className={'additional__wrapper__list__item'}>
                       <p className={'additional__wrapper__list__item__text'}> Очищает организм<br/>
                        от шлаков и токсинов
                       </p>
                    </li>
                    <li className={'additional__wrapper__list__item'}>
                        <p className={'additional__wrapper__list__item__text'}> Укрепляет стенки<br/>
                            сосудов
                        </p>
                    </li>
                    <li className={'additional__wrapper__list__item'}>
                        <p className={'additional__wrapper__list__item__text'}>Улучшает работу<br/>
                            сердца и его ритм
                        </p>
                    </li>
                    <li className={'additional__wrapper__list__item'}>
                        <p className={'additional__wrapper__list__item__text'}>Снижает количество<br/>
                            холестерина крови
                        </p>
                    </li>
                    <li className={'additional__wrapper__list__item'}>
                        <p className={'additional__wrapper__list__item__text'}>Нормализует<br/>
                            артериальное<br/>
                            давление
                        </p>
                    </li>
                    <li className={'additional__wrapper__list__item'}>
                        <p className={'additional__wrapper__list__item__text'}> Способствует регуляции<br/>
                            гормонального баланса<br/>
                            в организме
                        </p>
                    </li>
                    <li className={'additional__wrapper__list__item'}>
                        <p className={'additional__wrapper__list__item__text'}> Восполняет<br/>
                            иммунодефицит<br/>
                            в организме
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Additional;