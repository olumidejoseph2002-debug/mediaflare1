import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div className='flex w-full items-start justify-between gap-8 mt-12'>
    <div>
      <Image />

     <div>At MediaFlare, we have developed a simple, media-neutral approach that will handle all the planning, production, distribution, amplification and measurement of your content so we can continuously improve your results.</div>
    </div>

    <div>
      <div>Quick Information</div>
      <div>OUR SERVICES</div>
      <div>OUR TEAM</div>
      <div>OUR WORK</div>
      <div>CONTACT US</div>
    </div>

    <div>
      <div>Follow</div>
    </div>

    </div>
    </>
  )
}

export default Footer