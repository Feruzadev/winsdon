import React from 'react'
import logo from "../../img/wisdom.png"
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
   <header className='pt-[35px]'>
    <div className='Container'>
        <div className='flex items-center justify-between'>
            <img className='w-[150px]' src={logo} alt="imglogo" />
            <div className='flex items-center gap-[20px]'>
                <button className='border-[1px] border-[#F2994A] px-[23px] py-[8px] rounded-[4px] Rubik text-[#F2994A] text-[12px]'>LANGUAGE</button>
                <div className='w-[2px] h-[50px] bg-[#F2994A]'>
                </div>
                <NavLink to={"/contact"}>
                     <button className='border-[1px] border-[#F2994A] bg-[#F2994A] px-[30px] py-[5px] rounded-[4px] text-[18px] Satisfy hover:bg-transparent hover:text-[#F2994A] duration-300 '>CONTACT</button>
                </NavLink>
               
            </div>

        </div>
    </div>
   </header>
  )
}


