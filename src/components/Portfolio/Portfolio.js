import "./Favorite_Place.css";
import { sliderData } from "./Favorite_PlaceDatas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";


const FavoritePlace = () => {
  const { t, i18n } = useTranslation();

  const myRef = useRef();
  const [isNext, setNext] = useState(false);
  useEffect(() => {
    myRef.current.slickPlay();
    if (isNext === true) {
      myRef.current.slickNext();
      setNext(false);
    }
  }, [isNext]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 667,
        settings: {
          draggable: true,
          swipeToSlide: true,
          touchMove: true,
          dots:false,
        },
      },
    ],
  };
  return (
    <>
      <div id="Favorite_Place" className="FavoritePlace1">
        <h2>{t("portdis")}</h2>
        <div className="FavoritePlace2">
          
          <Slider ref={myRef} {...settings}>
            {sliderData.map((data, index) => {
              return (
                <div key={index}>
                  <Card data={data} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

function Card({ data }) {
  const [opacity, setOpacity] = useState(false);

  const style = useSpring({
    transform: opacity ? `scale(1.1)` : `scale(1)`,
    config: { mass: 10, tension: 390, friction: 10 },
  });

  return (
    <div
      className="imageContainer"
    >
      <div className="image_position">
        <div className="image">
          <animated.img
            onMouseMove={() => setOpacity(true)}
            onMouseLeave={() => setOpacity(false)}
            style={style}
            src={data.image}
            className="sliderImages"
            alt="slider"
          />
        </div>
        <div className="textContainer">
          <div className="videoDesc">{data.videoDesc}</div>
        </div>
      </div>
    </div>
  );
}
export default FavoritePlace;
