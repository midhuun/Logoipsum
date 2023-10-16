import React from 'react'
import one from './assets/!st.png';
import two from './assets/2nd.png';
import three from './assets/3rd.png';
import four from './assets/4th.png';
import five from './assets/5th.png';
import person from './assets/Pexels Photo by Charlotte May.png';
import female from './assets/person-2.png';
import search from './assets/icon-park-twotone_search.svg';
import enquire from './assets/icon-park-twotone_enquire.svg';
import note from './assets/icon-park-twotone_table-report.svg'
import hat from './assets/icon-park-twotone_degree-hat.svg';

function Features() {
  return (
    <div id='features' className='pt-[100px]  flex justify-center text-center'>
    <div className='flex'>
      <div className=''>
       <h1 className='font-[700] text-[25px] whitespace-nowrap text-left md:text-[60px] join-h1 px-4'><span>All-in-One </span>platform<br/>that Makes Easier</h1>
       <p className='py-2 px-3 text-lg max-w-[500px] text-left'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
       <div className='flex flex-col sm:flex-row items-center pt-[100px] '>
       <img className='px-4' src={search}/>
       <p className='w-[200px] text-left'><span className='font-bold'>SEARCH</span> for vital company information</p>
       <img className='px-4 mt-[100px] sm:mt-0' src={enquire}/>
       <p className='w-[200px] text-left'><span className='font-bold'>CONNECT </span>with the resources to meet your business needs</p>
       </div>
       <div className='flex flex-col sm:flex-row items-center pt-[100px] py-7'>
       <img className='px-4 ' src={note}/>
       <p className='w-[200px] text-left'><span className='font-bold'>RESEARCH </span>and generate reports that drive growth</p>
       <img className='px-4 mt-[100px] sm:mt-0' src={hat}/>
       <p className='w-[200px] text-left'><span className='font-bold'>ACADEMY</span> to give you the skills for success in your career</p>
       </div>
       </div>
       <div className='lg:flex hidden mx-10 flex-col items-end'>
        <img className='py-2 px-4 w-[246px]' src={one}/>
        <img className='py-2 px-4 w-[282px]' src={two}/>
        <img className='py-2 px-4 w-[300px]' src={three}/>
        <img className='py-2 mt-[15px] px-4 w-[310px]' src={four}/>
        <img className='py-2 px-4 w-[110px]' src={five}/>
        <img  className=' px-4' src={female} />
       </div>
        <img className='hidden lg:block object-cover h-[330px] w-[280px]' src={person}></img>
       </div>
    </div>
  )
}

export default Features