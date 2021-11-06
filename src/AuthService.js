import React, { useState, useEffect } from 'react'
import firebaseApp from "./config/firebaseApp"

const AuthContext = React.createContext()

// provider => コンテキストで渡したい値を指定するもの
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    console.log('あああAuthProvider実行！')

    //* useEffect
    //* DOMの操作 => レンダリングが終わらないとDOMが存在しないので、操作しようがない...
    //* 外部APIとの通信 => レンダリングとは関係ない...
    //*   （コンポーネントはレンダリングと関係あるものを書くので、括り出す。不具合とかが影響しなくなる。分離する）

    // レンダリングの後に実行する（遅延実行）

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(setUser)
        // 同じ↑
        // firebaseApp.auth().onAuthStateChanged(user => {
        //     setUser(user)
        // })
    }, [])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider,
    AuthContext
}