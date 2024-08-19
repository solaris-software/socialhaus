import styles from "./styles.module.scss";
import { Title } from "../common/title/index.jsx";
import { FeatureCard } from "../common/featureCard/index.jsx";
import { motion } from "framer-motion";

const features = [
    {
        title: "Feature 1",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Feature 2",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Feature 3",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Feature 4",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Feature 5",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Feature 6",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Features() {
    return (
        <div id={'services'} className={styles.container}>
            <div className={styles.titleContainer}>
                <Title title="WHAT WE DO" variant="dark" />
            </div>
            <motion.div
                className={styles.cardsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {features.map((feature, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <FeatureCard title={feature.title} info={feature.info} image={feature.image} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
