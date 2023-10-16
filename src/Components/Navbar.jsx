import { useState } from 'react';
import Logo from '../assets/logo.png';
import arrow from '../assets/material-symbols_keyboard-arrow-down-rounded.svg'
import { Link } from 'react-router-dom';
function Navbar() {
  const [isClicked,setIsClicked] = useState(false)
  return (
    <>
    <div onClick={()=>setIsClicked(!isClicked)} className='fixed md:hidden top-5 z-[1000] right-5'>
    <div className='menu h-1 w-5 my-1 bg-black rounded-md'></div>
    <div className='menu h-1 w-5 my-1 bg-black rounded-md'></div>
    <div className='menu h-1 w-5 my-1 bg-black rounded-md'></div>
  </div>
    <div className={`fixed ${isClicked?"":"hidden"} md:flex top-0 left-0 w-full z-[900] bg-white shadow-lg justify-around h-[85px]`}>
     <div className='nav bg-white h-screen md:h-full relative flex flex-col md:flex-row w-full md:justify-around items-center p-3'>
        <div className='md:flex'>
        <Link to='/'><img src={Logo} className='w-[138px] cursor-pointer h-[45px] object-cover' /></Link>
        <a onClick={()=>setIsClicked(!isClicked)} className='flex  px-2 md:py-[12px] py-[22px] w-[120px] font-[700]' href='#join'>Solutions <img src={arrow} /></a>
        <a onClick={()=>setIsClicked(!isClicked)} className='flex px-2 md:py-[12px] py-[22px] w-[120px] font-[700]' href='#features'>Feautures <img src={arrow} /></a>
        </div>
        <a onClick={()=>setIsClicked(!isClicked)} className='flex px-2 md:py-[12px]  py-[22px] w-[120px] font-[700]' href='#about'>About <img src={arrow} /></a>
        <div className='flex py-[40px] md:py-0 items-center'>
        <button className='text-blue-500 w-[100px] rounded-md py-[8px] border-blue-500 border-2 mx-3'>Login</button>
          <button className='bg-blue-500 w-[100px] rounded-md py-[8px] border-blue-500 border-2 text-white mx-3'>Register</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Navbar