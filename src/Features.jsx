import React from 'react'
import one from './assets/!st.png';
import two from './assets/2nd.png';
import three from './assets/3rd.png';
import four from './assets/4th.png';
import five from './assets/5th.png';
import person from './assets/Pexels Photo by Charlotte May.png';
import female from './assets/person-2.png';
function Features() {
  return (
    <div className='pt-[100px] flex justify-center text-center'>
    <div className='flex'>
      <div>
       <h1 className='font-[700] text-[60px] join-h1 px-4'><span>All-in-One </span>platform<br/>that Makes Easier</h1>
       <p className='py-2 px-3 text-lg max-w-[500px] text-left'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
       </div>
       <div className='flex flex-col items-end'>
        <img className='py-2 px-4 w-[246px]' src={one}/>
        <img className='py-2 px-4 w-[282px]' src={two}/>
        <img className='py-2 px-4 w-[300px]' src={three}/>
        <img className='py-2 mt-[15px] px-4 w-[310px]' src={four}/>
        <img className='py-2 px-4 w-[110px]' src={five}/>
        <img  className=' px-4' src={female} />
       </div>
        <img className='object-cover h-[330px] w-[280px]' src={person}></img>
       </div>
    </div>
  )
}

export default Features