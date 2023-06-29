import React from 'react';
import './MobileMenu.scss';

function SubMenuItem({ title, description }) {
    return (
        <div className="menu__sub-menu-item">
            <h3 className="menu__sub-menu-item_title">{title}</h3>
            <p className="menu__sub-menu-item_description">{description}</p>
        </div>
    );
}

export default SubMenuItem;
