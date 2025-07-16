import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import heroImg from "../../../img/1.png"
import heroimg1 from "../../../img/1 (1).png"
import Aos from 'aos'
import 'aos/dist/aos.css';


export default function Hero() {
  useEffect(() => {
  Aos.init({
      duration: 1000,
      offset: 120,
      once: false,
    })

  }, [])

  return (
    <section className='pt-[145px] relative pb-[141px]'>
      <img data-aos="fade-down" className='absolute top-[0px] left-[0px]' src={heroImg} alt="" />
      <img data-aos="fade-down" className='absolute top-[0px] right-[0px]' src={heroimg1} alt="" />
      <div className='Container'>
        <div className='flex flex-col items-center justify-center gap-[50px]'>
          <h1 data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className='text-[80px]'>WELCOME</h1>
          <p data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className='text-[23px] w-[518px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <NavLink to={"/contact"}>
            <button data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" className='border-[1px] border-[#F2994A] bg-[#F2994A] px-[30px] py-[5px] rounded-[4px] text-[18px] Satisfy hover:bg-transparent hover:text-[#F2994A] duration-300 '>CONTACT</button>
          </NavLink>
        </div>
      </div>

    </section>

  )
}
