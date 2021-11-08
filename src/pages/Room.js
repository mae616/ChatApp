import React, { useState, useEffect, useContext } from 'react'
import firebaseApp from '../config/firebaseApp'
import { AuthContext } from '../AuthService'
import { nanoid } from 'nanoid'

const Room = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')

    const user = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        firebaseApp.firestore().collection('messages')
            .add({
                content: value,
                user: user.displayName
            })
    }

    useEffect(() => {
        firebaseApp.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
            })
    }, [])

    return (
        <>
            <h1>Room</h1>
            <ul>
                {
                    messages.map(message => <li key={nanoid()}>{message.user}: {message.content}</li>)
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type='submit'>送信</button>
            </form>
            <button type='submit' onClick={() => { firebaseApp.auth().signOut() }}>ログアウト</button><br />

        </>
    )
}

export default Room