import React, {useEffect, useState} from 'react';
import './sectionOne.scss'
import product from '../../img/sprites/png/product.png'
import useWindowSize from "../../utils/myHooks/useWindowSize";
import moment from "moment";


const SectionOne = () => {
    const [width] =useWindowSize()
    const [city, setCity] = useState()



    function weatherGeolocation() {
        navigator.geolocation.getCurrentPosition(success, error);

        function success(position) {
            const KEY = "1ab169792d0060c67103adb8adfbfd98";
            const LAT = position.coords.latitude;
            const LNG = position.coords.longitude;
            let url = `http://api.positionstack.com/v1/reverse?access_key=${KEY}&query=${LAT},${LNG}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setCity(data.data[0]?.locality)

                })
                .catch((err) => console.warn(err.message));
        }


        function error() {
           console.log('error')
        }
    }
    useEffect(()=>{
        weatherGeolocation()

    },[])
    return (
        <div className={'section1'}>
            <div className={'wrapper'}>
                <p className={'section1__main-title'}>Диалайн – двойной удар по диабету</p>
                <p className={'section1__title-small'}>Средство №1 в {city?city?.toLowerCase()==='Россия'.toLowerCase()?city:"Страны СНГ":"Страны СНГ"} стабилизирующее выработку инсулина и уровень фосфора в организме</p>

            <div className={"section1__sec-wrap"}>
                <div className={"section1__sec-wrap__box-left"}>
                    <div className={"section1__sec-wrap__box-left__block"}>
                        Повышает выработку
                        <br />
                        инсулина
                    </div>
                    <div className={"section1__sec-wrap__box-left__block"}>
                        Защищает от высокого
                        <br />
                        содержания сахара
                    </div>
                    <div className={"section1__sec-wrap__box-left__block"}>
                        Предупреждает
                        <br />
                        гипогликемию
                    </div>
                    <div className={"section1__sec-wrap__box-left__block"}>
                        Восстанавливает функции
                        <br />
                        печени и поджелудочной
                        <br/>
                        железы
                    </div>
                    <div className={"section1__sec-wrap__box-left__block"}>
                        Нормализует углеводный
                        <br/>
                        обмен
                    </div>
                    <div className={"section1__sec-wrap__box-left__block"}>
                        Cтабилизирует уровень
                        <br />
                        сахара
                    </div>
                    <div className={"end section1__sec-wrap__box-left__block-end"}>
                        Hормализует все
                        <br/>
                        обменные процессы
                    </div>
                </div>
                {width>1000?<div className={"section1__sec-wrap__box-center"}>
                    <div className={"section1__sec-wrap__box-center__img"} />
                </div>:<></>}
                <div className={"section1__sec-wrap__box-right"}>
                            <div className={"section1__sec-wrap__box-right__form"}>
                                <div className={"section1__sec-wrap__box-right__form__price"}>
                                    <div className={"section1__sec-wrap__box-right__form__price__date"}>
                                        <p className={"section1__sec-wrap__box-right__form__price__date__info"}>Только до:</p>
                                        <p className={"section1__sec-wrap__box-right__form__price__date__date"}>{moment(new Date()).format('DD.MM.YYYY')}</p>
                                    </div>
                                    <div className={"section1__sec-wrap__box-right__form__price__info"}>
                                        <p className={"section1__sec-wrap__box-right__form__price__info__title"}>Цена:</p>
                                        <p className={"section1__sec-wrap__box-right__form__price__info__price"}>0 руб</p>
                                    </div>

                                </div>

                                <div className={"section1__sec-wrap__box-right__form-input"}>
                                    <p className={"section1__sec-wrap__box-right__form-input__title"}>Введите ваши данные в форму ниже</p>
                                     <form>
                                         <input placeholder={'Ваше имя'} className={"section1__sec-wrap__box-right__form-input__input"}/>
                                         <input placeholder={'Ваш номер телефона'}  className={"section1__sec-wrap__box-right__form-input__input"}/>
                                         <button  className={"section1__sec-wrap__box-right__form-input__btn"}>Получить<br/>Диалайн</button>
                                     </form>
                                </div>
                            </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default SectionOne;