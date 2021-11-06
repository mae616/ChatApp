import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from './AuthService'

// Routeを拡張する
//* ...rest => 残余引数
//({ element: Element, ...rest })で別名つけれる
// const LoggedInRoute = ({ element, ...rest }) => {
const LoggedInRoute = ({ element }) => {
    const user = useContext(AuthContext)

    console.log('ああああLoggedInRoute実行！ user:' + user)

    console.log('element' + element)

    let navigate = useNavigate();

    useEffect(() => {

        if (!user) {
            console.log("LoggedInRouteのuseEffect");
            console.log('loginにとばせー')
            navigate("login", { replace: true });
        }
    })

    return (
        { ...element }
        // <Route
        //     {...rest}
        //     element={
        //         //* ログインしていればelementを描写
        //         //* ログインしていなければ、'/login'にリダイレクト
        //         user ? (
        //             element
        //         ) : (
        //             <Navigate to='/login' replace={true} />
        //         )

        //         // Router(v5)の書き方
        //         // (routeProps)=>{
        //         //     user ?(
        //         //         <Element {...routeProps}
        //         //     ):(
        //         //         <Redirect to='/login'
        //         //     )
        //         // }
        //     }
        // />
    )
}

export default LoggedInRoute