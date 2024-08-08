import styles from "./styles.module.scss";

export const FeatureCard = ({ title, info, image }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={"Imagen"} className={styles.imageText}/>
                <div className={styles.hoverText}>{info}</div>
            </div>
            <div className={styles.label}>
                <p className={styles.labelText}>{title}</p>
            </div>
        </div>
    );
}