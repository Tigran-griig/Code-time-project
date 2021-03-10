import React, {useState} from 'react';

import mapImg from '../../img/sprites/png/map-img.png'
import './sectionTen.scss'
import useWindowSize from "../../utils/myHooks/useWindowSize";
import FormSectionSub from "../FormSectionSub/FormSectionSub";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
const SectionTen = () => {

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            boxShadow: theme.shadows[5],
        },
    }));
const [width] = useWindowSize()
    const classes = useStyles();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className={'section10'}>
            <div className={'section10__wrapper'}>
                {width>1200?
                <p className={'section10__wrapper__title'}>
                    Доставка осуществляется<br/>
                    по всей России и странам СНГ
                </p>:<></>}
                {width>1200?<div className={'section10__wrapper__map'}>
                    <img src={mapImg}/>
                </div>:<></>}
                <div className={'section10__wrapper__form'}>
                <FormSectionSub />
                </div>
                <div className={'section10__wrapper__footer'}>
                   <p className={'section10__wrapper__footer__text'}>ООО "ТОРГЛАЙН" ИНН 9705098802, ОГРН 1177746541730</p>
                   <button className={'section10__wrapper__footer__btn'} onClick={showModal}>Политика конфиденциальности</button>

                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isModalVisible}
                onClose={handleCancel}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalVisible}>
                    <div className={classes.paper}>
                        <div className={'conf-modal'}>
                            <div className={'conf-modal__title'}>Политика конфиденциальности</div>
                            <h5>Защита личных данных</h5>
                            <p>Для защиты ваших личных данных у нас внедрен ряд средств защиты, которые действуют при введении, передаче или работе с вашими личными данными.</p>
                        <h5>Разглашение личных сведений и передача этих сведений третьим лицам</h5>
                            <p>Ваши личные сведения могут быть разглашены нами только в том случае это необходимо для: (а) обеспечения соответствия предписаниям закона или требованиям судебного процесса в нашем отношении ; (б) защиты наших прав или собственности (в) принятия срочных мер по обеспечению личной безопасности наших сотрудников или потребителей предоставляемых им услуг, а также обеспечению общественной безопасности. Личные сведения, полученные в наше распоряжение при регистрации, могут передаваться третьим организациям и лицам, состоящим с нами в партнерских отношениях для улучшения качества оказываемых услуг. Эти сведения не будут использоваться в каких-либо иных целях, кроме перечисленных выше. Адрес электронной почты, предоставленный вами при регистрации может использоваться для отправки вам сообщений или уведомлений об изменениях, связанных с вашей заявкой, а также рассылки сообщений о происходящих в компании событиях и изменениях, важной информации о новых товарах и услугах и т.д. Предусмотрена возможность отказа от подписки на эти почтовые сообщения.</p>

                        <h5>Использование файлов «cookie»</h5>
                        <p>Когда пользователь посещает веб-узел, на его компьютер записывается файл «cookie» (если пользователь разрешает прием таких файлов). Если же пользователь уже посещал данный веб-узел, файл «cookie» считывается с компьютера. Одно из направлений использования файлов «cookie» связано с тем, что с их помощью облегчается сбор статистики посещения. Эти сведения помогают определять, какая информация, отправляемая заказчикам, может представлять для них наибольший интерес. Сбор этих данных осуществляется в обобщенном виде и никогда не соотносится с личными сведениями пользователей.

                            Третьи стороны, включая компании Google, показывают объявления нашей компании на страницах сайтов в Интернете. Третьи стороны, включая компанию Google, используют cookie, чтобы показывать объявления, основанные на предыдущих посещениях пользователем наших вебсайтов и интересах в веб-браузерах. Пользователи могут запретить компаниям Google использовать cookie. Для этого необходимо посетить специальную страницу компании Google по этому адресу: http://www.google.com/privacy/ads/</p>

                            <h5>Изменения в заявлении о соблюдении конфиденциальности</h5>
                            <p>Заявление о соблюдении конфиденциальности предполагается периодически обновлять. При этом будет изменяться дата предыдущего обновления, указанная в начале документа. Сообщения об изменениях в данном заявлении будут размещаться на видном месте наших веб-узлов

                                Благодарим Вас за проявленный интерес к нашей системе!</p>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default SectionTen;