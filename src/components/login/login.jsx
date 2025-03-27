import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/userAction';

export default function Login() {
    const [formdata, setformData] = useState({ email: '', password: '' })
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [isfail, setisfail] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        setisfail(!!user?.message);
    }, [user])
    console.log(isfail)

    console.log(user)
    const handlinput = (e) => {
        const { name, value } = e.target
        setformData(prevstate => {
            return {
                ...prevstate,
                [name]: value
            }
        })
    }

    const handlsubmit = async (e) => {
        e.preventDefault();
        dispatch(login(formdata))
        navigate('/shop')
    }
    return (
        <div className={styles.form}>

            <form className={styles.formtag} onSubmit={handlsubmit}>
                <h1 className={styles.title}>Login </h1>
                <div className={`${styles.alert} ${isfail ? styles.show : ""}`}>{user.message}</div>
                <div className={styles.formgroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handlinput} value={formdata.email} placeholder='Email' />
                </div>
                <div className={styles.formgroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handlinput} value={formdata.password} placeholder='Password' />
                </div>

                <button type="submit">login</button>

                <div className={styles.div}>
                    <Link className={styles.links}>Forget Password?</Link>
                    <p className={styles.p}>Don't have an acount? <Link className={styles.links} to="/signup">Register</Link></p>
                </div>
            </form>
        </div>
    );

}