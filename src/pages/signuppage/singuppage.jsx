import styles from './signup.module.css'
import Signup from '../../components/signup/signup'
export default function Signuppage() {
    return (
        <div className={styles.signuppage}>

            <div className={styles.signup}>
                <Signup />
            </div>

        </div>
    )
}