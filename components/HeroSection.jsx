'use client';

import React, { useEffect, useState } from 'react'


const HeroSection = () => {

  const slides = [
    { first: 'Brand Management Strategy', second: 'STAY Ahead. STAY Visible.', third: 'Empowering Business to shine Across Africa and Beyond.' },
    { first: 'Content Strategy', second: 'Engage Your Audience.', third: 'Empowering Business to shine Across Africa and Beyond.' },
    { first: 'Experiential Marketing', second: ("Gain  Marketshare"), third: 'Fering Business to shine Across Africa and Beyond.' },
  ]

  // Add backgrounds for each slide (use public path for Next.js static assets)
  const bgImages = [
    '/image/herosection1.png',
    '/image/herosection2.png',
    '/image/herosection3.png',
  ]

  // index of active slide
  const [current, setCurrent] = useState(0)

  // Change slide every 5s (matches 15s CSS cycle / 3 images = 5s each)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((s) => (s + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <>

      <div
        className="hero "
        style={{
          backgroundImage: `url(${bgImages[current]})`,
        }}
      >
        <div className=" text-[12px] md:text-[16px] w-5/6 h-5/6 flex flex-col justify-end  items-start " aria-live="polite" aria-atomic="true">
          <div className={`text transition-opacity duration-700 bg-[#42312b8e]   shadow rounded-lg p-3 w-fit
             text-[#D42E22] ${true ? 'opacity-100' : 'opacity-0'} `}>
            {slides[current].first}
          </div>
          <div className={`text  text-[30px] md:text-[70px] transition-opacity duration-700 delay-75 w-3/5 md:w-2/5 leading-none text-gray-50 ${true ? 'opacity-100' : 'opacity-0'}`}>
            {slides[current].second}
          </div>
          <div className={`text w-fit text-[#808080] transition-opacity duration-700 delay-150 ${true ? 'opacity-100' : 'opacity-0'}`}>
            {slides[current].third}
          </div>
          <div className="btn bg-[#D42E22] rounded-md ">Learn More</div>
        </div>
        {/* simple indicators so user can jump to a slide */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            // className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroSection