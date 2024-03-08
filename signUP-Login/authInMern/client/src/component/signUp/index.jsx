import { useState } from 'react'
import styles from './styles.module.css'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'

const signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "", 
        email: "",
        password:""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]:input.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/users";
            const {data: res} = await axios.post(url, data)
            navigate("/login")
            console.log(res.message)
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
        }
    }
    return(
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>

                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <link to="/login">
                        <button type='button' className={styles.white_btn}>
                            sign in
                        </button>
                    </link>
                </div>
                
            <div className={styles.right}>
                <form className={styles.signup_form_container} onSubmit={handleSubmit}> 
                <h1> Create Account</h1>
                <input type='text' placeholder='First Name' name='firstName' value={data.firstName} onChange={ handleChange}required className={styles.input}/>
                <input type='text' placeholder='Last Name' name='lasttName' value={data.lastName} onChange={ handleChange}required className={styles.input}/>
                <input type='email' placeholder='Email' name='email' value={data.email} onChange={ handleChange}required className={styles.input}/>
                <input type='password' placeholder='Password' name='password' value={data.password} onChange={ handleChange}required className={styles.input}/>

                {error && <div className={styles.error_msg}>{error}</div>}
            <button type='submit' className= {styles.green_btn}>
            Sign up
            </button>
                </form>
                 </div>
            </div>
        </div>
    )
}

export default signup;