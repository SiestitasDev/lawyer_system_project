import './index.css'
import Home from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import System from './pages/System'
import ContentProfile from './components/ContentProfile'
import ContentAppointments from './components/ContentAppointments'
import { ContentLawyers } from './components/ContentLawyers'
import { ContentClients } from './components/ContentClients'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Welcome from './components/Welcome'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/system' element={<PrivateRoute><System /></PrivateRoute>}>
          <Route index element={<Welcome />} />
          <Route path='/system/profile' element={<ContentProfile />} />
          <Route path='/system/appointments' element={<ContentAppointments />} />
          <Route path='/system/lawyers' element={<ContentLawyers />} />
          <Route path='/system/clients' element={<ContentClients />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
