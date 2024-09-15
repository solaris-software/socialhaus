import styles from "./styles.module.scss";

export const FeatureCard = ({ title, info }) => {
    return (
        <div className={styles.card}>
            <div className={styles.innerCard}>
                <div className={styles.imageContainer}>
                    <p>{title}</p>
                </div>
                <div className={styles.hoverText}>
                    {info}
                </div>
            </div>
        </div>
    );
}
