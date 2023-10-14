import React, { useContext, useEffect } from 'react'
import { UserContext } from './Components/UserContext'
function User() {
    const {data,wantedData} =useContext(UserContext);
    console.log(wantedData);
    const {name,image,intro,rating,reviewCount,taskComplexity,price,deliveryTime,testimonial} = wantedData;
       
  return (
    <div className='user'>
      <div className='flex px-[10%]'>
      <div>
        <h1 className='font-bold'>{name}</h1>
        <p className='pt-[20px] max-w-[510px]'>{intro}</p>
        </div>
      </div>
    </div>
  )
}

export default User