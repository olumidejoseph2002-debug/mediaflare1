import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <main >
      <div className='w-full mx-auto mt-10 '>
      
      {/* About Us Badge */}
      <div className='bg-[#ffa07a3c] flex justify-center items-center p-1 mx-auto w-[111px] h-[29px] rounded-lg my-6'>
        <div className='text-[16px] text-[#D42E22]'>About Us</div>
      </div>

      {/* Image + Text Side-by-Side */}
      <div className='grid grid-cols-1  lg:grid-cols-2 w-full items-start justify-between px-25 gap-30 mt-12'>
        
        {/* Image */}
        <Image 
          src="/image/aboutus1.png"
          alt=""
          width={570}
          height={500}
          className="flex-shrink-0 order-2 lg:order-1"
        />

        {/* Text Section */}
        <div className="max-w-md mx-auto order-1 lg:order-2 mt-10">
          
          <div className="text-[32px] font-semibold text-[#141414]">
            Who We Are
          </div>

          <div className='text-[18px] font-medium text-[#D42E22] mt-2'>
            With Fire, Or Not At All...
          </div>

          <div className='mt-10 text-[18px] leading-relaxed text-[#808080]'>
            A content company established in 2014, comprised of a team of imaginative and deeply inspired people, 
            propelled by passion for smart solutions for smart brands and businesses.
          </div>

          <div className='mt-4 text-[18px] leading-relaxed text-[#808080]'>
            We take a media-neutral, customer-centric approach to solving communications problems, 
            helping brands get the best fusion of tech and marketing they need in this fast-paced, trend-driven world.
          </div>

        </div>
      </div>




      {/* Image + Text Side-by-Side */}
      <div className='grid  grid-cols-1 lg:grid-cols-2 items-start justify-between px-25  mt-12'>
        
        {/* Image */}
        <Image 
          src="/image/aboutus2.png"
          alt=""
          width={570}
          height={500}
          className="flex-shrink-0 order-2 rounded-[40px]"
        />

        {/* Text Section */}
        <div className="max-w-md order-1 mx-auto mt-10">
          
          <div className="text-[32px] font-semibold text-[#141414]">
            What We Do
          </div>

          <div className='text-[18px] font-medium text-[#D42E22] mt-2'>
            We Develop Big Ideas That Sell
          </div>

          <div className='mt-10 text-[15px] leading-relaxed text-[#808080]'>
            In this brave new world, businesses that want to survive and stay relevant in their respective markets have to be present in the lives of the customer at all times.
          </div>

          <div className='mt-4 text-[15px] leading-relaxed text-[#808080]'>
            At MediaFlare, we have developed a simple, media-neutral approach that will handle all the planning, production, distribution, amplification and measurement of your content so you can continuously improve your results.
          </div>

        </div>
      </div>
      </div>
    </main>
  )
}

export default About
