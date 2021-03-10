import React, {useEffect, useState} from 'react';

import './FormSectionSub.scss'
import moment from "moment";
import useWindowSize from "../../utils/myHooks/useWindowSize";
import { Redirect} from "react-router-dom";
const FormSectionSub = ({open}) => {
    const [redirect, setRedirect] = useState(false);
    const [width] =useWindowSize()
    const [productCount,setProductCount] = useState()
const [name,setName]=useState('')
    const [phone,setPhone]=useState('')

    useEffect(()=>{
        if(!localStorage.getItem('productCount')){
            localStorage.setItem('productCount', 60);
        }
        setProductCount(localStorage.getItem('productCount'))


    },[])

        const handleChangeName =(event)=>{
            setName(event.target.value)
        }
    const handleChangePhone =(event)=>{
        setPhone(event.target.value)
    }


    useEffect(()=>{
        if(productCount>7){
        setTimeout(()=>{
              setProductCount(val=>val-1)
            localStorage.setItem('productCount', productCount);

        },10000)
        }


    },[productCount])
    const redirectNewPage =() => {
if(open&&name.length&&phone.length){
    setRedirect(true)
}
    }
    const renderRedirect =  () => {
        if (redirect) {
            return <Redirect to='/newPage' />
        }
    }
    return (
        <div className={'form-section-sub'}>
                    <div className={'form-section-sub__cont-right'}>
                        {width>1000?<p className={'form-section-sub__cont-right__title'}>
                            Диалайн – средство для<br/>
                            борьбы с диабетом
                        </p>:<></>}
                        <div className={'form-section-sub__cont-right__price'}>
                            <div className={'form-section-sub__cont-right__price__title'}>
                                <p className={'form-section-sub__cont-right__price__title__text'}>Только до:</p>
                                <p className={'form-section-sub__cont-right__price__title__date'}>{moment(new Date()).format('DD.MM.YYYY')}</p>

                            </div>
                            <div className={'form-section-sub__cont-right__price__price'}>
                                <p className={'form-section-sub__cont-right__price__price__info'}>Цена:</p>
                                <p className={'form-section-sub__cont-right__price__price__text'}>0 руб</p>

                            </div>
                            </div>
                        {width>1000?<div className={'form-section-sub__cont-right__count'}>
                            <p className={'form-section-sub__cont-right__count__length'}>{productCount}</p>
                            <p className={'form-section-sub__cont-right__count__info'}>Количество товаров на<br/>
                                ближайшем к Вам складе<br/>
                                ограничено!</p>

                        </div>:<></>}
                    </div>
                    <div className={'form-section-sub__cont-center'}/>
                    <div className={'form-section-sub__cont-left'}>
                        <div className={'form-section-sub__cont-left__form'}>
                            <p className={'form-section-sub__cont-left__form__title'}>Введите ваши данные в форму ниже</p>
                            <form>
                                <input placeholder={'Ваше имя'}  className={'form-section-sub__cont-left__form__input'} value={name} onChange={handleChangeName} />
                                <input placeholder={'Ваш номер телефона'}  className={'form-section-sub__cont-left__form__input'} value={phone} onChange={handleChangePhone} />
                                <button  className={'form-section-sub__cont-left__form__btn'} onClick={redirectNewPage} >Получить<br/>Диалайн</button>
                            </form>
                        </div>
                    </div>
            {renderRedirect()}
        </div>
    );
};

export default FormSectionSub;