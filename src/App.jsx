import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'


function App() {


  return (
    <div className='font-fig'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
     
    </div>
  )
}

export default App
