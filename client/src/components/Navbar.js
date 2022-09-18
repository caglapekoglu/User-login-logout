import React,{useState, useEffect} from 'react';
import {MenuIcon,XIcon} from '@heroicons/react/outline';
import { Link } from "react-router-dom"
import '../index.css';
const Navbar = ({ user, setUser }) => {
const [nav,setNav] = useState(false)
const handleClick = ()=> setNav(!nav)
const handleClose=()=> setNav(!nav)
useEffect(() => {
  if (localStorage.getItem("user") && !user) {
    setUser(JSON.parse(localStorage.getItem("user")));
  }
}, [user]);
  return (
    <div className='w-screen h-[80px] z-10 bg-[#F7F749] text-black fixed drop-shadow-lg '> 
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='pl-5 flex items-center'>
                <ul className='hidden md:flex gap-x-4'>
                
                    <li className='cursor-pointer'><Link to="home" duration={500}>Home</Link></li>
                    <li className='cursor-pointer'><Link to="about" offset={-200} duration={500}>Shop</Link></li>
                    <li className='cursor-pointer'><Link to="support" offset={-50} duration={500}>About</Link></li>
                    <li className='cursor-pointer'><Link to="pricing" offset={-50} duration={500}>Contact</Link></li>
                </ul>
            </div>
            <div>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Roacure</h1>
            </div>
            <div>
            <div className='hidden mr-4 md:flex pr-4'>
                
                {/*<button className='px-8 py-3 text-white'> <Link className='text-white' to="/signup">Sign Up</Link> </button>*/}
                {user ? (
          <button
            variant="outline-light"
            onClick={(e) => {
              localStorage.removeItem("user");
              setUser(null);
            }}
          >
            {" "}Log out{" "}
          </button>
        ) : (
          <div className='flex'>
            <button className='border-none bg-transparent text-black mr-4'><Link to="/signin">Sign In</Link></button>
            <button className='px-8 py-3 text-white'> <Link className='text-white' to="/signup">Sign Up</Link> </button>
          </div>
          
        )}
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5'/>: <XIcon className='w-5'/> }
            
            </div>
            </div>
        </div>
        
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full x-8'} >
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" duration={500}>Home</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" offset={-200} duration={500}>Shop</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" offset={-50} duration={500}>About</Link></li>
            <li className='border-b-2 border-zinc-300 w-f ull'><Link onClick={handleClose} to="platforms" offset={-100} duration={500}>Contact</Link></li>
            <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='py-3 px-8'>Sign Up</button>
        </div>
        </ul>
       
    </div>
  )}


export default Navbar