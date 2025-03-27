import { useSelector } from "react-redux";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/header/navbar";
import styles from "./abouthoney.module.css"

export default function Abouthoneypage() {

    return (
        <div className={styles.abouthoneypage}>
            <NavBar />
            <div className={styles.abouthoney}></div>
            <Footer />
        </div>
    );
}