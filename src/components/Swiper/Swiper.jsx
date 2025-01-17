import { useRef, useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules"
import "swiper/css";
import css from "./Swiper.module.css";

import one from "../../assets/images/photo_paper.jpg";
import two from "../../assets/images/photo_paper_two.jpg";
import third from "../../assets/images/photo_pb.jpg";
import four from "../../assets/images/photo_table.jpg";
import five from "../../assets/images/solve.jpg";
import six from "../../assets/images/mem.jpg"
import seven from "../../assets/images/exp.jpg"
import clsx from "clsx";

export default function ImageSwiper() {
    const swiperContainerRef = useRef(null);
    const swiperRef = useRef(null);
    
    const images = [one, two, third, four, five, six];

    useEffect(() => {
        if (swiperContainerRef.current && !swiperRef.current) {
            swiperRef.current = new Swiper(swiperContainerRef.current, {
                modules: [Autoplay],
                slidesPerView: 1,
                spaceBetween: 16,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });
        }
    }, []);

    return (
        <>
        <div className={css.swiperWrapper}>
            <div className={clsx(css.projectsList ,"swiper")} ref={swiperContainerRef}>
                <div className="swiper-wrapper">
                    {images.map((image, index) => (
                        <div key={index} className={clsx(css.imageItemUp,"swiper-slide")}>
                            <img className={css.imageItem} src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <a className={css.seven} href="https://www.worldcubeassociation.org/results/rankings/333fm/single?region=Ukraine"><img className={css.sevenImage} src={seven} alt="up" /></a>
        </>
    );
}
