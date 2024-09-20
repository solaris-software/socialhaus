import styles from "./styles.module.scss";
import { Title } from "../common/title/index.jsx";
import { motion } from "framer-motion";
import team from "/src/assets/team-illustration.svg";

const aboutContent1 = "Somos creadoras de estrategias que resuenan con tu marca. Nos movemos en la \nintersección de la creatividad y lo social.";
const aboutContent2 = "El verdadero poder reside en comprender el comportamiento humano. Saber cómo las \npersonas se conectan, se comunican y toman decisiones en un entorno social.";
const aboutContent3 = " Combinamos nuestros conocimientos para ofrecerte un enfoque integral, analizando cada aspecto de tu marca, para garantizar que cada estrategia no solo sea creativa, sino también efectiva y diferenciadora.";
const aboutContent4 = "No creemos en las soluciones genéricas; creemos en la personalización y en lo que ocurre cuando \nentendemos lo que hace única a tu marca.";
const aboutContent5 = "Queremos convertirnos en tus aliadas, tus confidentes y, sobre todo, en tus \ncompañeras en este viaje creativo.";

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 }
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2 }
    },
};

export const Choose = () => {
    return (
        <div id={"team"} className={styles.container}>
            <div className={styles.titleContainer}>
                <Title title="WHY CHOOSE US" variant="light" />
            </div>
            <div className={styles.content}>
                <motion.div
                    className={styles.leftContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    variants={textVariants}
                >
                    <div>
                        <motion.p variants={textVariants}>
                            {aboutContent1}
                        </motion.p>
                        <motion.p variants={textVariants}>
                            {aboutContent2}
                            {aboutContent3}
                        </motion.p>
                        <motion.p variants={textVariants}>
                            {aboutContent4}
                            {aboutContent5}
                        </motion.p>
                    </div>
                </motion.div>
                <motion.div
                    className={styles.rightContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    variants={imageVariants}
                >
                    <motion.img
                        src={team}
                        alt={'team'}
                        variants={imageVariants}
                    />
                </motion.div>
            </div>
        </div>
    );
};
