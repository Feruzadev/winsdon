import React from 'react'
import footerlogo from "../../img/wisdom.png"
import telegram from "../../img/image 2.png"
import instagram from "../../img/image 3.png"
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
<footer className='pt-[20px] pb-[59px]'>
  <div className='Container'>
    <div className='flex items-center justify-between'>
      <img  className='w-[150px]' src={footerlogo} alt="footerLogo" />
      <div className='flex items-center gap-[28px]'>
        <img src={telegram} alt="" />
        <img src={instagram} alt="" />
        <div className='w-[2px] h-[50px] bg-[#F2994A]'></div>
        <NavLink to={"/contact"}>
           <button className='border-[1px] border-[#F2994A] bg-[#F2994A] px-[30px] py-[5px] rounded-[4px] text-[18px] Satisfy hover:bg-transparent hover:text-[#F2994A] duration-300 '>CONTACT</button>
        </NavLink>
        
      </div>
    </div>
  </div>
</footer>
  )
}
