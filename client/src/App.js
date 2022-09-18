import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import SignUpScreen from './screens/SignUpScreen';
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const[user, setUser]= useState(null);
  return (
    <Router>
      <Navbar user={user} setUser={setUser}></Navbar>
      <main className='py-3'>
        <div>
          <Routes>
            <Route path='/' element={<HomeScreen user={user}/> } exact></Route>
            <Route path='/signin' element={<AuthScreen setUser={setUser}></AuthScreen>}></Route>
            <Route path='/signup' element={<SignUpScreen></SignUpScreen>}></Route>
          </Routes>
        </div>
      </main>
      <Toaster position='top-center' toastOptions={{duration:2000}}></Toaster>
    </Router>
  );
}

export default App;
