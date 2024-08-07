import styles from "./styles.module.scss";

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

export const Navbar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <span>{navbarTitle}</span>
            </div>
            <div className={styles.links}>
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