import React from 'react';
import './phone.scss'
const PhoneIcon = ({open}) => {
    return (
        <div className="phone-call cbh-phone cbh-green cbh-show  cbh-static" id="clbh_phone_div"
             style={{position: "fixed", bottom: "-30px", right: "-35px", zIndex: 80}}><button className={'btn-phone'} onClick={open}>
            <div className="cbh-ph-circle"></div>
            <div className="cbh-ph-circle-fill"></div>
            <div className="cbh-ph-img-circle1"></div>
        </button></div>
    );
};

export default PhoneIcon;