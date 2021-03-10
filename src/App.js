import './App.scss';
import useWindowSize from "./utils/myHooks/useWindowSize";
import logo from './img/sprites/png/logo.png'
import SectionOne from "./components/section-one/sectionOne";
import SectionTwo from "./components/section-two/SectionTwo";
import SectionTree from "./components/section-tree/SectionTree";
import SectionFour from "./components/section-four/SectionFour";
import SectionFive from "./components/section-five/sectionFive";
import Additional from "./components/additional/Additional";
import SectionSix from "./components/section-six/SectionSix";
import SectionSeven from "./components/section-seven/sectionSeven";
import SectionEgt from "./components/section-eght/sectionEght";
import SectionNine from "./components/section-nine/SectionNine";
import SectionTen from "./components/section-ten/sctionTen";
import PhoneIcon from "./components/phoneIcon/phoneIcon";
import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormSectionSub from "./components/FormSectionSub/FormSectionSub";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {

    },
}));


function App() {
    const [width] = useWindowSize()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [mouseCoords,setMouseCoords] = useState({
        x:0,
        y:0
    })
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const mouseMoveHandler = event => {
        setMouseCoords({
            x: event.clientX,
            y: event.clientY
        });
        if(event.clientY>=0&&event.clientY<=3){
            setOpen(true)
        }
    };
    useEffect(() => {

        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])


  return (
    <div className="App">
   <header className={'header'}>
<div className={'header__container'}>
<div className={'header__container__box'}>
    <img src={logo}/>
</div>
    {width>1000?<div className={'header__container__box'}>
        <div className={'header__container__box__title'}>
            100 % натуральное
                <br/>
            средство
        </div>
    </div>:<></>}
    {width>750?<div className={'header__container__box'}>
        <button className={'header__container__box__btn'} onClick={handleOpen}>Заказать звонок</button>
    </div>:<></>}
</div>
   </header>
        <SectionOne />
        <SectionTwo />
        <SectionTree />
        <div className={'text-top-section'}>
            <div className={'text-top-section__wrapper'}>
                <p className={'text-top-section__wrapper__text'}>Вы не можете повлиять на свой возраст или наследственность,<br/> но вы можете снизить риск развития этих заболеваний</p>
            </div>
        </div>
        <SectionFour />
        <div className={'text-bottom-section'}>
            <div className={'text-bottom-section__wrapper'}>
                    <p className={'text-bottom-section__wrapper__text'}>
                        За счет специального состава Диалайн снижает инсулинорезистентность<br/>
                        клеток, что позволяет даже при небольшом количестве инсулина <br/>
                        поддерживать стабильный уровень сахара в крови. Все больше людей,<br/>
                        отдавших предпочтение Дифорт, живут нормальной, здоровой жизнью!
                    </p>
            </div>
        </div>
        <SectionFive />
        <Additional />
        <SectionSix />
        <SectionSeven />
        <SectionEgt />
        <SectionNine />
        <SectionTen/>
        <PhoneIcon open={handleOpen} />
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <div className={'modal-form'}>
                        <button className={'modal-form__btn'} onClick={handleClose}>
                            <div  className={'modal-form__btn__icon'}></div>
                        </button>
                        <FormSectionSub open={open}/>
                    </div>
                </div>
            </Fade>
        </Modal>
    </div>
  );
}

export default App;
