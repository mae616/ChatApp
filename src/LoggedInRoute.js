import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { AuthContext } from './AuthService'

// Routeを拡張する
//* ...rest => 残余引数
//({ element: Element, ...rest })で別名つけれる
// const LoggedInRoute = ({ element, ...rest }) => {
const LoggedInRoute = ({ element }) => {

    const user = useContext(AuthContext)

    if (!user) {
        return <Navigate to='login' replace={true} />
    }

    return (
        { ...element }
    )
}

export default LoggedInRoute