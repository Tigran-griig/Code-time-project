import React from 'react';
import './sectionTree.scss'
const SectionTree = () => {
    return (
        <div className={'section3'}>
            <div className={'section3__wrapper'}>
                      <p className={'section3__wrapper__title'}>В 90% случаях недостаток фосфора приводит к <br/> осложнениям диабета</p>
                <div className={'section3__wrapper__complications'}>
                    <div className={'section3__wrapper__complications__block'}>
                            <p className={'section3__wrapper__complications__block__text'}>Шок и кома</p>
                            <p className={'section3__wrapper__complications__block__text'}>Инфаркт миокарда</p>
                            <p className={'section3__wrapper__complications__block__text'}>Инсульт</p>
                            <p className={'section3__wrapper__complications__block__text'}>Заболевания почек</p>
                            <p className={'section3__wrapper__complications__block__text'}>Инфекции кожи</p>
                    </div>
                    <div className={'section3__wrapper__complications__block'}>
                        <p className={'section3__wrapper__complications__block__text'}>Гангрены</p>
                        <p className={'section3__wrapper__complications__block__text'}>Хромота</p>
                        <p className={'section3__wrapper__complications__block__text'}>Закупорка артерий</p>
                        <p className={'section3__wrapper__complications__block__text'}>Импотенция</p>
                        <p className={'section3__wrapper__complications__block__text'}>Потеря зрения</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SectionTree;