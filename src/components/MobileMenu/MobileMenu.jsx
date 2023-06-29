import React, {useEffect, useState} from 'react';
import './MobileMenu.scss';
import CloseBtnSvg from '../../assets/close_icon.svg'
import ArrowBtn from '../../assets/arrow-bottom.svg'
import ArrowBtnActive from '../../assets/arrow-button-active.svg'
import Check from '../../assets/check.svg'
import Usa from '../../assets/Icon_US.svg'
import Nl from '../../assets/Icon_NL.svg'
import By from '../../assets/Icon_BY.svg'
import Ru from '../../assets/Icon_RU.svg'
import Kz from '../../assets/Icon_KZ.svg'
import Tr from '../../assets/Icon_TR.svg'


function MobileMenu({isMenuOpen, setIsMenuOpen, MenuItem}) {
    const menuItems = [
        {
            label: 'Services',
            subMenu: ['Облачные вычисления', 'Выделенные серверы', 'Платформенные сервисы', 'Информационная безопасность'],
            subSubMenu: [
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud infrastructure analytics',
                    description: 'Health-specific solutions to enhance the patient experience.'
                },
                {
                    title: 'Hybrid Cloud',
                    description: 'Data storage, AI, and analytics solutions for government agencies.'
                },
                {
                    title: 'Hybrid Cloud',
                    description: 'Data storage, AI, and analytics solutions for government agencies.'
                },
                {
                    title: 'Multicloud',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                }
            ]
        },
        {
            label: 'Managed IT',
            subMenu: ['Submenu Item 1', 'Submenu Item 2'],
            subSubMenu: [
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud infrastructure analytics',
                    description: 'Health-specific solutions to enhance the patient experience.'
                },
                {
                    title: 'Hybrid Cloud',
                    description: 'Data storage, AI, and analytics solutions for government agencies.'
                },
                {
                    title: 'Hybrid Cloud',
                    description: 'Data storage, AI, and analytics solutions for government agencies.'
                },
                {
                    title: 'Multicloud',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
                {
                    title: 'Cloud consulting',
                    description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
                },
            ]
        },
        {label: 'Telecom Solutions', subMenu: ['Submenu Item 1', 'Submenu Item 2', 'Submenu Item 3']},
        {label: 'About Us', subMenu: ['Submenu Item 1', 'Submenu Item 2', 'Submenu Item 3', 'Submenu Item 4']}
    ];

    const [menuItemStates, setMenuItemStates] = useState(menuItems.reduce((prev, curr) => {
        prev[curr.label] = false;
        return prev;
    }, {}));
    const [isAnyItemOpen, setIsAnyItemOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('Ru');
    const [currentMenu, setCurrentMenu] = useState(null);

    useEffect(() => {
        if (!isMenuOpen) {
            handleCloseClick();
        }
    }, [isMenuOpen]);

    const handleCloseClick = () => {
        setIsMenuOpen(false);
        setCurrentMenu(null);
        setIsAnyItemOpen(false);
        setMenuItemStates(
            menuItems.reduce((prev, curr) => {
                prev[curr.label] = false;
                return prev;
            }, {})
        );
    };

    const handleItemClick = (clickedLabel) => {
        const newState = {};

        // Закрыть текущее меню и обнулить его
        if (currentMenu === clickedLabel) {
            setCurrentMenu(null);
            setIsAnyItemOpen(false);
            for (let item in menuItemStates) {
                newState[item] = false;
            }
        } else {
            // Открыть новое меню и закрыть остальные
            for (let item in menuItemStates) {
                newState[item] = item === clickedLabel ? !menuItemStates[clickedLabel] : false;
            }
            setCurrentMenu(clickedLabel);
            setIsAnyItemOpen(true);
        }

        setMenuItemStates(newState);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectCountry = (value) => {
        setSelectedCountry(value);
        setIsOpen(false);
    };

    const getFlag = (country) => {
        switch (country) {
            case 'Us':
                return Usa;
            case 'Nl':
                return Nl;
            case 'By':
                return By;
            case 'Ru':
                return Ru;
            case 'Kz':
                return Kz;
            case 'Tr':
                return Tr;
            default:
                return '';
        }
    };

    return (
        <div className={`menu ${isMenuOpen ? 'open animate__animated animate__fadeIn' : ''}`}>
            <div className={`menu__language-switcher ${isOpen ? 'open animate__animated animate__bounceIn' : ''}`}>
                <div className={isOpen ? 'menu__language-dropdown-active animate__animated animate__zoomIn' : 'menu__language-dropdown'} onClick={toggleDropdown}>
                    <img src={getFlag(selectedCountry)} alt='Flag'/> {selectedCountry}
                    <img src={isOpen ? ArrowBtnActive : ArrowBtn} alt='Arrow Button'/>
                </div>

                {isOpen && (
                    <div className="menu__language-dropdown-options">
                        <p className="menu__language-dropdown-options-title">Страна</p>
                        <div
                            className={selectedCountry === 'Us' ? 'menu__language-dropdown-option-active' : 'menu__language-dropdown-option'}
                            onClick={() => selectCountry('Us')}
                        >
                            <img className='menu__language-dropdown-option-img' src={Usa} alt="USA"/>
                            United States
                            {selectedCountry === 'Us' ? <img src={Check} alt="Check" className='menu__language-dropdown-option-check'/> : null}
                        </div>
                        <div
                            className={selectedCountry === 'Nl' ? 'menu__language-dropdown-option-active' : 'menu__language-dropdown-option'}
                            onClick={() => selectCountry('Nl')}
                        >
                            <img className='menu__language-dropdown-option-img' src={Nl} alt="Nl"/>
                            Netherlands
                            {selectedCountry === 'Nl' ? <img src={Check} alt="Check" className='menu__language-dropdown-option-check'/> : null}
                        </div>
                        <div
                            className={selectedCountry === 'By' ? 'menu__language-dropdown-option-active' : 'menu__language-dropdown-option'}
                            onClick={() => selectCountry('By')}
                        >
                            <img className='menu__language-dropdown-option-img' src={By} alt="By"/>
                            Беларусь
                            {selectedCountry === 'By' ? <img src={Check} alt="Check" className='menu__language-dropdown-option-check'/> : null}
                        </div>
                        <div
                            className={selectedCountry === 'Ru' ? 'menu__language-dropdown-option-active' : 'menu__language-dropdown-option'}
                            onClick={() => selectCountry('Ru')}
                        >
                            <img className='menu__language-dropdown-option-img' src={Ru} alt="Ru"/>
                            Россия
                            {selectedCountry === 'Ru' ? <img src={Check} alt="Check" className='menu__language-dropdown-option-check'/> : null}
                        </div>
                        <div
                            className={selectedCountry === 'Kz' ? 'menu__language-dropdown-option-active' : 'menu__language-dropdown-option'}
                            onClick={() => selectCountry('Kz')}
                        >
                            <img className='menu__language-dropdown-option-img' src={Kz} alt="Kz"/>
                            Казахстан
                            {selectedCountry === 'Kz' ? <img src={Check} alt="Check" className='menu__language-dropdown-option-check'/> : null}
                        </div>
                        <div
                            className={selectedCountry === 'Tr' ? 'menu__language-dropdown-option-active' : 'menu__language-dropdown-option'}
                            onClick={() => selectCountry('Tr')}
                        >
                            <img className='menu__language-dropdown-option-img' src={Tr} alt="Tr"/>
                            Türkiye
                            {selectedCountry === 'Tr' ? <img src={Check} alt="Check" className='menu__language-dropdown-option-check'/> : null}
                        </div>
                    </div>
                )}
            </div>
            <img src={CloseBtnSvg} className='menu__close-btn' alt="Close Menu Button" onClick={handleCloseClick}/>
            <div className="menu__items">
                {menuItems.map((item, index) => {
                    const isSubMenuOpen = currentMenu === item.label && menuItemStates[item.label];
                    if (isAnyItemOpen && !isSubMenuOpen) {
                        return null;
                    }
                    return (
                        <MenuItem
                            label={item.label}
                            subMenu={item.subMenu}
                            key={index}
                            handleItemClick={handleItemClick}
                            isSubMenuOpen={isSubMenuOpen}
                            MenuItem={MenuItem}
                            subSubMenu={item.subSubMenu}
                        />
                    );
                })}
            </div>

            {currentMenu !== null ? null :
                <div className="menu__footer-items">
                    <a href="#">Contacts</a>
                    <a href="#">Search</a>
                </div>
            }
        </div>
    );
}

export default MobileMenu;
