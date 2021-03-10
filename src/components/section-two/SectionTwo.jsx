import React from 'react';
import './sectionTwo.scss'
const SectionTwo = () => {
    return (
        <div className={'section2'}>
            <div className={'section2__wrapper'}>
                  <p className={'section2__wrapper__title'}>Кто может заболеть диабетом? </p>
                <div className={'section2__wrapper__reasons-wrap'}>
                    <div className={'section2__wrapper__reasons-wrap__block block--1'}>
                        <p className={'section2__wrapper__reasons-wrap__block__title'}>Имеющие плохую<br/> наследственность</p>
                        <p className={'section2__wrapper__reasons-wrap__block__text'}>Если один родитель болеет<br/>
                            диабетом, вероятность<br/>
                            заболевания — 30%, если<br/>
                            оба — 60%.</p>

                    </div>
                    <div className={'section2__wrapper__reasons-wrap__block block--2'}>
                        <p className={'section2__wrapper__reasons-wrap__block__title'}>Страдающие от заболеваний<br/> поджелудочной железы</p>
                        <p className={'section2__wrapper__reasons-wrap__block__text'}>Панкреатит, рак поджелудочной и другие заболевания желез<br/>
                            провоцируют развитие<br/>
                            диабета</p>

                    </div>
                    <div className={'section2__wrapper__reasons-wrap__block block--3'}>
                        <p className={'section2__wrapper__reasons-wrap__block__title'}>Имеющие вирусные<br/>
                            инфекции</p>
                        <p className={'section2__wrapper__reasons-wrap__block__text'}>Эпидемический гепатит,<br/>
                            краснуху, ветряную оспу<br/>
                            и другие, в том числе ОРЗ<br/>
                            и грипп</p>

                    </div>
                    <div className={'section2__wrapper__reasons-wrap__block block--4'}>
                        <p className={'section2__wrapper__reasons-wrap__block__title'}>Люди старше<br/>
                            30 лет</p>
                        <p className={'section2__wrapper__reasons-wrap__block__text'}>С возрастом повышается<br/>
                            риск возникновения<br/>
                            диабета</p>

                    </div>
                    <div className={'section2__wrapper__reasons-wrap__block block--5'}>
                        <p className={'section2__wrapper__reasons-wrap__block__title'}>Страдающие от<br/>
                            лишнего веса</p>
                        <p className={'section2__wrapper__reasons-wrap__block__text'}>Вероятность появления<br/>
                            диабета при лишнем весе<br/>
                            более 40%</p>

                    </div>
                    <div className={'section2__wrapper__reasons-wrap__block block--6'}>
                        <p className={'section2__wrapper__reasons-wrap__block__title'}>Испытывающие<br/>
                            стресс</p>
                        <p className={'section2__wrapper__reasons-wrap__block__text'}>Если вы много работаете<br/>
                            и часто нервничаете,<br/>
                            повышается вероятность<br/>
                            возникновения диабета</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SectionTwo;