import React from "react";
import footerLogo from './img/footer-logo.png';
import style from './style.module.scss';
export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.footer_wrapper}>
                    <img src={footerLogo}></img>
                    <div className={style.footer_text}>
                        <p className={style.address}>
                            г. Москва, Цветной б-р, 40
                        </p>
                        <p className={style.tel}>
                            +7 495 771 21 11
                        </p>
                        <p className={style.email}>
                            info@skan.ru
                        </p>
                        <p className={style.copyright}>
                            Copyright. 2022
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    )
}