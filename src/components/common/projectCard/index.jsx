import styles from './styles.module.scss';

export const ProjectCard = ({title, description, image}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                {/*<img src={image} alt="project"/>*/}
            </div>
            {/*<div className={styles.textContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>*/}
        </div>
    )
}