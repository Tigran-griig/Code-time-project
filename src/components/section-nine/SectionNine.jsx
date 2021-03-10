import React from 'react';


import './sectionNine.scss'
const SectionNine = () => {
    return (
        <div className={'section9'}>
            <div className={'section9__wrapper'}>
                <p className={'section9__wrapper__title'}>Как мы работаем</p>
                <div className={'section9__wrapper__work'}>
                    <div className={'section9__wrapper__work__work-block work-block--1'}>
                         <p className={'section9__wrapper__work__work-block__prof'}>Директор по качеству</p>
                        <p className={'section9__wrapper__work__work-block__name'}>Лев Алиев</p>
                        <p className={'section9__wrapper__work__work-block__text'}>следит, что ваш заказ<br/>оригинален и упакован<br/>верно</p>
                    </div>
                    <div className={'section9__wrapper__work__work-block work-block--2'}>
                        <p className={'section9__wrapper__work__work-block__prof'}>Директор колл-центра</p>
                        <p className={'section9__wrapper__work__work-block__name'}>Анна Кирилова</p>
                        <p className={'section9__wrapper__work__work-block__text'}>отвечает за своевременную<br/>связь по указанному<br/>вами телефону</p>
                    </div>
                    <div className={'section9__wrapper__work__work-block work-block--3'}>
                        <p className={'section9__wrapper__work__work-block__prof'}>Директор по логистике</p>
                        <p className={'section9__wrapper__work__work-block__name'}>Алексей Ермаков</p>
                        <p className={'section9__wrapper__work__work-block__text'}> в ответе за доставку<br/>посылки по нужному<br/>адресу и в срок</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SectionNine;