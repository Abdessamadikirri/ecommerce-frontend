import styles from "./contactpage.module.css"


import Footer from "../../components/footer/footer";
import NavBar from "../../components/header/navbar";

export default function Contactpage() {
    return (
        <div className={styles.contactpage}>
            <NavBar />
            <div className={styles.contact}></div>
            <Footer />
        </div>
    );
}