import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div className='flex w-full items-start justify-between gap-8 mt-12 px-36'>
    <div>
      <Image
      src="/icon/logo.svg"
          alt=""
          width={91}
          height={26}
          className="flex-shrink-0 rounded-[40px]" />

     <div className='w-[350px] leading-snug mt-4 text-[14px] text-[#808080]'>At MediaFlare, we have developed a simple, media-neutral approach that will handle all the planning, production, distribution, amplification and measurement of your content so we can continuously improve your results.</div>
    </div>

    <div className='ml-90'>
      <div className='text-[16px] text-[#808080]'>Quick Information</div>
      <div className='text-[141414] font-medium mt-4'>OUR SERVICES
      <div>OUR TEAM</div>
      <div>OUR WORK</div>
      <div>CONTACT US</div>
    </div>
    </div>

    <div>
      <div className='text-[16px] text-[#808080]'>Follow</div>
      <div className='flex flex-row gap-7 mt-4'>
        <Image
      src="/icon/instagram.svg"
          alt=""
          width={16}
          height={16}
          className="flex-shrink-0 rounded-[40px]" />

          <Image
      src="/icon/facebook.svg"
          alt=""
          width={16}
          height={16}
          className="flex-shrink-0 rounded-[40px]" />

          <Image
      src="/icon/twitter.svg"
          alt=""
          width={16}
          height={16}
          className="flex-shrink-0 rounded-[40px]" />
      </div>
    </div>

    </div>
    </>
  )
}

export default Footer