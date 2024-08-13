import styles from "./styles.module.scss";
import { Title } from "../common/title/index.jsx";
import Slider from "react-slick";
import { Quote } from "../common/quote/index.jsx";
import "./styles.css";
import { motion } from "framer-motion";

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

    // Variantes de animación para el contenedor del carrusel
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Retardo entre la aparición de cada tarjeta
            }
        }
    };

    // Variantes de animación para las tarjetas
    const quoteVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.titleColumn}>
                    <h5>What people say</h5>
                    <Title title="HEAR IT FROM THEM" variant="dark" />
                </div>
            </div>
            <motion.div
                className={styles.carouselContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Las animaciones se ejecutan solo la primera vez que entran en vista
            >
                <div className="slider-container quote-carousel">
                    <Slider {...settings}>
                        {[1, 2, 3, 4, 6].map((item, index) => (
                            <motion.div key={index} variants={quoteVariants}>
                                <Quote
                                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    author="John Doe"
                                />
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </motion.div>
        </div>
    );
};
