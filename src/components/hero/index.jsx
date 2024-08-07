import styles from "./styles.module.scss";
import textBg from "../../assets/hero-text-bg.png";

const heroTitle = "Social";
const heroSubtitle = "HAUS";
const heroDescription = "Somos una agencia creativa y dinamica, basada en Buenos Aires";
const heroFooter = "CONVIRTIENDO IDEAS CREATIVAS EN ";
const highlight = "IMPACTO SOCIAL";

export const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={textBg} alt="Hero" />
            </div>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>
                    {heroTitle}
                    <span className={styles.dot}>.</span>
                </h1>
                <div className={styles.subtitle}>
                    <h3>{heroSubtitle}</h3>
                </div>
            </div>
            <div className={styles.description}>
                    <h2>{heroDescription}</h2>
            </div>
            <div className={styles.footer}>
                <h4>
                    {heroFooter} <span>{highlight}</span>
                </h4>
            </div>
        </div>
    )
}