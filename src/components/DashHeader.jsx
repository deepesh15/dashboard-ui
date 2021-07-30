import  React from 'react';
import {ReactComponent as BellIcon} from '../svg/Bell.svg';
const DashHeader = ({pageTitle}) =>{
    return(
        <nav>
            <div className="page-title">
                <h1>{pageTitle}</h1>
            </div>
            <div className="header-options">
                <input type="text" placeholder="Search..." />
                <span><BellIcon/></span>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="user" />
            </div>
        </nav>
    );
}

export default DashHeader;