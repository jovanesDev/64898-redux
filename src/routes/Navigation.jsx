import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../screen/Home'
import Counter from '../screen/Counter'
import Navbar from '../components/Navbar'


const Navigation = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/counter' element={<Counter/>} />
        </Routes>
    </Router>
  )
}

export default Navigation
