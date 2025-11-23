import React from 'react'
import Image from 'next/image'

const Contacts = () => {
  return (
    <>
    <div className='mt-16 w-full px-36'>
      <div className='text-2xl'>
        Contact Us
        </div>
      


    <div className='flex w-full items-start  gap-5 mt-12 '>
          <div >
            <div className='text-gray-400 text-2xl'>
             Let&apos;s
              </div>

            <div className='mt-4 w-[250px] leading-loose'>
              We are always open to new opportunities and collaborative projects. For all enquiries,please get in touch.
            </div>

            <div className='mt-5 font-semibold'>
              info@mediaflareafrica.com
              </div>
            <div className='mt-5 font-semibold'>
              +234 806 705 6476
              </div>

            <div className='mt-10'>
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

    <div className='flex flex-col items-start ml-20 gap-6 '>
    <div className='text-red-400 text-xl '>
      Talk
    </div>
    <div className='w-[800px] h-[624px] bg-gray-300 rounded-2xl flex flex-col p-10 gap-4 '>

      <Image
      src="/image/message.png"
          alt=""
          width={426}
          height={44}
          className="flex-shrink-0 rounded-lg mt-2"
          />
      
      <div>Name</div>
      <div className='w-180 h-10 bg-white rounded-lg'></div>

      <div className='flex flex-row gap-6'>
      <div>
        Email
        <div className='w-87 h-10 bg-white rounded-lg mt-5'></div>
      </div>
      

      <div>
        Phone
        <div className='w-87 h-10 bg-white rounded-lg mt-5'></div>
        </div>
      
      </div>

      <div>Your message</div>
      <div className='w-180 h-40 bg-white rounded-lg'></div>

      <Image
      src="/image/send.png"
          alt=""
          width={113}
          height={48}
          className="flex-shrink-0 rounded-lg mt-6 mx-75"
    />
    
    </div>
    </div>
      </div>

    <div className=' w-full flex flex-col items-center text-center text-bold mt-20 mb-20'>
    <div className='font-semibold text-[30px]'>We do not tell you our story.</div>
    <div className='font-semibold text-[30px]'>We write it together.</div>
    <div className='text-[18px] text-[#808080] mt-6'>Partnering with us means a seat at the table where you will be heard.</div>
    <Image
      src="/image/Sproject.png"
          alt=""
          width={175}
          height={48}
          className="flex-shrink-0 rounded-lg mt-6"
    />
    </div>
     </div>
    </>
  )
}

export default Contacts