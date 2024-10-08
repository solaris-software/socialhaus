import { Title } from "../common/title/index.jsx";
import ContactForm from "../common/contactForm/index.jsx";
import styles from './styles.module.scss';

export const Contact = () => {
    return (
        <div id={'contact'} className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <Title title="CONTACT US" variant="dark"/>
                </div>
                <div className={styles.content}>
                    <div className={styles.contactColumn}>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}
