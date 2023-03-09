import React from "react";
import style from "./style.module.scss"

export default function Information() {
    return (
        <div className={style.information}>
            <p>Использовано компаний <span>34</span></p>
            <p>Лимит по компаниям <span>100</span></p>
        </div>
    )
}