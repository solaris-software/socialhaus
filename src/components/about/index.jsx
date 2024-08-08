import styles from "./styles.module.scss";
import {Title} from "../common/title/index.jsx";
import {useState} from "react";
import Collapse from "../common/collapsible/index.jsx";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";

const aboutContent1 = "Somos SOCIAL HAUS, una agencia dedicada a ayudarte a alcanzar los objetivos de tu  marca mediante estrategias de marketing enfocadas en redes sociales."
const aboutContent2 = "Fusionamos la  creatividad y disciplina para impulsar ideas innovadoras y efectivas, asegurando que tu  marca destaque en el ámbito digital."
const aboutContent3 = "Sabemos que el marketing va más allá de los elementos visuales atractivos, se trata de  entender cómo funcionamos como seres sociales."

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
]

const AboutCollapsible = ({ title, info }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.collapsibleContainer}>
            <div className={styles.collapsibleHeader} onClick={() => setOpen(!open)}>
                <img src={open ? Minus : Plus} alt="Plus/Minus"/>
                <h3>{title}</h3>
            </div>
            <Collapse open={open}>
                <div className={styles.collapsibleInfo}>
                    {info}
                </div>
            </Collapse>
        </div>
    )

}

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundShape}></div>
            <div className={styles.leftContainer}>
                <Title title="ABOUT US" variant="light"/>
                <div>
                    <p>{aboutContent1}</p>
                    <p>{aboutContent2}</p>
                    <p>{aboutContent3}</p>
                </div>
            </div>
            <div className={styles.rightContainer}>
                {aboutExtra.map((item, index) => {
                    return (
                        <AboutCollapsible key={index} title={item.title} info={item.info} />
                    )
                })}
            </div>
        </div>
    )
}