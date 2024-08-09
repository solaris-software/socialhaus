import styles from "./styles.module.scss";
import {Title} from "../common/title/index.jsx";
import Slider from "react-slick";
import {Quote} from "../common/quote/index.jsx";
import "./styles.css";

export const Clients = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 750,
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.titleColumn}>
                    <h5>What people say</h5>
                    <Title title="HEAR IT FROM THEM" variant="dark"/>
                </div>
            </div>
            <div className={styles.carouselContainer}>
                <div className="slider-container quote-carousel">
                    <Slider {...settings}>
                        {[1, 2, 3, 4, 6].map((item, index) => (
                            <Quote
                                key={index}
                                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                author="John Doe"
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}