import styles from "./styles.module.scss";
import {Title} from "../common/title/index.jsx";
import {FeatureCard} from "../common/featureCard/index.jsx";

//make an array of objects for cads:
const features = [
    {
        title: "Feature 1",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Feature 2",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Feature 3",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Feature 4",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Feature 5",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Feature 6",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
    }
];
export function Features() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <Title title="WHAT WE DO" variant="dark"/>
            </div>
            <div className={styles.cardsContainer}>
                {features.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} info={feature.info} image={feature.image}/>
                ))}
            </div>
        </div>
    )
}