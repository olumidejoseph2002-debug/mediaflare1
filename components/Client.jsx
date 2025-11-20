import React from 'react'

const Client = () => {
  return (
    <main>
      <div className='bg-red-100 flex justify-center items-center p-1 mx-auto w-[180wpx] rounded-lg mt-6'>
        <div className='text-base text-red-700'>Our Client & Our Work</div>

      </div>

      <div className='flex text-xl items-center justify-center mt-4'>
        <div className='font-semibold'>We Are</div> <div className='text-gray-500 mx-2'>Stronger</div>

      </div>
      <div className="carousel carousel-center bg-gray-100 rounded-box w-full space-x-4 p-4">
        <div className="carousel-item flex flex-col client-carousel">
          <div>BBNaija</div>
          <img
            src="/image/client1.png"
            className="rounded-box" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>FMN Plc</div>
          <img
            src="/image/client2.png"
            className="rounded-box" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>GT Bank</div>
          <img
            src="/image/client3.png"
            className="rounded-box" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>MTN Foundation</div>
          <img
            src="/image/client4.png"
            className="rounded-box" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>KOBO 360</div>
          <img
            src="/image/client5.png"
            className="rounded-box" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>Golden Penny Foods</div>
          <img
            src="/image/client6.png"
            className="rounded-box" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>Ajinomoto</div>
          <img
            src="/image/client7.png"
            className="rounded-box" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>Lenovo</div>
          <img
            src="/image/client8.png"
            className="rounded-box" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>Bet9ja</div>
          <img
            src="/image/client9.png"
            className="rounded-box" />
        </div>
      </div>

    </main>
  )
}

export default Client