import React from "react";
import { Link } from "react-router-dom";
import Information from "../information/Information";
import User from "../user/User";
import headerLogo from './img/header-logo.png'
import style from './style.module.scss';

export default function Header() {
    const [authorized, setAuthorized] = React.useState(false);
    const flexPosition = authorized ? 'end' : 'center';

    return (
        <div className="container">
            <header className={style.header}>
                <div className={style.header_wrapper}>
                    <div className={style.header__logo}>
                        <Link to={"/scan"}>
                            <img src={headerLogo} alt="logo"></img>
                        </Link>
                    </div>
                    <nav className={style.header__menu}>
                        <ul style={{ justifyContent: flexPosition }}>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Тарифы</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </nav>
                    {authorized &&
                        <>
                            <Information />
                            <User />
                        </>
                    }
                    {!authorized &&
                        <div className={style.authorization}>
                            <button className={style.register_button}>
                                Зарегистрироваться
                            </button>
                            <button className={style.authorization_button}>
                                <Link to={'/authorization'}>
                                    Войти
                                </Link>
                            </button>
                        </div>
                    }
                </div>
            </header>
        </div>
    )
}