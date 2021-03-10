import React from 'react';

import './sectionSix.scss'

const SectionSix = () => {
    return (
        <div className={'section6'}>
            <div className={'section6__wrapper'}>
                    <p  className={'section6__wrapper__title'}>Мнение эксперта</p>
                <div className={'section6__wrapper__expert'}>
                    <div className={'section6__wrapper__expert__card'}>
                        <p className={'section6__wrapper__expert__card__text'}>
                            Современные препараты от диабета направлены на устранение симптомов заболевания, а не причин. Средство от диабета Диалайн направлены на длительную ремиссию. Уже после 1 курса симптомы диабета постепенно проходят, восстанавливается работа всех систем организма.
                        </p>
                        <p className={'section6__wrapper__expert__card__text'}>
                            Эффективность средства подтвердили как лабораторные исследования, так и практическое применение.
                        </p>
                        <p className={'section6__wrapper__expert__card__text'}>
                            После курса Диалайна динамика лечения диабета у моих пациентов заметно улучшилась. Рекомендую это современное и эффективное средство.
                        </p>
                        <p className={'section6__wrapper__expert__card__name'}>
                            Данилов Юрий Петрович,<br/>
                            кандидат медицинских наук,<br/>
                            врач-эндокринолог
                        </p>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SectionSix;