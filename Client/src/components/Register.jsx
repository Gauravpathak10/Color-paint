import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {
    const navigate = useNavigate()
    const [name, setname] = useState([''])
    const [email, setemail] = useState([''])
    const [error, seterror] = useState('')
    const [password, setpassword] = useState([''])
    const signUp = (e) => {
        e.preventDefault()
        const data = { email, password, name }
        if (email == '' || password == '' || name == '') {
            return seterror(`😅 All Field required`)
        }
        axios.post('http://localhost:5000/reg', data)
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('User', JSON.stringify(res.data.data))
                    navigate('/draw')

                }
            })
            .catch((err) => {
                seterror(err.message)
                navigate('/')
            })
    }
    return (
        <div className='form'>
            <form action="">
                <h1>Register</h1>
                <p>{error}</p>
                <input type="text" placeholder='...name' name='name' value={name} onChange={(e) => { setname(e.target.value); seterror('') }} />
                <input type="email" placeholder='...email' name='email' value={email} onChange={(e) => { setemail(e.target.value); seterror('') }} />
                <input type="password" placeholder='...Enter password' name='password' value={password} onChange={(e) => { setpassword(e.target.value); seterror('') }} />
                <button type='submit' onClick={signUp}>Submit</button>
                <span>Already have an account <Link to='/'>Login</Link></span>
            </form>
        </div>
    )
}

export default Register