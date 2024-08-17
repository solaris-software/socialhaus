import styles from "./styles.module.scss";
import {useState} from "react";

const navbarItems = [
    {
        name: "ABOUT",
        link: "#about"
    },
    {
        name: "SERVICES",
        link: "#services"
    },
    {
        name: "PORTFOLIO",
        link: "#portfolio"
    },
    {
        name: "CUSTOMERS",
        link: "#customers"
    },
    {
        name: "TEAM",
        link: "#team"
    }
];

const navbarTitle = "Socialhaus.";
const navbarButton = "CONTACT US    ";

const navIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="18" height="2" fill="white"/>
        <rect x="3" y="11" width="18" height="2" fill="white"/>
        <rect x="3" y="16" width="18" height="2" fill="white"/>
    </svg>
)

const closeIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="white" />
        <path d="M6 6L18 18" stroke="white"  />
    </svg>
)

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <span>{navbarTitle}</span>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <span className={menuOpen ? styles.open : ""}>
                    {!menuOpen ? navIcon : closeIcon}
                </span>
            </div>
            <div className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
                <div className={styles.sections}>
                    {navbarItems.map((item, index) => (
                        <a key={index} href={item.link}>{item.name}</a>
                    ))}
                </div>
                <button className={styles.button}>{navbarButton}</button>
            </div>
        </div>
    )

}