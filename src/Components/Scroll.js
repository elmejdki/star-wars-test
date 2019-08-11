import React from 'react';
import Button from './Button';

const Scroll = ({ handleClickEvent, children }) => {
    return (
        <div className="scroll">
            {children}
            <Button handleClickEvent = { handleClickEvent } />
        </div>
    );
}

export default Scroll;