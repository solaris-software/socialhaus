import styles from "./styles.module.scss";
import { Title } from "../common/title/index.jsx";
import { useState } from "react";
import Collapse from "../common/collapsible/index.jsx";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
import { motion } from "framer-motion";

const aboutContent1 = "Somos SOCIAL HAUS, una agencia dedicada a ayudarte a alcanzar los objetivos de tu marca mediante estrategias de marketing enfocadas en redes sociales.";
const aboutContent2 = "Fusionamos la creatividad y disciplina para impulsar ideas innovadoras y efectivas, asegurando que tu marca destaque en el ámbito digital.";
const aboutContent3 = "Sabemos que el marketing va más allá de los elementos visuales atractivos, se trata de entender cómo funcionamos como seres sociales.";

const aboutExtra = [
    {
        title: "IMPULSAMOS TU MARCA CON ESTRATEGIAS INNOVADORAS",
        info: "Nuestra misión es ayudarte a alcanzar los objetivos de tu marca mediante estrategias de marketing enfocadas en redes sociales."
    },
    {
        title: "IMPULSAMOS TU MARCA CON ESTRATEGIAS INNOVADORAS",
        info: "Nuestra misión es ayudarte a alcanzar los objetivos de tu marca mediante estrategias de marketing enfocadas en redes sociales."
    },
    {
        title: "IMPULSAMOS TU MARCA CON ESTRATEGIAS INNOVADORAS",
        info: "Nuestra misión es ayudarte a alcanzar los objetivos de tu marca mediante estrategias de marketing enfocadas en redes sociales."
    }
];

const paragraphContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
};

const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const collapsibleItemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
};

const AboutCollapsible = ({ title, info }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            className={styles.collapsibleContainer}
            variants={collapsibleItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => setOpen(!open)}
        >
            <div className={styles.collapsibleHeader}>
                <img src={open ? Minus : Plus} alt="Plus/Minus" />
                <h3>{title}</h3>
            </div>
            <Collapse open={open}>
                <div className={styles.collapsibleInfo}>
                    {info}
                </div>
            </Collapse>
        </motion.div>
    );
};

export const About = () => {
    return (
        <div id={'about'} className={styles.container}>
            <div className={styles.backgroundShape}></div>
            <div className={styles.leftContainer}>
                <Title title="ABOUT US" variant="light" />
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={paragraphContainerVariants}
                >
                    <motion.p variants={paragraphVariants}>{aboutContent1}</motion.p>
                    <motion.p variants={paragraphVariants}>{aboutContent2}</motion.p>
                    <motion.p variants={paragraphVariants}>{aboutContent3}</motion.p>
                </motion.div>
            </div>
            <div className={styles.rightContainer}>
                {aboutExtra.map((item, index) => (
                    <AboutCollapsible key={index} title={item.title} info={item.info} />
                ))}
            </div>
        </div>
    );
};
