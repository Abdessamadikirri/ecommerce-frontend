import styles from './aboutpage.module.css'

import NavBar from '../../components/header/navbar';
import Footer from '../../components/footer/footer';


export default function Aboutpage() {
    return (

        <div className={styles.aboutpage}>
            <NavBar />
            <div className={styles.about}></div>
            <Footer />
        </div>
    );
}