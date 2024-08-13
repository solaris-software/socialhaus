import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';
import styles from './styles.module.scss';
import Slider from "react-slick";
import { Title } from "../common/title/index.jsx";
import { ProjectCard } from "../common/projectCard/index.jsx";
import { NextArrow, PrevArrow } from "../common/arrows/index.jsx";
import dummyImage from "/src/assets/dummy-image.jpg";
import { motion } from "framer-motion";

export const Portfolio = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
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
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <Title title="PORTFOLIO" variant="light" />
            </div>
            <motion.div
                className={styles.sliderContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Las animaciones se ejecutan solo la primera vez que entran en vista
            >
                <div className="slider-container portfolio-carousel">
                    <Slider {...settings}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                >
                                    <ProjectCard
                                        image={dummyImage}
                                        title="Project Title"
                                        description="Project Description"
                                    />
                                </motion.div>
                            );
                        })}
                    </Slider>
                </div>
            </motion.div>
        </div>
    );
};
