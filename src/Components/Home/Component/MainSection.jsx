import React from 'react'
import mainstar1 from "../../../img/Group 9.png"
import mainStar2 from "../../../img/Group 10.png"


export default function MainSection() {
  return (
    <section className='pt-[330px] pb-[430px] relative'>
        <img  className='absolute bottom-[0px] left-[0px]' src={mainstar1} alt="" />
        <img  className='absolute top-[-100px] right-[0px]' src={mainStar2} alt="" />
        <div className='Container'>
            <div className='flex items-center justify-center'>
                <h1 className='text-[50px] Satisfy'>NO RASK NO STROY </h1>
            </div>
        </div>
    </section>
  )
}
