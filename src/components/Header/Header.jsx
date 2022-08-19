import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container headerContent">
                <div className="headerLogo">
                    <img src="../img/logo.svg" alt="Logotype" />
                </div>
                <div className="headerNav">
                    <ul>
                        <li>Вопросы и ответы</li>
                        <li>Правила</li>
                        <li>Контакты</li>
                    </ul>
                    <div className="headerContact">
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                            <img src="../img/telegram.png" alt="Telegram" />
                            Telegram
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
