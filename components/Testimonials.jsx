import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  const testimony = [
    {
      id: 1,
      image: "/icon/fmn2.svg",
      name: "Babatunde Adenaike",
      company:"Golden Penny Foods",
      content: `"Needed a creative team that would help us connect with the fast-growing digital audience and make our social media channels more engaging. The Mediaflare team delivered for us time and again."`
    }, {
      id: 2,
      image: "/icon/bet2.svg",
      name: "Omolola Oronti",
      company: "Bet9ja",
      content: `"We don't see MediaFlare as an agency in the old school sense. They're more of our solutions partners, always looking to untangle the next challenge and ready to find a fix for any of our marketing challenges."`
    }, {
      id: 3,
      image: "/icon/kobo2.svg",
      name: "Shade Omoarukhe",
      company: "KOBO 360",
      content: `"Very fun team! Easy to work with and it matters me that they deliver on KPI&apos;s, on time and on budget... and that they serve pancakes in their office."`
    }
  ]
  return (
    
      <div className='px-20 w-full mt-10'>
        <div className='font-light text-[20px] text-[#333333] w-[116px] h-[22px]'>
          Testimonials
        </div>

        <div className='mt-3 font-medium text-[30px] text-[#000000]'>
          Don&apos;t Take our Words From It!
        </div>
        <div className='font-medium text-[30px] text-[#000000]'>
          Hear It From Out Partners.
        </div>



        <div className='w-full carousel gap-6 carousel-center px-20'>
          {testimony.map((test) => (
            <div key={test.id} className='mt-12 border max-w-[400px]  grid grid-cols-1  carousel-item   client-carousel border-gray-300 rounded-lg p-8 gap-6'>
              <div className='flex gap-6 items-center '>
                <div><Image src={test.image} alt={`${test.company} icon`} width={35} height={28} /></div>
                <div>
                  <div className='leading-tight font-bold '>{test.name}</div>
                  <div>{test.company}</div>
                </div>
              </div>
              <div>
                {test.content}
              </div>
            </div>

          ))}
        </div>






      </div>
    
  )
}

export default Testimonials