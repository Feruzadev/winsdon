import React from 'react'
import herostar from "../../../img/1 (1).png"
import herostar1 from "../../../img/1.png"

export default function ContactHero() {
  return (
    <section className='pt-[111px] relative'>
      <img  className='absolute top-[20px] left-[0px]' src={herostar} alt="" />
      <img className='absolute top-[20px] right-[0px]' src={herostar1} alt="" />
      <div className='Container'>
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <h1 className='text-[80px]'>CONTACT</h1>
          <div className='w-[186px] h-[2px] bg-[white] mb-[5px]'></div>
          <p className='text-[30px]'>NAME</p>
          <input className='w-[450px] h-[36px] rounded-[30px] mb-[98px] ' type="text" />
          <p className='text-[30px]'>INFO</p>
          <textarea className='w-[440px] h-[151px] rounded-[30px] mb-[36px]'></textarea>
           <button className='border-[1px] border-[#F2994A] bg-[#F2994A] px-[30px] py-[5px] rounded-[4px] text-[18px] Satisfy hover:bg-transparent hover:text-[#F2994A] duration-300 mb-[134px] '>SEND</button>

          
        </div>
      </div>
    </section>
  )
}
