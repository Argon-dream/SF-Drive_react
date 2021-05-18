import React from "react";
import { NavLink } from "react-router-dom";
import header from "./../../styles/CommonParts/header.scss";

function Header() {

    return (
            <header>
                <div className="menu__frame">
                    <img src="./../../assets/icon/logo.svg" alt="Logo picture" className="menu__frame-logo" />
                        <div className="menu__frame-wrapper">
                            <nav>
                                <ul>
                                    <li className="menu__frame-wrapper-link is-animated is-active is-desktop">
                                        <NavLink to={'/AboutUs'}>О нас</NavLink>
                                    </li>
                                    <li className="menu__frame-wrapper-link is-animated is-desktop">
                                        <NavLink to={''}>Условия</NavLink>
                                    </li>
                                    <li className="menu__frame-wrapper-link is-animated is-desktop">
                                        <NavLink to={'/FAQ'}>Частые вопросы</NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <button className="menu__frame-wrapper-button is-desktop">
                                <span>Войти</span>
                            </button>
                            <div className="menu__frame-wrapper mobile__burger icon-iconBurger is-mobile" />
                        </div>
                </div>
                <div className="menu__mobile is-mobile is-animated">
                    <div>
                        <img src="./../../assets/icon/logo.svg" alt="Logo picture" className="menu__mobile-logo" />
                            <div className="menu__mobile-close icon-iconClose" />
                    </div>
                    <div className="content__container is-align-center">
                        <nav className="menu__mobile-wrapper">
                             <ul>
                                <li className="menu__mobile-wrapper-link is-active">
                                    <NavLink to={'/AboutUs'}>О нас</NavLink>
                                </li>
                                <li className="menu__mobile-wrapper-link">
                                    <NavLink to={''}>Условия</NavLink>
                                </li>
                                <li className="menu__mobile-wrapper-link">
                                    <NavLink to={'/FAQ'}>Частые вопросы</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <button className="menu__mobile-button content__container is-align-center">
                            <span>Войти</span>
                        </button>
                    </div>
                </div>
            </header>
    );
}

export default Header;