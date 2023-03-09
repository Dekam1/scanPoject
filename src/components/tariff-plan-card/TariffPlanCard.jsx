import React from "react";
import style from "./style.module.scss";
import Button from "../buttons/Button";

export default function TariffPlanCard({ item }) {

    const {
        active,
        name,
        headerDescription,
        price,
        description,
        styles,
        img
    } = item;

    const planVisable = price.installmentPlan ? 'visible' : 'hidden';

    return (
        <div className={style.card} style={active ? { border: `2px solid ${styles.background}` } : null}>
            <div className={style.card_top} style={styles}>
                <p className={style.card_name}>{name}</p>
                <span className={style.card_description}>{headerDescription}</span>
                <img src={img} alt={name}></img>
            </div>
            <div className={style.card_bottom}>
                <div className={style.bottom_top}>
                    <div className={style.top_text}>
                        <p className={style.discount_price}>
                            {price.discountPrice}
                            <span>₽</span>
                        </p>
                        <p className={style.without_discount}>
                            <strike>
                                {price.priceWithoutDiscount}
                                <span>₽</span>
                            </strike>
                        </p>
                    </div>
                    <p style={{visibility: planVisable}} className={style.plan}>
                        {`Или ${price.installmentPlan} Р/мес. при рассрочке на 24 мес.`}
                    </p>
                </div>
                <div className={style.bottom_middle}>
                    <p className={style.midlle_text}>В тариф входит:</p>
                    <ul className={style.list}>
                        {description.map(item => (
                            <li key={item} className={style.list_item}>{item}</li>
                        ))}
                    </ul>
                </div>
                {active
                    ? <Button
                        modifedStyleButton="modifedStyleButton"
                        weight={400}
                        bg="#D2D2D2"
                        color="#000000"
                        text="Перейти в личный кабинет"
                    />
                    : <Button
                        modifedStyleButton="modifedStyleButton"
                        weight={400}
                        text="Подробнее"
                    />
                }
            </div>
        </div>
    )
}