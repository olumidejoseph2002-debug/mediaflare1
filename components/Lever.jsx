import React from 'react'
import Image from 'next/image'

const Lever = () => {
  return (
    <main className="w-full bg-red-100  ">
      {/* Text Section */}
      <div className=" w-full h-[141px]">
        <p className="text-[22px] text-center text-[#141414] whitespace-nowrap mt-5">
          Trusted by <span className="text-[#808080]">Africa's</span> leading companies.
        </p>
        {/* Images Section */}
        <div className="flex flex-wrap justify-evenly items-center w-full px-10 mt-6">
          <Image
            src="/icon/gtbank.svg"
            alt="GTBank"
            width={25}
            height={28}
            className="flex-shrink-0"
          />
          <Image
            src="/icon/mtnn.svg"
            alt="MTN"
            width={50}
            height={25}
            className="flex-shrink-0"
          />
          <Image
            src="/icon/fmn.svg"
            alt="FMN"
            width={36}
            height={28}
            className="flex-shrink-0"
          />
          <Image
            src="/icon/bet.svg"
            alt="Bet"
            width={60}
            height={25}
            className="flex-shrink-0"
          />
          <Image
            src="/icon/kobo.svg"
            alt="Kobo"
            width={75}
            height={25}
            className="flex-shrink-0"
          />
        </div>
      </div>


    </main>
  )
}

export default Lever
