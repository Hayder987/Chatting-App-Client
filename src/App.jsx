import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { Toaster } from 'react-hot-toast';
import useAuthContext from './hooks/useAuthContext';

function App() {
  const { authUser } = useAuthContext(); 
  console.log(authUser)
  return (
    <div className='h-screen p-4 flex justify-center items-center'>
      <Routes>
        <Route path='/' element={authUser?<Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
