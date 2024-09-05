import styles from "./styles.module.scss";
import textBg from "../../assets/hero-text-bg.png";
import { Typewriter } from "../common/typewriter/index.jsx";
import { motion } from "framer-motion";
import pencil from "./pencil.svg"
import {WordMoving} from "../common/word-moving/index.jsx";

const heroTitle = "Social";
const heroSubtitle = "HAUS";
const heroDescription = "Somos una agencia creativa y dinámica, basada en Buenos Aires";
const heroFooter = "CONVIRTIENDO IDEAS CREATIVAS EN ";
const highlight = "IMPACTO SOCIAL";

const words = "creatividad / innovacion / social media / estrategia digital";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const typewriterVariants = {
    hidden: {},
    visible: { opacity: 1, delay: 2 },
};

export const Hero = () => {
    return (
        <motion.div
            className={styles.container}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className={styles.imgContainer} variants={itemVariants}>
                <WordMoving
                    words={words}
                    numberOfWords={32}/>
            </motion.div>
            <motion.div className={styles.contentContainer} variants={itemVariants}>
                <h1 className={styles.title}>
                    {heroTitle}
                    <motion.span className={styles.dot}>
                        .
                    </motion.span>
                </h1>
                <div className={styles.subtitle}>
                    <h3>{heroSubtitle}</h3>
                </div>
            </motion.div>
            <motion.div className={styles.description} variants={typewriterVariants}>
                <Typewriter text={heroDescription} className={styles.heroText} />
            </motion.div>
            <motion.div
                className={styles.footer}
                variants={itemVariants}
            >
                <h4>
                    {heroFooter} <span>{highlight}</span>
                </h4>
                <img src={pencil} alt="Pencil" />
            </motion.div>
        </motion.div>
    );
};
