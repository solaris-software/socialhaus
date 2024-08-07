import styles from "./styles.module.scss";
import {Title} from "../common/title/index.jsx";

const aboutContent1 = "Somos SOCIAL HAUS, una agencia dedicada a ayudarte a alcanzar los objetivos de tu  marca mediante estrategias de marketing enfocadas en redes sociales."
const aboutContent2 = "Fusionamos la  creatividad y disciplina para impulsar ideas innovadoras y efectivas, asegurando que tu  marca destaque en el ámbito digital."
const aboutContent3 = "Sabemos que el marketing va más allá de los elementos visuales atractivos, se trata de  entender cómo funcionamos como seres sociales."

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundShape}></div>
            <div className={styles.leftContainer}>
                <Title title="ABOUT US" color="white"/>
                <div style={styles.contentContainer}>
                    <p>{aboutContent1}</p>
                    <p>{aboutContent2}</p>
                    <p>{aboutContent3}</p>
                </div>
            </div>
        </div>
    )
}