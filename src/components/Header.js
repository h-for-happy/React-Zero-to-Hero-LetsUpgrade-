import React from 'react';
import './Styles/Header.css';
function Header() {
    return (
        <div>
            <div className="navBar">
                <div className="navItems">
                    <div className="navBrand"><h3>LOGO</h3></div>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Header
