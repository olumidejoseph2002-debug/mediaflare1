import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <main>
      <div className='w-full mx-auto '>
      
      {/* About Us Badge */}
      <div className='bg-red-100 flex justify-center items-center p-1 mx-auto w-[120px] rounded-lg my-6'>
        <div className='text-base text-red-700'>About Us</div>
      </div>

      {/* Image + Text Side-by-Side */}
      <div className='flex w-full items-start justify-between px-25 gap-4 mt-12'>
        
        {/* Image */}
        <Image 
          src="/image/aboutus1.png"
          alt=""
          width={580}
          height={580}
          className="flex-shrink-0"
        />

        {/* Text Section */}
        <div className="max-w-md  mt-10">
          
          <div className="text-4xl font-bold">
            Who We Are
          </div>

          <div className='text-xl text-red-600 mt-2'>
            With Fire, Or Not At All...
          </div>

          <div className='mt-10 text-lg leading-relaxed text-gray-500'>
            A content company established in 2014, comprised of a team of imaginative and deeply inspired people, 
            propelled by passion for smart solutions for smart brands and businesses.
          </div>

          <div className='mt-4 text-lg leading-relaxed text-gray-500'>
            We take a media-neutral, customer-centric approach to solving communications problems, 
            helping brands get the best fusion of tech and marketing they need in this fast-paced, trend-driven world.
          </div>

        </div>
      </div>




      {/* Image + Text Side-by-Side */}
      <div className='flex flex-row-reverse items-start justify-between px-25 gap-4  mt-12'>
        
        {/* Image */}
        <Image 
          src="/image/aboutus2.png"
          alt=""
          width={580}
          height={580}
          className="flex-shrink-0 rounded-[40px]"
        />

        {/* Text Section */}
        <div className="max-w-md mt-10">
          
          <div className="text-4xl font-bold">
            What We Do
          </div>

          <div className='text-lg text-red-600 mt-2'>
            We Develop Big Ideas That Sell
          </div>

          <div className='mt-10 text-lg leading-relaxed text-gray-500'>
            In this brave new world, businesses that want to survive and stay relevant in their respective markets have to be present in the lives of the customer at all times.
          </div>

          <div className='mt-4 text-lg leading-relaxed text-gray-500'>
            At MediaFlare, we have developed a simple, media-neutral approach that will handle all the planning, production, distribution, amplification and measurement of your content so you can continuously improve your results.
          </div>

        </div>
      </div>
      </div>
    </main>
  )
}

export default About
