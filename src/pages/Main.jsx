import React from "react";
import Button from "../components/buttons/Button";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Fotter";
import Header from "../components/header/Header";
import MobileHeader from "../components/mobile-header/mobileHeader";
import TariffPlanCard from "../components/tariff-plan-card/TariffPlanCard";
import { useResize } from "../hooks/useResize";
import rates from "../rates/rates";

export default function Main() {
    const width = useResize();
    return (
        <>
            {width < 870 ? <MobileHeader /> : <Header />}
            <div className="container">
                <main className="main">
                    <section className="top">
                        <div className="top_wrapper">
                            <div className="top_left">
                                <h1 className="top_title">
                                    Сервис по поиску публикаций <br /> о компании <br /> по его инн
                                </h1>
                                <p className="top_text">
                                    Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                                </p>
                                <Button
                                    func={() => console.log("Запрашиваем данные")}
                                    weight={500}
                                    bg="#5970FF"
                                    color="#FFFFFF"
                                    text="Запросить данные"
                                />
                            </div>
                            <div className="top_right" />
                        </div>
                    </section>
                    <section className="center">
                        <h2 className="title">Почему именно мы</h2>
                        <Carousel />
                        <div className="center_bottom" />
                    </section>
                    <section className="bottom">
                        <h2 className="title">Наши тарифы</h2>
                        <div className="cards_wripper">
                            {rates.map(item => (
                                <TariffPlanCard key={item.id} item={item} />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    )
}