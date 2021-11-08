import { useState } from 'react'
import { Link } from 'react-router-dom'
import firebaseApp from '../config/firebaseApp'

import './pages.css'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='form-wrap'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-wrap'>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        value={email}
                        id='email'
                        name='email'
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-wrap'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        value={password}
                        id='password'
                        name='password'
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className='input-wrap'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        value={name}
                        id='name'
                        name='name'
                        placeholder='name'
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <button type='submit'>新規登録</button><br />
                <Link to='/login'>ログイン</Link><br />
            </form>
        </div>
    )

}

export default SignUp