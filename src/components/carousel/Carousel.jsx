import React from "react";
import Slider from "react-slick";
import data from "./data";
import style from "./style.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1346,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 866,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  function NextArrow({ onClick }) {
    const styles = [style.arrows, style.arrow_next]
    return (
      <div
        className={styles.join(' ')}
        onClick={onClick}
      />
    );
  }

  function PrevArrow({ onClick }) {
    const styles = [style.arrows, style.arrow_prev]
    return (
      <div
        className={styles.join(' ')}
        onClick={onClick}
      />
    );
  }

  return (
    <Slider {...settings}>
      {data.map(item => (
        <div className={style.carousel_item} key={item.id}>
          <img src={item.img} alt={item.title}></img>
          <p style={{
            width: item.width,
            fontSize: "18px"
          }}>
            {item.title}
          </p>
        </div>
      ))}
    </Slider>
  )
}