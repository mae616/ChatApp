import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Room from './pages/Room'
import LoggedInRoute from './LoggedInRoute'

import { AuthProvider } from './AuthService'

import {
    BrowserRouter as Router,
    Routes,
    Route
    // Navigate
} from 'react-router-dom'

const App = () => {
    console.log('App実行！')

    return (
        // <Router>
        //     <Routes>
        //         <Navigate to='aaa' replace={true} />
        //     </Routes>
        // </Router>
        <AuthProvider>
            <Router>
                <Routes>
                    <LogIn />
                    {/* <Routes>
                    {/* <LogIn />
                    <LoggedInRoute path='/' element={<Room />} /> */}
                    <Route path='/' element={<LoggedInRoute element={<Room />} />} />
                    <Route path='login' element={<LogIn />} />
                    <Route path='signup' element={<SignUp />} />
                </Routes>
            </Router>
        </AuthProvider >
    )
}

export default App