import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Room from './pages/Room'

import { AuthProvider } from './AuthService'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Room />} />
                    <Route path='login' element={<LogIn />} />
                    <Route path='signup' element={<SignUp />} />
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App