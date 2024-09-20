import styles from "./styles.module.scss";
import quoteSvg from "../../../../public/assets/quote.svg";

export const Quote = ({quote, author}) => {
    return (
        <div className={styles.container}>
            <div>
                <img src={quoteSvg} alt="quote" />
            </div>
            <div className={styles.contentContainer}>
                <p>{quote}</p>
                <div>
                    <div className={styles.line} />
                    <p>{author}</p>
                    </div>
            </div>
        </div>
    )
}