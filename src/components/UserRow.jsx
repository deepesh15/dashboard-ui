import React from 'react';

const UserRow = ({UserImg,UserName,UserEmail,UserGender,UserRole}) =>{
    return (
        <div className="user-row">
            <img src={UserImg} alt={UserName} />
            <p>{UserName}</p>
            <p>{UserEmail}</p>
            <p>{UserGender}</p>
            <p>{UserRole}</p>
        </div>  
    );
}

export default  UserRow;