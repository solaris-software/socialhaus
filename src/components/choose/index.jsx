import styles from "./styles.module.scss";
import { Title } from "../common/title/index.jsx";
import { motion } from "framer-motion";

const aboutContent1 = "Somos creadoras de estrategias que resuenan con tu marca. Nos movemos en la intersección de la creatividad y lo social.";
const aboutContent2 = "El verdadero poder reside en comprender el comportamiento humano. Saber cómo las personas se conectan, se comunican y toman decisiones en un entorno social.";
const aboutContent3 = "Combinamos nuestros conocimientos para ofrecerte un enfoque integral, analizando cada aspecto de tu marca, para garantizar que cada estrategia no solo sea creativa, sino también efectiva y diferenciadora.";
const aboutContent4 = "No creemos en las soluciones genéricas; creemos en la personalización y en lo que ocurre cuando entendemos lo que hace única a tu marca.";
const aboutContent5 = "Queremos convertirnos en tus aliadas, tus confidentes y, sobre todo, en tus compañeras en este viaje creativo.";

const movingVariants = {
    animate: (index) => ({
        x: ["100%", "-100%"],
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: Math.random() * 15 + 5,
            ease: "linear",
            delay: Math.random() * index * 0.1,
        },
    }),
};

export const Choose = () => {
    const contents = [
        aboutContent1,
        aboutContent2,
        aboutContent3,
        aboutContent4,
        aboutContent5,
    ];

    return (
        <div id={"team"} className={styles.container}>
            <div className={styles.titleContainer}>
                <Title title="WHY CHOOSE US" variant="light" />
            </div>
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <motion.div>
                        {contents.map((content, index) => (
                            <motion.p
                                key={index}
                                className="word-moving"
                                custom={index}
                                variants={movingVariants}
                                animate="animate"
                            >
                                {content}
                            </motion.p>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
