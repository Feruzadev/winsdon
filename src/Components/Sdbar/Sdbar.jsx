import React from 'react'
import sdlogo from "../../img/wisdom22.png"
import { IoIosHome } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

export default function Sdbar() {
  return (
    <div className='w-[300px] h-[660px] rounded-[15px] my-[30px] mx-[30px] shadow-black bg-gradient-to-br from-[#3B1D60] via-[#0F1145] to-[#040D3E] min-h-screen text-white'>
      <div className='mx-[15px] my-[15px] bg-white p-4 rounded-lg shadow-md'>
        <img className='w-[150px]' src={sdlogo} alt="sdlogo" />
      </div>
      <p className='mx-[15px] mt-[25px]' >ASOSIY</p>

      <div className='flex flex-col items-start justify-center gap-[20px] mx-[15px] mt-[20px]'>
        <div className='flex items-center justify-center border-[1px] border-transparent bg-transparent hover:bg-[white] duration-300 rounded-[10px]'>
          <IoIosHome/> <button className=' text-[white] px-[15px] py-[5px] rounded-[4px] text-[18px] hover:text-[#0F1145]' >BOSH SAHIFA</button>
        </div>
        <div className='flex items-center justify-center border-[1px] border-transparent bg-transparent hover:bg-[white] duration-300 rounded-[10px]'>
          <IoMdContact /> <button  className=' text-[white] px-[15px] py-[5px] rounded-[4px] text-[18px] hover:text-[#0F1145]'>CONTACT</button>
        </div>

        
      </div>


    </div>
  )
}
