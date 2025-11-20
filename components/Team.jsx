import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <main>
      <div className='bg-red-100 flex justify-center items-center p-1 mx-auto w-[120px] rounded-lg mt-6'>
        <div className='text-base text-red-700'>Our Team</div>

      </div>

      <div className='flex text-xl items-center justify-center mt-4'>
       <div className='font-semibold'>We Are</div> <div className='text-gray-500 mx-2'>Stronger</div>
        </div>

      
      
  <div className='flex w-full items-start justify-start gap-8 mt-12 pl-20 mr-0'>
    <div>
      {/* Image1 */}
        <Image 
          src="/image/team-01.png"
          alt=""
          width={370}
          height={550}
          className="flex-shrink-0 rounded-3xl"
        />
          </div>

          <div>
      {/* Image2 */}
        <Image 
          src="/image/team-02.png"
          alt=""
          width={370}
          height={550}
          className="flex-shrink-0 rounded-3xl"
        />
          </div>

          <div>
      {/* Image3 */}
        <Image 
          src="/image/team-03.png"
          alt=""
          width={370}
          height={550}
          className="flex-shrink-0 rounded-3xl"
        />
          </div>

          <div>
      {/* Image4 */}
        <Image 
          src="/image/team-04.png"
          alt=""
          width={370}
          height={550}
          className="flex-shrink-0 rounded-3xl"
        />
          </div>
        </div>
    </main>
  )
}

export default Team