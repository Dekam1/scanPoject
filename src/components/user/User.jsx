import React from "react";
import userAvatar from "./img/user-avatar.png"
import style from "./style.module.scss";

export default function User() {
    return (
        <div className={style.user}>
            <div className={style.user_left}>
                <span className={style.user_name}>Алексей А. </span>
                <button className={style.log_out}>Выйти</button>
            </div>
            <div className={style.user_right}>
                <img src={userAvatar} alt="user avatar"></img>
            </div>
        </div>
    )
}