import styles from "./herosection.module.css"
import { Link } from "react-router-dom"
export default function HeroSection() {
    return (
        <div className={styles.hero}>
            <div className={styles.herocontent}>
                <h1 className={styles.title}>Imrzage  Oflla</h1>
                <p className={styles.p}>
                    Welcome to Imrzague Offla! We proudly offer pure, high-quality honey, sourced with care from the best hives, for a natural taste you can trust.
                </p>
                <button className={styles.explore}><Link to="">explore</Link></button>
            </div>
            <div className={styles.honeycomb}>
                <div className={`${styles.hexagon} ${styles.hexagon1}`}></div>
                <div className={`${styles.hexagon} ${styles.hexagon2}`}></div>
                <div className={`${styles.hexagon} ${styles.hexagon3}`}></div>
            </div>
        </div >
    )
}