import React, { useState } from 'react';
import './Nav.css';

const BurgerIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
        </div>
    );
};

export default BurgerIcon;
