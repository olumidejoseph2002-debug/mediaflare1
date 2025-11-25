import React from 'react'

const Client = () => {
  return (
    <main className='w-full mx-auto mt-10'>
      <div className='bg-[#ffa07a3c] flex justify-center items-center p-1 px-3 mx-auto w-fit h-[29px] rounded-md '>
        <div className='text-[16px] text-[#D42E22]'>Our Client & Our Work</div>

      </div>

      <div className='flex items-center justify-center my-6'>
        <div className='font-medium text-[22px] text-[#141414]'>We Are</div> <div className='text-[#808080] mx-2 font-medium text-[22px]'>Stronger</div>

      </div>
      <div className="carousel carousel-center bg-gray-100 rounded-box font-medium text-[20px] text-[#141414]  w-full space-x-4 p-4">
        <div className="carousel-item flex flex-col  client-carousel">
          <div>BBNaija</div>
          <img
            src="/image/client1.png"
            className="rounded-box mt-4" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>FMN Plc</div>
          <img
            src="/image/client2.png"
            className="rounded-box mt-4" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>GT Bank</div>
          <img
            src="/image/client3.png"
            className="rounded-box mt-4" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>MTN Foundation</div>
          <img
            src="/image/client4.png"
            className="rounded-box mt-4" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>KOBO 360</div>
          <img
            src="/image/client5.png"
            className="rounded-box mt-4" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>Golden Penny Foods</div>
          <img
            src="/image/client6.png"
            className="rounded-box mt-4" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>Ajinomoto</div>
          <img
            src="/image/client7.png"
            className="rounded-box mt-4" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>Lenovo</div>
          <img
            src="/image/client8.png"
            className="rounded-box mt-4" />
        </div>
        <div className="carousel-item flex flex-col client-carousel">
          <div>Bet9ja</div>
          <img
            src="/image/client9.png"
            className="rounded-box mt-4" />
        </div>
      </div>

    </main>
  )
}

export default Client