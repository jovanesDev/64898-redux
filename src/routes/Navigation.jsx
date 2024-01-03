import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../screen/Home'
import Counter from '../screen/Counter'
import Navbar from '../components/Navbar'
import Users from '../screen/Users'
import User from '../screen/User'


const Navigation = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/user/:id' element={<User/>} />
        </Routes>
    </Router>
  )
}

export default Navigation
