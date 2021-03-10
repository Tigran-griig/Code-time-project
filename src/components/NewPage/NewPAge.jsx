import React from 'react';

import './NewPage.scss'
import {Route} from "react-router-dom";
const NewPAge = () => {
    return (
        <div className={'newPage'}>
            <div className={'newPage__cont'}>
                <p className={'newPage__cont__title'}>Thank you!</p>
                <p className={'newPage__cont__text'}>
                    Your order was accepted!<br/>
                    Our operator will contact you to confirm the order.<br/>
                    Delivery provided by a courier service. Payment - upon delivery!
                </p>

            </div>
        </div>
    );
};

export default NewPAge;