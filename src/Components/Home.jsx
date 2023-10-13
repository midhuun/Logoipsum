import pc1 from '../assets/Picture.png';
import pc2 from '../assets/Picture (1).png';
import pc3 from '../assets/Picture (2).png';



 export default function Home() {
  return (
    <>
    <div className="home-card relative mt-[80px] md:mt-[150px] p-[30px] flex justify-center  sm:justify-around">
    <div className='flex flex-col justify-center place-items-center items-center'>
    <h1 className='home-h1 lg:text-[65px] text-[25px] sm:text-[40px] font-[700] whitespace-no-wrap lg:leading-[80px]'>Find <span className=''>Partners</span>(CAs) <br/> available online</h1>
    <p className='max-w-[650px] p-4 text-[#616161]'><span className='font-semibold'>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
    <div className='flex justify-center w-full mt-4 sm:h-[55px] h-[35px]'>
        <input className='rounded-[3px] sm:rounded-[10px] border-2 px-4  border-gray-300 w-[85%] text-[12px] sm:text-base' placeholder='Search by name' />
        <button className='rounded-[3px] sm:rounded-[10px] p-4 flex items-center justify-center text-[12px] sm:text-base bg-blue-500 sm:w-[180px] text-white'>Search</button>
    </div>
    </div>
    <div className=' flex-nowrap hidden sm:flex overflow-hidden gap-[11px]'>
     <img src={pc1} className="rounded-md px-3   min-w-[150px] object-cover "/>
     <img src={pc2} className="rounded-md px-3 sm:hidden md:block  min-w-[150px] object-cover transform translate-y-[-65px]"/>
     <img src={pc3} className="rounded-md px-3 sm:hidden min-w-[150px] xl:block object-cover translate-y-[-25px]"/>
    </div>
    </div>
    {/* <svg className='absolute bottom-0 z-[-1] overflow-hidden' xmlns="http://www.w3.org/2000/svg" width="1536" height="210" viewBox="0 0 1536 210" fill="none">
  <path d="M0 210H1536V80.0669V0L0 192.622V210Z" fill="#FAFBFC"/>
</svg> */}
    </>
  )
}
