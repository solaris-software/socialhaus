import {color, motion} from "framer-motion";
import "./styles.css";


export const WordMoving = ({ words , numberOfWords}) => {
    const paragraphs = Array(numberOfWords).fill(words); // Array de 12 elementos iguales

    return (
        <div className="word-moving-container">
            {paragraphs.map((word, index) => (
                <motion.div
                    key={index}
                    className="word-moving"
                    animate={index % 2 === 0 ? { x: ["100%", "-100%"] } : { x: ["-100%", "100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: Math.random() * 5 + 5,
                        ease: "linear",
                        delay: Math.random() * 2, // Desfase aleatorio entre 0 y 2 segundos
                    }}
                >
                    <p>{word}</p>
                </motion.div>
            ))}
        </div>
    );
};