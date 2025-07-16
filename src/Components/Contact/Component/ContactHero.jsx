import React, { useEffect } from 'react'
import herostar from "../../../img/1 (1).png"
import herostar1 from "../../../img/1.png"
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function ContactHero() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 120,
      once: false,
    })

  }, [])
  return (
    <section className='pt-[111px] relative'>
      <img data-aos="fade-down" className='absolute top-[20px] left-[0px]' src={herostar} alt="" />
      <img data-aos="fade-down" className='absolute top-[20px] right-[0px]' src={herostar1} alt="" />
      <div className='Container'>
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <h1 data-aos="zoom-in-down" className='text-[80px]'>CONTACT</h1>
          <div data-aos="zoom-out-up" className='w-[186px] h-[2px] bg-[white] mb-[5px]'></div>
          <p data-aos="fade-up"
            data-aos-duration="3000" className='text-[30px]'>NAME</p>
          <input data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000" className='w-[450px] h-[36px] rounded-[30px] mb-[98px] ' type="text" />
          <p data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className='text-[30px]'>INFO</p>
          <textarea data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"className='w-[440px] h-[151px] rounded-[30px] mb-[36px]'></textarea>
          <button data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" className='border-[1px] border-[#F2994A] bg-[#F2994A] px-[30px] py-[5px] rounded-[4px] text-[18px] Satisfy hover:bg-transparent hover:text-[#F2994A] duration-300 mb-[134px] '>SEND</button>


        </div>
      </div>
    </section>
  )
}
