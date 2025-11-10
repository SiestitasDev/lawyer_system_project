import './index.css'
import Home from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Booking } from './pages/Booking'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/booking' element={<PrivateRoute><Booking /></PrivateRoute>} />
      </Routes>
    </Router>
  )
}

export default App
