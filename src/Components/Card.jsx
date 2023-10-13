import React from 'react'

function Card({name,description,due,penalty,date,num,sup}) {
  return (
    <div className='px-4 m-[20px] relative cards max-w-[350px] rounded-lg py-3 border- flex flex-col justify-center flex-wrap'>
     <div className='numbers absolute text-white flex justify-center items-center h-[46px] w-[46px] left-[-20px] top-[-10px] rounded-[10px]'>{num}<sup>{sup}</sup></div>
          <h1 className='font-[700]'>{name}</h1>
          <p className='text-sm'>{description}</p>
          <div className='flex mx-5 my-3 justify-between items-center rounded-lg p-4 h-[95px] bg-[#f4f4f4]'>
            <div className='text-[14px] max-w-[120px]'>
             <h3 className='text-blue-500 font-bold py-1'>Due Date</h3>
             <p className='py-1'>{due}</p>
            </div>
            <div className='text-[14px] px-2'>
             <h3 className='text-[#f66] font-bold py-1'>Penalty fees</h3>
             <p><span className='font-bold underline-offset-1 py-1'>₹{penalty}</span>{date}</p>
            </div>
          </div>
        </div>
  )
}

export default Card