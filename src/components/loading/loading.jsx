import styles from "./loading.module.css"
export default function Loading() {
    return (
        <div className={styles.loader}>
            <section className={styles.dotsContainer}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </section >
        </div>
    );
}