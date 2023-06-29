import React, { useEffect, useState } from 'react';
import './MobileMenu.scss';
import SubMenuItem from './SubMenuItem';
import ArrowRight from '../../assets/arrow-right.svg'
import ArrowLeft from '../../assets/arrow-left.svg'

const MenuItem = ({ label, subMenu, handleItemClick, isSubMenuOpen, subSubMenu }) => {
    const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState(null);
    const [currentSubMenuItem, setCurrentSubMenuItem] = useState(null);
    const [isFirstLevelOpen, setIsFirstLevelOpen] = useState(false);

    useEffect(() => {
        if (isSubMenuOpen) {
            setIsFirstLevelOpen(true);
        }
    }, [isSubMenuOpen]);

    const toggleSubSubMenu = (index) => {
        document.querySelector('.menu__sub-menu').classList.remove('show');
        document.querySelector('.menu__item-label').classList.add('hide')
        document.querySelector('.menu__item-header').classList.add('hide')
        setCurrentSubMenuItem(index);
        setIsSubSubMenuOpen(!isSubSubMenuOpen);
    };

    const handleBackClick = (e) => {
        e.stopPropagation();
        document.querySelector('.menu__sub-menu').classList.add('show');
        document.querySelector('.menu__item-label').classList.remove('hide')
        document.querySelector('.menu__item-header').classList.remove('hide')
        setIsSubSubMenuOpen(false);
    };

    return (
        <div className="menu__item">
            <div className="menu__item-header" onClick={() => handleItemClick(label)}>
                <div className="menu__item-label">
                    {isSubMenuOpen && isFirstLevelOpen && (
                        <div className="menu__back-button" onClick={handleBackClick}>
                            <img src={ArrowLeft} alt="Arrow Left" onClick={handleBackClick}/>
                        </div>
                    )}
                    {label}
                    {!isSubMenuOpen && <img src={ArrowRight} alt="Arrow Right" className='menu__item-label-arrow'/>}

                </div>
            </div>
            <div className={`menu__sub-menu ${isSubMenuOpen ? 'show animate__animated animate__fadeIn' : ''}`}>
                {subMenu.map((item, index) => (
                    <a href="#" key={index} onClick={(e) => {
                        e.preventDefault();
                        toggleSubSubMenu(index);
                    }}>{item} <img src={ArrowRight} className='menu__sub-menu-arrow' alt='Arrow Right'/></a>
                ))}

            </div>
            {isSubSubMenuOpen && (
                <div className="menu__sub-sub-menu animate__animated animate__fadeIn">
                    <div className="menu__item-header" onClick={() => setIsSubSubMenuOpen(false)}>
                        <div className="menu__item-label" onClick={handleBackClick}>
                            <div className="menu__back-button" onClick={handleBackClick}>
                                <img src={ArrowLeft} alt="Arrow Left" onClick={handleBackClick}/>
                            </div>
                            {subMenu[currentSubMenuItem]}
                        </div>
                    </div>
                    <div className="menu__sub-menu-items">
                        {isSubMenuOpen &&
                        subSubMenu &&
                        subSubMenu.map((item, index) => (
                            <SubMenuItem title={item.title} description={item.description} key={index} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuItem;
