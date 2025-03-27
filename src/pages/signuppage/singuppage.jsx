import styles from './signup.module.css'
import NavBar from '../../components/header/navbar'
import Footer from '../../components/footer/footer'
import Signup from '../../components/signup/signup'
export default function Signuppage() {
    return (
        <div className={styles.signuppage}>
            <NavBar />
            <div className={styles.signup}>
                <Signup />
            </div>
            <Footer />
        </div>
    )
}