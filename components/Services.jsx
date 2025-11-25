import React from 'react'
import Image from 'next/image'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '/icon/firsticon.svg',
      title: 'MEDIA + MARKETING',
      description:
        'We deliver the right communication at the right time, on the right device using data-driven insights.',
        color:'#0077FF'
    },
    {
      id: 2,
      icon: '/icon/secondicon.svg',
      title: 'CONTENT MARKETING',
      description:
        'We create effective communications for our clients so they can get on with running their business.',
        color:'#FF6F61'
    },
    {
      id: 3,
      icon: '/icon/thirdicon.svg',
      title: 'EXPERIENTIAL MARKETING',
      description:
        'We execute street teams, pop-up events, mobile tours, trade shows, music festivals and more.',
        color:'#8A2BE2'
    },
    {
      id: 4,
      icon: '/icon/fouricon.svg',
      title: 'BRAND MANAGEMENT',
      description:
        'Our brand management services safeguard investments in your brand so it continues to provide lasting value.',
        color:'#1C1F33'
    },
    {
      id: 5,
      icon: '/icon/fiveicon.svg',
      title: 'VIDEO PRODUCTION',
      description:
        'Steal the eyes of your prospects. We create TV commercials contents, voxpops and more.',
        color:'#FF3B30'
    },
    {
      id: 6,
      icon: '/icon/sixicon.svg',
      title: 'SOCIAL MEDIA MANAGEMENT',
      description:
        'We develop social strategy and create your daily activity to boost your social media presence.',
        color:'#00BFFF'
    },
    {
      id: 7,
      icon: '/icon/sevenicon.svg',
      title: 'CONTENT PROMOTION',
      description:
        'We help you identify distribution outlets with the greatest return to save time and budget.',
        color:'#FFC107'
    },
    {
      id: 8,
      icon: '/icon/eighticon.svg',
      title: 'CONTENT OPTIMIZATION',
      description:
        'We help brands increase visibility and conversions using keyword research and behaviour-informed strategy.',
        color:'#00C853'
    },
  ]

  return (
    <main className='mt-10' >
      <div className="w-full px-20">
        <div className="bg-[#ffa07a3c] flex justify-center items-center p-1 mx-auto w-[120px] rounded-lg mt-6">
          <div className="text-base text-[#D42E22]">Our Services</div>
        </div>

        <div className="flex text-[22px] items-center justify-center mt-4">
          <div className="font-medium text-[#141414]">Design Your</div>
          <div className="mx-2 font-medium text-[#808080]">Presence</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-4">
          {services.map((s) => (
            <article key={s.id} className="flex flex-col gap-4 items-center">
              <div className="w-[56px] h-[56px]  rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: s.color,
                boxShadow: `0 0 21px 0 ${s.color}` }}>
                <Image src={s.icon} alt={`${s.title} icon`} width={28} height={28} />
              </div>

              <div>
                <h3 className=" text-center text-[16px] font-semibold">{s.title}</h3>
                <p className="text-sm text-[16px] text-center text-[#96979B] mt-4">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </main>
  )
}

export default Services