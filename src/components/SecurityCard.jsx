import React from 'react';
import SwitchButton from './SwitchButton';

const SecurityCard = () =>{
    return(
        <div className="security-card Card">
            <h3>Security</h3>
            <div className="security-content">
                <p>2-Step Verification</p>
                <SwitchButton isChecked={true}/>
            </div>
        </div>
    );
}

export default SecurityCard;