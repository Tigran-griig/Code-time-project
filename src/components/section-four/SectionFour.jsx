import React from 'react';

import './sectionFour.scss'

const SectionFour = () => {
    return (
        <div className={'section4'}>
            <div className={'section4__wrapper'}>
                    <p  className={'section4__wrapper__title'}>Диалайн – биогенный комплекс для борьбы с диабетом</p>
                <div className={'section4__wrapper__img'}/>
                <div  className={'section4__wrapper__block'}>
                    <p className={'section4__wrapper__block__text'}>
                        Диалайн – гордость отечественный фармакологии. Первый препарат в мире, который способен значительно облегчить и продлить жизнь диабетиков. Разработан ведущим советским и российским ученым – Андреем Семеновичем Ефимовым.<br/>
                        Появлению препарата предшествовали 10 лет разработок и 3 года тщательных клинических испытаний, доказавших эффективность препарата при диабете как 2-го, так и 1-го типа.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SectionFour;