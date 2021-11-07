import { useState, useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import firebaseApp from '../config/firebaseApp'
import { AuthContext } from '../AuthService'

import './pages.css'

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate('/', { replace: true });
            })
            .catch(err => console.log(err))
    }

    // ログインしている場合は、"/"へリダイレクトする
    const user = useContext(AuthContext)

    if (user) {
        return <Navigate to='/' replace={true} />
    }

    return (
        <div className='form-wrap'>
            <h1>Sign In</h1>
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
                <button type='submit'>ログイン</button><br />
                <Link to='/signup'>新規登録</Link><br />
            </form>
        </div>
    )

}

export default LogIn