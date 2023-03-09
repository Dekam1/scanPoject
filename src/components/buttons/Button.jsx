import React from "react";
import style from "./style.module.scss"

export default function Button({
    modifedStyleButton = null,
    text = "Подробнее",
    bg = "#5970FF",
    color = "#FFFFFF",
    weight = 400 }) {

    const classNames = [style.button, style.modifedStyleButton];

    const addedClassName = modifedStyleButton ? classNames.join(' ') : style.button

    return (
        <button
            className={addedClassName}
            style={{
                background: bg,
                color: color,
                fontWeight: weight
            }}>
            {text}
        </button>
    )
} 