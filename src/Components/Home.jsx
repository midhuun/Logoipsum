import pc1 from '../assets/Picture.png';
import pc2 from '../assets/Picture (1).png';
import pc3 from '../assets/Picture (2).png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from './UserContext';
 export default function Home() {
   const {searchValue,setSearchValue,results,wantedData,setWantedData} = useContext(UserContext);
   const [isActive,setIsActive] = useState(false);
   const resultArr =Object.values(results);
  return (
    <>
    <div id='home' className="home-card relative mt-[80px] md:mt-[150px] p-[30px] flex justify-center  sm:justify-around">
    <div className='flex flex-col justify-center place-items-center items-center'>
    <h1 className='home-h1 lg:text-[65px] text-[25px] sm:text-[40px] font-[700] whitespace-no-wrap lg:leading-[80px]'>Find <span className=''>Partners</span>(CAs) <br/> available online</h1>
    <p className='max-w-[650px] p-4 text-[#616161]'><span className='font-semibold'>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
    <div className='flex  justify-center w-full mt-4 sm:h-[55px] h-[35px]'>
       <div className='relative rounded-[3px] w-[85%] h-[60px] sm:rounded-[10px]  '>
       <div className={`absolute results ${isActive?"":"hidden"} shadow-lg bg-white z-[900]  top-[60px] left-0 min-h-[70px] w-full rounded-md`}>
       <div className='pt-[20px] px-[50px]'>
       {resultArr.length>0?resultArr.map((obj)=>{
        return (
          <>
          <Link to='/user' className='my-3 flex flex-col leading-[50px] cursor-pointer' onClick={()=>setWantedData(obj)} key={obj.id}>{obj.name}</Link>
          <hr key={obj.id}/>
          </>
        )
       }):<p>No Matches Found!!</p>}
       </div>
       </div>
       <input onClick={()=>setIsActive(!isActive)}  className='rounded-[3px] group w-full h-[35px] md:h-full  sm:rounded-[10px] border-2 px-4  search-input border-gray-300  text-[12px] sm:text-base' onChange={((e)=>setSearchValue(e.target.value))} placeholder='Search by name' /></div>
        <Link to="/user" className='rounded-[3px] sm:rounded-[10px] p-4 flex items-center justify-center text-[12px] sm:text-base bg-blue-500 sm:w-[180px] text-white'>Search</Link>
    </div>
    </div>
    <div className=' flex-nowrap hidden sm:flex overflow-hidden gap-[11px]'>
     <img src={pc1} className="rounded-md px-3   min-w-[150px] object-cover "/>
     <img src={pc2} className="rounded-md px-3 sm:hidden md:block  min-w-[150px] object-cover transform translate-y-[-65px]"/>
     <img src={pc3} className="rounded-md px-3 sm:hidden min-w-[150px] xl:block object-cover translate-y-[-25px]"/>
    </div>
    </div>
    
    </>
  )
}
