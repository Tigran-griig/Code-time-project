import React from 'react';

import slideImg1 from '../../img/sprites/png/slide-img3.png'
import slideImg2 from '../../img/sprites/png/slide-img2.png'
import slideImg3 from '../../img/sprites/png/slide-img1.png'

import './sectionEght.scss'

const SectionEgt = () => {
    return (
        <div className={'section8'}>
            <div className={'section8__wrapper'}>
                <p className={'section8__wrapper__title'}>Отзывы</p>
                <div className={'section8__wrapper__slide'} style={{marginTop:'25px'}}>
                    <div className={'section8__wrapper__slide__img'}>
                        <img src={slideImg1}/>
                    </div>
                    <div className={'section8__wrapper__slide__text'}>
                        <p className={'section8__wrapper__slide__text__description'}>Спасибо огромное за этот препарат. Раньше приходилось пить таблетки горстями, сейчас их пью крайне редко. После курса Диалайна ушла усталость и сонливость, сахар в крови пришел в норму. Я даже стал забывать проверять его. Чувствую себя здоровым и нормальным человеком.</p>
                        <p className={'section8__wrapper__slide__text__city'}>Петр Николенко, г. Гуково</p>

                    </div>

                    </div>
                <div className={'section8__wrapper__slide'}>
                    <div className={'section8__wrapper__slide__img'}>
                        <img src={slideImg2}/>
                    </div>
                    <div className={'section8__wrapper__slide__text'}>
                        <p className={'section8__wrapper__slide__text__description'}>Много лет мучилась от диабета 2 типа, сахар в крови постоянно скакал. Соблюдала диеты, делала все назначения врача. Но все равно за сутки изменения от 3,2 до 11. Золовка принесла Диалайн, советовала пить 2 раза в день. Знаете, я быстро почувствовала первые изменения. Сахар стал меняться в пределах 5-8, вполне нормально. Вместе с этим пришли хорошее самочувствие и желание жить.</p>
                        <p className={'section8__wrapper__slide__text__city'}>Людмила Новоселова, г. Чита</p>

                    </div>

                </div>
                <div className={'section8__wrapper__slide'}>
                    <div className={'section8__wrapper__slide__img'}>
                        <img src={slideImg3}/>
                    </div>
                    <div className={'section8__wrapper__slide__text'}>
                        <p className={'section8__wrapper__slide__text__description'}>Моему супругу 49 лет, диабетом 2-го типа болеет пять лет, принимал разные препараты — почти все, кроме инсулина. Постоянная усталость, почти постоянная депрессия. Узнав о Диалайне, решили попробовать. Супруг стал принимать таблетки, как написано в инструкции. Результаты не заставили себя долго ждать. Уже после пары дней возникло мужское желание (уж простите меня за интимные подробности, но такого не было больше полугода). Придерживался диеты, пил таблетки.
                            Результат: даже сразу после ужина сахар 6, полностью восстановилась наша интимная жизнь плюс у мужа бодрость духа и огромное желание быть здоровым!</p>
                        <p className={'section8__wrapper__slide__text__city'}>Жанна Новоселова, г. Санкт-Петербург</p>

                    </div>

                </div>
            </div>
            </div>
    );
};

export default SectionEgt;