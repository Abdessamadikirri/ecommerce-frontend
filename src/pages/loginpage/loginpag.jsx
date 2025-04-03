import styles from './loginpage.module.css'

import Login from '../../components/login/login';
export default function Loginpage() {
    return (
        <div className={styles.loginpage}>

            <div className={styles.login}>
                <Login />
            </div>


        </div >
    );
}