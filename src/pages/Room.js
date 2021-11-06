import React from 'react'
import firebaseApp from '../config/firebaseApp'

const Room = () => {

    console.log("Roomだー");

    const handleLogout = () => {
        firebaseApp.auth().onAuthStateChanged((user) => {
            firebaseApp.auth().signOut().then(() => {
                console.log("ログアウトしました");
            }).catch(err => { console.log(err) });
        })
    }

    return (
        <>
            <button type='submit' onClick={handleLogout}>ログアウト</button><br />
            <h1>Room</h1>

        </>
    )
}

export default Room