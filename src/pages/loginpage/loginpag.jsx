import styles from './loginpage.module.css'


import NavBar from '../../components/header/navbar';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
export default function Loginpage() {
    return (
        <div className={styles.loginpage}>
            <NavBar />
            <div className={styles.login}>
                <Login />
            </div>

            <Footer />
        </div >
    );
}