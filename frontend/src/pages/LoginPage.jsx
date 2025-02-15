import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { LogIn, Mail, Lock, Loader, ArrowRight} from 'lucide-react';
import { motion } from 'framer-motion';
import { useUserStore } from '../stores/useUserStore';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {login,loading} = useUserStore();
    const handelSubmit = (e) => {
        e.preventDefault();
        login(email,password);
    }
    return (
    <div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <motion.div
        className='sm:mx-auto sm:w-full sm:max-w-md'
        initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8,delay:0.2}}
        >
            <h2 className='mt-6 text-center text-3xl font-extrabold text-black'>Create your Account</h2>
        </motion.div>
        <motion.div
        className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8,delay:0.2}}
        >
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                <form onSubmit={handelSubmit} className='space-y-6'>
                    <div>
                        <label htmlFor='email' className='block text-sm font-medium text-black'>
                            Email Address
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm flex items-center'>
                            <div className='absolute insert-y-0 left-0 pl-3 flex items-center pointer-events-none '>
                                <Mail className='h-5 w-5  text-gray-500 ' aria-hidden='true' />
                            </div>
                            <input
                            id='email'
                            type='email'
                            required value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='block w-full px-3 py-2 pl-10 bg-grey-700 border border-grey-600 rounded-md shadow-sm placeholder-grey-500 focus:outline-none focus ring-grey-500 focus:border-grey-500 sm:text-sm'
                            placeholder='xyz@example.com'
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='password' className='block text-sm font-medium text-black'>
                            Password
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm flex items-center'>
                            <div className='absolute insert-y-0 left-0 pl-3 flex items-center pointer-events-none '>
                                <Lock className='h-5 w-5  text-gray-500 ' aria-hidden='true' />
                            </div>
                            <input
                            id='password'
                            type='password'
                            required value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='block w-full px-3 py-2 pl-10 bg-grey-700 border border-grey-600 rounded-md shadow-sm placeholder-grey-500 focus:outline-none focus ring-grey-500 focus:border-grey-500 sm:text-sm'
                            placeholder='******'
                            />
                        </div>
                    </div>

                    <button 
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-neutral-600 transition duration-150 ease-in-out disabled:opacity-50'
                    disabled={loading}
                    >
                        {loading ? (
                            <>
                            <Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true'/>
                            Loading
                            </>
                        ) : (
                            <>
                            <LogIn className='mr-2 h-5 w-5' aria-hidden='true'/>
                            Login
                            </>
                        )}
                    </button>
                </form>
                
                <p className='mt-8 text-center text-sm text-black'> 
                    Don't have an account?{" "} 
                    <Link to='/signup' className='font-medium text-black hover:text-neutral-500'>
                    Sign Up now <ArrowRight className='inline h-4 w-4' />
                    </Link>
                </p>

            </div>
        </motion.div>
    </div>
  )
};

export default LoginPage;