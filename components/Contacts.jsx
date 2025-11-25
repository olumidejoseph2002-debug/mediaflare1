"use client"

import React from 'react'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'

const Contacts = () => {
  return (
    <>
      <div className='mt-10 w-full px-10 lg:px-20'>
        <div className=' font-light text-[24px] text-[#141414]'>
          Contact Us
        </div>



        <div className=' flex flex-col lg:flex-row  items-start  mt-12 '>

          <div className='lg:w-2/6 ' >
            <div className='text-[#808080] text-[22px]  font-medium'>
              <p>Let&apos;s</p>
            </div>

            <div className='mt-4 leading-loose text-[16px] text-[#141414]'>
              We are always open to new opportunities and collaborative projects. For all enquiries,please get in touch.
            </div>

            <div className='mt-5 font-medium text-[16px] text-[#141414]'>
              info@mediaflareafrica.com
            </div>
            <div className='mt-5 font-medium text-[16px] text-[#141414]'>
              +234 806 705 6476
            </div>

            <div className='mt-10 font-medium text-[16px] text-[#808080]'>
              Follow
            </div>
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
          <div className=' lg:w-4/6 '>
            <div className='text-red-400 text-[22px] font-medium'>
              Talk
            </div>


            <div className="mx-auto p-6 bg-gray-200 rounded-lg">

              <div className="mb-4 flex items-center gap-2 border border-red-300 bg-red-100 text-red-700 px-3 py-1 lg:py-2 rounded">
                <span className="text-sm">⚠️ The fastest way to reach us is to <a href="#" className="underline">send us a message</a>.</span>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                <div>
                  <label className="block text-gray-700 text-sm mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-1 lg:py-2 outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-gray-700 text-sm mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded px-3 py-1 lg:py-2 outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </div>


                  <div>
                    <label className="block text-gray-700 text-sm mb-1">Phone</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-1 lg:py-2 outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </div>
                </div>


                <div>
                  <label className="block text-gray-700 text-sm mb-1">Your message</label>
                  <textarea
                    rows="6"
                    className="w-full border border-gray-300 rounded px-3 py-1 lg:py-2 outline-none focus:ring-2 focus:ring-red-400"
                  ></textarea>
                </div>


                <button
                  type="submit"
                  className="flex items-center gap-2 bg-red-500 text-white px-6 py-1 lg:py-2 rounded shadow hover:bg-red-600"
                >
                  Send →
                </button>
              </form>
            </div>
          </div>




        </div>

        <div className=' w-full flex flex-col items-center text-center font-bold mt-20 mb-20'>
          <div className='font-semibold text-[30px]'>We do not tell you our story.</div>
          <div className='font-semibold text-[30px]'>We write it together.</div>
          <div className='text-[18px] text-[#808080] mt-6'>Partnering with us means a seat at the table where you will be heard.</div>
          <div className='bg-[#D42E22] text-white font-normal  p-1 px-2 flex flex-row-reverse items-center gap-2 rounded-md mt-10'>Start a Project <span>
            <FaArrowRightLong className='bg-white text-[#D42E22] p-1 rounded-sm' /></span></div>
        </div>
      </div>
    </>
  )
}

export default Contacts