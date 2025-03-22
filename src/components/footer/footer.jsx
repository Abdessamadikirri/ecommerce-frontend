import styles from './footer.module.css'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.top}>
                    <div>

                        <p className={styles.pleft}>Email:imrzargueoffla@gmail.com</p>
                        <p className={styles.pleft}>Phone Number:+21200000000</p>
                        <p className={styles.pleft}>Address:Sidi Mbark Sidi Ifni</p>

                    </div >
                    <div>

                        <p className={styles.pcenter}><Link to="/home">Home</Link></p>
                        <p className={styles.pcenter}><Link to="/contact">Contact</Link></p>
                        <p className={styles.pcenter}><Link to="/About">About </Link></p>
                        <p className={styles.pcenter}><Link to="/shop">Products</Link></p>

                    </div>
                    <div>

                        <p><Link><img src="facebook.svg" alt="" /></Link></p>
                        <p><Link><img src="x.svg" alt="" /></Link></p>
                        <p><Link><img src="insta.svg" alt="" /></Link></p>
                    </div>
                </div>
                <div><p className={styles.pbuttom}>&copy; 2025 imrzargueoffla. All rights reserved.</p></div>
            </div>
        </footer>
    )
}