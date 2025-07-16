import React, { useEffect } from 'react'
import mainstar1 from "../../../img/Group 9.png"
import mainStar2 from "../../../img/Group 10.png"
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function MainSection() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 120,
      once: false,
    });
  }, []);


  return (
    <section className='pt-[400px] pb-[430px] relative overflow-hidden'>
      <img data-aos="fade-up-right" data-aos-easing="linear"
        data-aos-duration="1000" className='absolute bottom-[0px] left-[0px]' src={mainstar1} alt="" />
      <img data-aos="fade-down-left" data-aos-easing="linear"
        data-aos-duration="1000" className='absolute top-[0px] right-[0px]' src={mainStar2} alt="" />
      <div className='Container'>
        <div className='flex items-center justify-center'>
          <h1 data-aos="flip-down" className='text-[50px] Satisfy'>NO RASK NO STROY </h1>
        </div>
      </div>
    </section>
  )
}
