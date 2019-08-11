import React from 'react';

const Button = ({ handleClickEvent }) => {
    return (
        <div className = "button">
            <button id = "nextList" onClick = { handleClickEvent }></button>
        </div>
    );
}


export default Button;