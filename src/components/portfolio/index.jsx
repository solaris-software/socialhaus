import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';
import styles from './styles.module.scss';
import Slider from "react-slick";
import {Title} from "../common/title/index.jsx";
import {ProjectCard} from "../common/projectCard/index.jsx";
import {NextArrow, PrevArrow} from "../common/arrows/index.jsx";

export const Portfolio = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,

    };


    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <Title title="PORTFOLIO" variant="light"/>
            </div>
            <div className={styles.sliderContainer}>
                <div className="slider-container">
                    <Slider {...settings}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                            return (
                                <ProjectCard key={index} title="Project Title" description="Project Description"/>
                            )
                        })}
                    </Slider>
                </div>
            </div>

        </div>
    )
}


