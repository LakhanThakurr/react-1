import React, { useState } from 'react';
import './Nav.css';



const BurgerIcon = ({ isOpen, handleToggle }) => {
    const handleClick = (event) => {
        event.stopPropagation(); // Prevent event propagation to the parent Navbar
        handleToggle();
    };

    return (
        <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={handleClick}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
        </div>
    );
};

export default BurgerIcon;