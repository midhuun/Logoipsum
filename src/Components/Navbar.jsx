import React from 'react'
import Logo from '../assets/logo.png';
import arrow from '../assets/material-symbols_keyboard-arrow-down-rounded.svg'
function Navbar() {
  return (
  
    <div className=' fixed top-0 left-0 w-full z-[1000] bg-white shadow-lg justify-around h-[85px]'>
     <div className='nav relative flex w-full justify-around items-center p-3'>
        <div className='flex'>
        <img src={Logo} className='w-[138px] h-[45px] object-cover' />
        <a className='flex px-2 py-[12px] font-[700]' href=''>Solutions <img src={arrow} /></a>
        <a className='flex px-2 py-[12px] font-[700]' href=''>Feautures <img src={arrow} /></a>
        </div>
        <a className='flex px-2 py-[12px] font-[700]' href=''>About <img src={arrow} /></a>
        <div className='flex items-center'>
        <button className='text-blue-500 w-[100px] rounded-md py-[8px] border-blue-500 border-2 mx-3'>Login</button>
          <button className='bg-blue-500 w-[100px] rounded-md py-[8px] border-blue-500 border-2 text-white mx-3'>Register</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar