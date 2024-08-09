import { motion } from "framer-motion";

const sentenceVariants = {
    hidden: {},
    // change staggerChildren variable to speed up or slow down typing.
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};

export const Typewriter = ({ text, className }) => {
    return (
        <motion.div
            className={className}
            key={text}
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
        >
            {text?.split("").map((char, i) => (
                <motion.span key={`${char}-${i}`} variants={letterVariants}>
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};
