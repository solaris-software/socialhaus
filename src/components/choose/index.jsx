import styles from "./styles.module.scss";
import team from "../../assets/team.png"
import {Title} from "../common/title/index.jsx";
import {motion} from "framer-motion";

const aboutContent1 = "Somos creadoras de estrategias que resuenan con tu marca. Nos movemos en la intersección de la creatividad y lo social.";
const aboutContent2 = "El verdadero poder reside en comprender el comportamiento humano. Saber cómo las personas se conectan, se comunican y toman decisiones en un entorno social.";
const aboutContent3 = "Combinamos nuestros conocimientos para ofrecerte un enfoque integral, analizando cada aspecto de tu marca, para garantizar que cada estrategia no solo sea creativa, sino también efectiva y diferenciadora.";
const aboutContent4 = "No creemos en las soluciones genéricas; creemos en la personalización y en lo que ocurre cuando entendemos lo que hace única a tu marca."
const aboutContent5 = "Queremos convertirnos en tus aliadas, tus confidentes y, sobre todo, en tus compañeras en este viaje creativo."
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
export const Choose = () => {
    return (
        <div id={'team'} className={styles.container}>
            <div className={styles.titleContainer}>
                <Title title="WHY CHOOSE US" variant="light"/>
            </div>
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={paragraphContainerVariants}
                    >
                        <motion.p variants={paragraphVariants}>{aboutContent1}</motion.p>
                        <motion.p variants={paragraphVariants}>{aboutContent2}</motion.p>
                        <motion.p variants={paragraphVariants}>{aboutContent3}</motion.p>
                        <motion.p variants={paragraphVariants}>{aboutContent4}</motion.p>
                        <motion.p variants={paragraphVariants}>{aboutContent5}</motion.p>
                    </motion.div>
                </div>
                <div className={styles.rightContainer}>
                    <img src={team} alt={'team'} />
                </div>
            </div>
            </div>
    )
}