import { useState } from 'react'
import { Link } from 'react-router-dom'
import firebaseApp from '../config/firebaseApp'

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('logged In!')
            })
            .catch(err => console.log(err))
    }

    return (
        <div style={{
            backgroundColor: '#ccc',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            lineHeight: '3'
        }}>
            <h1 style={{
                margin: '0',
                padding: '10px',
                fontSize: '18px'
            }}>Sign In</h1>
            <form
                onSubmit={handleSubmit}
                style={{
                    textAlign: 'center'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor='email' style={{ display: 'block', width: '100px' }}>E-mail</label>
                    <input
                        type='email'
                        value={email}
                        id='email'
                        name='email'
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)}
                        style={{
                            fontSize: '16px',
                            width: '250px',
                            padding: '5px'
                        }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor='password' style={{ display: 'block', width: '100px' }}>Password</label>
                    <input
                        type='password'
                        value={password}
                        id='password'
                        name='password'
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)}
                        style={{
                            fontSize: '16px',
                            width: '250px',
                            padding: '5px'
                        }} />
                </div>
                <button type='submit' style={{
                    backgroundColor: '#666',
                    color: 'white',
                    width: '150px',
                    border: 'none',
                    padding: '5px'
                }} >ログイン</button><br />
                <Link to='/signup' >新規登録</Link><br />
            </form >
        </div >
    )

}

export default LogIn