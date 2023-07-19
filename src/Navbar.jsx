import './Nav.css'
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Navbar() {

    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 70) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <navbar >

            <div className={`navbar ${scrolling ? 'scrolling' : ''}`}>

                <NavLink to={"/"} className='l1'>Work</NavLink>
                <NavLink to={"/About"} className='l1'>About</NavLink>
                <NavLink to={"/"} className='l1'>Play</NavLink>
                <NavLink to={"/"} className='l1'>Note</NavLink>
                <NavLink to={"/"} className='l1'>Contact</NavLink>

            </div>

        </navbar>
    );

};
export default Navbar;