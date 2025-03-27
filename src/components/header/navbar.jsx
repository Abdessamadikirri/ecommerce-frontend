import { Link, useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userAction';

export default function NavBar() {
    const [isClicked, setClicked] = useState(false);
    const isauth = useSelector((state) => state.user.isauth)
    const [isprofileclicked, setisprofileclicked] = useState(false)
    const navigate = useNavigate()
    const handleprofile = () => {
        setisprofileclicked(state => !state)
    }

    const dispatch = useDispatch();
    const handlelogout = () => {
        dispatch(logout())
        navigate('/')

    }
    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.image}>Imrzage  Oflla</div>
                <div className={styles.manu}>
                    <div>
                        <ul className={`${styles.navbarlink} ${isClicked ? styles.show : ""}`}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Shop">Shop</Link></li>
                            <li><Link to="/About">About Us</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className={styles.buttons}>
                        {isauth ? (<><Link className={styles.cartimage} to="/cart"><img src="cart.svg" alt="cart" /></Link>
                            <p onClick={handleprofile} className={styles.profileimage} to="/profile" ><img src="profile.svg" alt="profile image" /></p></>) : (<><button className={styles.login}> <Link to="/Login">Login</Link></button>
                                <button className={styles.signup}> <Link to="/Signup">Sign up </Link></button></>)}

                        {isauth && (<div className={`${styles.profilelink} ${isprofileclicked ? styles.apear : ""}`}>
                            <Link className={styles.profile} to="/profile"> Profile</Link>
                            <button onClick={handlelogout} className={styles.logout}>Logout</button>
                        </div>)}

                    </div>
                </div>
                <div className={styles.mobile}>
                    <i onClick={() => setClicked(prev => !prev)} className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        </header>
    );
}
