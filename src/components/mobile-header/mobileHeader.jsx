import React from "react"
import { Link } from "react-router-dom";
import Information from "../information/Information"
import headerLogo from "./img/header-log.png"
import headerLogoActive from "./img/header-logo-active.png"
import style from "./style.module.scss"

export default function MobileHeader() {

    const [openMenu, setOpenMenu] = React.useState(false);
    const btnClassName = [style.header_button, style.active];

    const handleClick = () => {
        let parent = document.querySelector('body');
        setOpenMenu(prev => !prev);
        parent.classList.toggle("scroll-hidden");
    }

    return (
        <header className={style.mobile_header}>
            <div className="container">
                <div className={style.mobile_header_wrapper}>
                    <img width={111} height="auto" src={openMenu ? headerLogoActive : headerLogo} alt="logo"></img>
                    {!openMenu && <Information />}
                    <button
                        onClick={handleClick}
                        className={openMenu ? btnClassName.join(" ") : style.header_button}>
                        <span></span>
                    </button>
                </div>
            </div>
            {openMenu && <div className={style.header_menu}>
                <ul className={style.menu_ul}>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Тарифы</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                <button className={style.button_authorization}>Зарегистрироваться</button>
                <Link to={'/authorization'}>
                    <button className={style.button_registration}>
                        Войти
                    </button>
                </Link>
            </div>}
        </header>
    )
}