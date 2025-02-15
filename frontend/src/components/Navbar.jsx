import React from 'react'
import { ShoppingCart,UserPlus,LogIn,LogOut,Lock } from 'lucide-react';
import {Link} from "react-router-dom";
import { useUserStore } from '../stores/useUserStore';

const Navbar = () => {
    const {user,logout}=useUserStore();
    const isAdmin = user?.role === "admin";
  return (
    <header className= 'fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-white'>
        <div className= 'container mx-auto px-4 py-3'>
            <div className='flex flex-wrap justify-between items-center'>
            <Link to='/' className='text-2xl font-bold text-black items-center space-x-2 flex'>
            Blue Honey
            </Link>
            <nav className='flex flex-wrap items-center gap-4  '>
                {/* <Link to={"/"} className='text-black hover:text-neutral-500 transition duration-300 ease-in-out'>
                Home</Link> */}
                {user && (
                    <Link to={"/cart"} className='relative group text-black hover:text-neutral-500 transition duration-300 ease-in-out'>
                        <ShoppingCart className='inline-block mr-1 group-hover:text-neutral-500' size={20} />
                        <span className='hidden sm:inline'>Cart</span>
                        <span className='absolute -top-2 -left-2 bg-black text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-neutral-500 transition duration-300 ease-in-out'>
                            3
                        </span>
                    </Link>
                )}
                {isAdmin && (
                    <Link className='bg-black hover:bg-neutral-500 text-white px-3 py-1 rounded-md font-medium flex items-center'
                    to={"/secret-dashboard"}
                    >
                    <Lock className='inline-block mr-1' size={18} />
                    <span className='hidden sm:inline'>Dashboard</span>
                    </Link>
                )}

                {user ? (
                    <button className='bg-black hover:bg-neutral-500 text-white px-2 py-1 rounded-md flex items-center transition duration-300 ease-in-out' onClick = {logout}>
                        <LogOut size={18} />
                        <span className='hidden sm:inline mr-2'>Log Out</span>
                    </button>
                ) : (
                    <>
                    <Link 
                    to={"/signup"} 
                    className='bg-black hover:bg-neutral-500 text-white px-2 py-1 rounded-md flex items-center transition duration-300 ease-in-out'>
                    <UserPlus className='mr-2' size={18}/>
                    Sign Up
                    </Link>
                    <Link 
                    to={"/login"} 
                    className='bg-black hover:bg-neutral-500 text-white px-2 py-1 rounded-md flex items-center transition duration-300 ease-in-out'>
                    <LogIn className='mr-2' size={18}/>
                    Login
                    </Link>
                    </>
                )}
            </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar