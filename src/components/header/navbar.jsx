import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { useState } from 'react';

export default function NavBar() {
    const [isClicked, setClicked] = useState(false);

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.image}>Imrzage  Oflla</div>
                <div className={styles.manu}>
                    <div>
                        <ul className={`${styles.navbarlink} ${isClicked ? styles.show : ""}`}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <button className={styles.login}> <Link to="/Login">Login</Link></button>
                        <button className={styles.signup}> <Link to="/Signup">Sign up </Link></button>

                    </div>
                </div>
                <div className={styles.mobile}>
                    <i onClick={() => setClicked(prev => !prev)} className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        </header>
    );
}
