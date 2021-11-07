import React, { useState } from 'react'
import firebaseApp from '../config/firebaseApp'

const Room = () => {
    // const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    return (
        <>
            <h1>Room</h1>
            <ul>
                <li>
                    sample user : sample message
                </li>
            </ul>
            <form>
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