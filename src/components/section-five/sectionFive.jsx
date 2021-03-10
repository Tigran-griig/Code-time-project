import React from 'react';

import './sectionFive.scss'

const SectionFive = () => {
    return (
        <div className={'section5'}>
            <div className={'section5__wrapper'}>
                    <p className={'section5__wrapper__title'}>Одно средство – 5 действий против диабета</p>
                <div className={'section5__wrapper__actions'}>
                    <div className={'section5__wrapper__actions__block-left'}>
                        <div className={'action-block section5__wrapper__actions__block-left__block--1'}>
                            <p className={'action-number'}>1</p>
                            <p className={'action-text'}>
                                Стимулирует работу бета-клеток островков Лангерганса в поджелудочной железе
                            </p>

                        </div>
                        <div className={'action-block section5__wrapper__actions__block-left__block--2'}>
                            <p className={'action-number'}>2</p>
                            <p className={'action-text'}>
                                Нормализует обменные процессы, предотвращает нарушение функций щитовидной железы,
                            </p>

                        </div>

                    </div>
                    <div className={'section5__wrapper__actions__block-right'}>
                        <div className={'action-block section5__wrapper__actions__block-right__block--3'}>
                            <p className={'action-number'}>3</p>
                            <p className={'action-text'}>
                                Нормализует уровень фосфора в крови
                            </p>

                        </div>
                        <div className={'action-block section5__wrapper__actions__block-right__block--4'}>
                            <p className={'action-number'}>4</p>
                            <p className={'action-text'}>
                                Очищает кровь и лимфу
                            </p>

                        </div>
                        <div className={'action-block section5__wrapper__actions__block-right__block--5'}>
                            <p className={'action-number'}>5</p>
                            <p className={'action-text'}>
                                Поддерживает иммунитет и предотвращает нарушение зрения.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFive;