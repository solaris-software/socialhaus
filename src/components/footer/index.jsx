import styles from "./styles.module.scss";
import email from "../../assets/mail.svg";
import phone from "../../assets/phone.svg"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contacts}>
                    <div className={styles.infoContainer}>
                        <div className={styles.info}>
                            <img src={email} alt={"Email"}/>
                            <p>Socialhaus.ar@gmail.com</p>
                        </div>
                        <div className={styles.info}>
                            <img src={phone} alt={"Phone"}/>
                            <p>+54 11 3591 0368</p>
                        </div>
                    </div>
                    <div className={styles.apps}>
                        <img src={email} alt={"Email"}/>
                        <img src={email} alt={"Email"}/>
                        <img src={email} alt={"Email"}/>
                        <img src={email} alt={"Email"}/>
                    </div>
                </div>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>
                        Social
                        <span className={styles.dot}>.</span>
                    </h3>
                    <div className={styles.subtitle}>
                        <h6>Transformamos ideas creativas en impacto social</h6>
                    </div>
                </div>
            </div>
            <div className={styles.rights}>
                <p>© 2024 Socialhaus. All rights reserved.</p>
            </div>
        </footer>
    );
}