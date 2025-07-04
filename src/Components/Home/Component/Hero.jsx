import React from 'react'
import { NavLink } from 'react-router-dom'
import heroImg from "../../../img/1.png"
import heroimg1 from "../../../img/1 (1).png"

export default function Hero() {
  return (
    <section className='pt-[145px] relative pb-[141px]'>
      <img className='absolute top-[0px] left-[0px]' src={heroImg} alt="" />
      <img className='absolute top-[0px] right-[0px]'src={heroimg1} alt="" />
      <div className='Container'>
        <div className='flex flex-col items-center justify-center gap-[50px]'>
          <h1 className='text-[80px]'>WELCOME</h1>
          <p className='text-[23px] w-[518px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <NavLink to={"/contact"}>
            <button className='border-[1px] border-[#F2994A] bg-[#F2994A] px-[30px] py-[5px] rounded-[4px] text-[18px] Satisfy hover:bg-transparent hover:text-[#F2994A] duration-300 '>CONTACT</button>
          </NavLink>
        </div>
      </div>

    </section>

  )
}
