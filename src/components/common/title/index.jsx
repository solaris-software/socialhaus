import styles from "./styles.module.scss";

export const Title = ({ title, color }) => {
    return (
        <h2 className={styles.title} style={{ color: color }}>
            {title}
        </h2>
    )
}