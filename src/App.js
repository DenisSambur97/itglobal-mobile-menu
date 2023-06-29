import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import MobileMenu from "./components/MobileMenu/MobileMenu";
import MenuItem from "./components/MobileMenu/MenuItem";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setTimeout(() => {
            setIsMenuOpen(!isMenuOpen);
        }, 100);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button className="burger" onClick={handleToggleMenu}>
                    <span/>
                    <span/>
                    <span/>
                </button>
            </header>
            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} MenuItem={MenuItem}/>
        </div>
    );
}

export default App;