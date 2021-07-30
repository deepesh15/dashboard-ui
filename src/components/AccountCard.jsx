import React from  'react';
import ShowPassword from './ShowPassword';

const AccountCard = ({UserMail,UserPassword}) =>{
    return (
        <div className="account-card Card">
            <h3>Account</h3>
            <div className="account-content">
                <label htmlFor="email">Email address</label>
                <input type="text"  value={UserMail}/>
                <label htmlFor="password">Current Password</label>
                <ShowPassword />
                <label htmlFor="password">New Password</label>
                <ShowPassword/>
            </div>
            <div className="account-save"><button>Save</button></div>
        </div>
    );
}
export default AccountCard;