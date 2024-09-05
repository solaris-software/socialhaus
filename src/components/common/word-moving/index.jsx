import {color, motion} from "framer-motion";
import "./styles.css";


export const WordMoving = ({ words , numberOfWords}) => {
    const paragraphs = Array(numberOfWords).fill(words);
    const duration = numberOfWords > 32 ? 180 : 60;
    return (
        <div className="word-moving-container">
            {paragraphs.map((word, index) => (
                <motion.div
                    key={index}
                    className="word-moving"
                    animate={{ x: ["-1000%", "100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: Math.random() * 40 + duration,
                        ease: "linear",
                        delay: Math.random() * index * 0.2,
                    }}
                >
                    <p className={`${numberOfWords > 32 && 'portfolio'}`}>
                        {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word}
                        {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word}
                        {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word}
                        {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word}
                        {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};