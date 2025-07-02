"use client"
import { ParaAnim, TitleAnim } from '@/lib/gsapAnimations';
import React from 'react'


const Whyus = () => {
  TitleAnim()
  ParaAnim()
  return (
    <section className='w-full h-full'>
      <div className="w-[80%] h-full mx-auto py-[10%] tablet:py-[15%] tablet:w-[85%] mobile:py-[20%]">
        <div className='flex justify-between items-start gap-[5vw] tablet:flex-col'>
          <div>
            <h2 className='text-black2 text-[5vw] font-heading font-medium tablet:text-[7vw] mobile:text-[10vw] title-anim'>
              <span className='stroke'>why{" "}</span>us.
            </h2>
          </div>
          <div className='w-[65%] mt-[10%] space-y-[5%] tablet:mt-0 tablet:w-full text-justify mobile:space-y-[10%]'>
            <p className='text-[2vw] leading-[1.5] font-medium para-anim tablet:text-[4vw] mobile:text-[5vw]'>
              We have been asked this question like a zillion times - How are you different from the other agencies out there. Well, the truth is that we were “Born Different”.
            </p>
            <p className='text-[2vw] leading-[1.5] font-medium para-anim tablet:text-[4vw] mobile:text-[5vw]'>
              We see the bigger picture, we are ambitious, we set the bar high in all facets of our work, we love what we do and most importantly, we were not made for the overpopulated plains of mediocrity. Swayed already? 😏 But we&apos;ve got a few more reasons for why you&apos;d want to work with us:
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whyus;