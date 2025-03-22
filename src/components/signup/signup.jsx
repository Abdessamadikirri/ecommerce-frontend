import { useState } from "react"
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Signup() {
    const [formdata, seformdata] = useState({ name: '', email: '', password: '', role: 'customer', image: '' })

    const handlform = (e) => {
        const { name, value } = e.target
        seformdata(prestate => ({
            ...prestate,
            [name]: value
        }))
    }
    const handlSubmit = async (e) => {
        console.log(formdata)
        e.preventDefault();
        await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
            withCredentials: true
        })
        const csrfToken = Cookies.get('XSRF-TOKEN');
        try {
            const response = await axios.post("http://localhost:8000/api/register", formdata, {
                headers: {
                    'X-XSRF-TOKEN': csrfToken
                }, withCredentials: true
            });
            console.log('Registration Success:', response.data);

        } catch (error) {
            console.error('Registration Error:', error);
        }


    }
    return (
        <div>
            <h1>Sign up </h1>
            <form onSubmit={handlSubmit}>
                <label htmlFor="name">Username</label><br />
                <input type="text" id="name" name="name" onChange={handlform} /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" onChange={handlform} /><br />
                <label htmlFor="password">password</label><br />
                <input type="password" id="password" name="password" onChange={handlform} /><br />
                <button type="submit">Sign up </button>

            </form>
        </div>
    )
}