
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

function App() {


  return (
    <div className='h-screen p-4 flex justify-center items-center'>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
     </Routes>
    </div>
  )
}

export default App
