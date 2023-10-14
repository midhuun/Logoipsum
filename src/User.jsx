import  { useContext} from 'react'
import { UserContext } from './Components/UserContext'
import Rectangle from './assets/Rectangle 376.png'
function User() {
    const {wantedData} =useContext(UserContext);
    console.log(wantedData);
    const {name,image,intro,rating,reviewCount,taskComplexity,price,deliveryTime,testimonial} = wantedData;
       
  return (
    <div className='user flex pt-[10%]'>
      <div className=' px-[10%]'>
      <div>
        <h1 className='font-bold text-[35px]'>{name}</h1>
        <p className='pt-[20px] max-w-[510px]'>{intro}</p>
        <div className='flex py-3'>
        <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
       <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="#0076CE"/>
       </svg>
      <p className='px-4 text-blue-500'>{rating}</p>
      <p className='px-2'>({reviewCount})</p>
        </div>
        <div className='rounded-md w-[500px] shadow-lg'>
          <div className='flex justify-between w-[500px] py-3 px-4'>
            <p>{taskComplexity}</p>
            <p className='font-bold'>{price}</p>
          </div>
          <div className='flex px-4'>
          <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="#0076CE"/>
          </svg>
          <p className=''>{deliveryTime}</p>
          </div>
          <div className='flex justify-between'>
            <button className='rounded-md mx-4 my-6 px-[20px] py-[10px] bg-blue-500 text-white'>Request Proposal</button>
            <button className='border-2 border-blue-500 rounded-md mx-4 my-6 px-[20px] py-[10px] text-blue-500'>Chat with me</button>
          </div>
          </div>
          </div>
          <div className='rounded-md my-[50px] w-[500px] shadow-lg'>
        <h1 className='font-bold py-5  px-4 leading-3 text-[35px]'>What People Say?</h1>
        <p className='py-4 px-4'>I cannot express enough gratitude for the support Micheal has provided in managing my personal finances. Their attention to detail and deep understanding of financial markets has ensured that my investments are in safe hands. I highly recommend their services to anyone seeking financial guidance.</p>
      </div>
      </div>
      <div className='px-5'>
        <img src={Rectangle} />
        <h1 className='text-[35px] py-[30px] font-bold'>About Michael Jackson</h1>
      </div>
    </div>
  )
}

export default User