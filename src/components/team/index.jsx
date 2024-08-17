import styles from "./styles.module.scss";
import {Title} from "../common/title/index.jsx";
import team from "../../assets/team.png"

const posts = [
    "SOCIAL MEDIA",
    "CREATIVIDAD",
    "ESTRATEGIA DIGITAL",
    "INNOVACION",
    "MARKETING",
    "DESARROLLO WEB",
]

export const Team = () => {

    return (
        <div className={styles.container}>
            <div className={styles.postContainer}>
                {posts.map((post, index) => (
                    <div
                        style={{ transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})` }}
                        key={index}
                        className={styles.post}
                    >
                        <p>{post}</p>
                    </div>
                ))}
            </div>
            <img src={team} alt="Team" className={styles.img}/>
        </div>
    )

}