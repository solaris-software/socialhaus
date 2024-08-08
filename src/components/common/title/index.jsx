import styles from "./styles.module.scss";

export const Title = ({ title, variant }) => {
    return (
        <h2 className={`${styles.title} ${variant === 'dark' ? styles.dark : styles.light}`}>
            {title}
        </h2>
    )
}