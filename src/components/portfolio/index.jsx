import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';
import styles from './styles.module.scss';
import Slider from "react-slick";
import { Title } from "../common/title/index.jsx";
import { ProjectCard } from "../common/projectCard/index.jsx";
import { motion } from "framer-motion";
import { WordMoving } from "../common/word-moving/index.jsx";
import hustlers from "/src/assets/hustlers.jpg";
import gemma from "/src/assets/gemma.jpg";
import afrika from "/src/assets/afrika.jpg";
import groove from "/src/assets/groove.jpg";

const words = "creatividad / innovacion / social media / estrategia digital";

export const Portfolio = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const projects = [
        { image: hustlers, title: "Hustlers" },
        { image: gemma, title: "New Gemma" },
        { image: afrika, title: "Afrika" },
        { image: groove, title: "Groove" }
    ];

    return (
        <div id={'portfolio'} className={styles.container}>
            <div className={styles.wordMovingBackground}>
                <WordMoving
                    words={words}
                    numberOfWords={64}
                />
            </div>
            <div className={styles.titleContainer}>
                <Title title="PORTFOLIO" variant="light" />
            </div>
            <motion.div
                className={styles.sliderContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="slider-container portfolio-carousel">
                    <Slider {...settings}>
                        {projects.map((project, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                >
                                    <ProjectCard
                                        image={project.image}
                                        title={project.title}
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
