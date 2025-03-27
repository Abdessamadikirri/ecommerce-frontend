import { useState } from "react"
import styles from "./signup.module.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userAction";

export default function Signup() {
    const [formdata, seformdata] = useState({ name: '', email: '', password: '', role: 'customer', image: '' })
    const dispatch = useDispatch()


    const handlform = (e) => {
        const { name, value } = e.target
        seformdata(prestate => ({
            ...prestate,
            [name]: value
        }))
    }
    const handlsubmit = (e) => {
        e.preventDefault();
        dispatch(register(formdata))
    }


    return (
        <div className={styles.form}>
            <form className={styles.formtag} onSubmit={handlsubmit}>
                <h1 className={styles.title}>Sign up </h1>
                <div className={styles.formgroup}>
                    <label htmlFor="name">Username</label>
                    <input type="text" id="name" name="name" onChange={handlform} />
                </div>
                <div className={styles.formgroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handlform} />
                </div>
                <div className={styles.formgroup}>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name="password" onChange={handlform} />
                </div>
                <button type="submit">Sign up </button>
                <div className={styles.div}>

                    <p className={styles.p}>have  already an acount? <Link className={styles.links} to="/login">Login</Link></p>
                </div>

            </form>
        </div>
    )
}