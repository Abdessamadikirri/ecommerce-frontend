import styles from "./shoppage.module.css"

import Footer from "../../components/footer/footer";
import NavBar from "../../components/header/navbar";
import Loading from "../../components/loading/loading";

export default function Shoppage() {
    return (
        <div className={styles.shoppage}>
            <NavBar />
            <div className={styles.middleconten}>
                <Loading />
            </div>
            <Footer />
        </div>
    );
}