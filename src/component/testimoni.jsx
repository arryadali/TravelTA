import React from 'react'

export default function testimoni() {
  return (
    <div>
      <div className='bg-[#5082FE] w-full h-96'>
        <div className='flex'>
          <img src="../asset/testi.png" alt=""  className='mx-5'/>
          <div className='ml-auto mx-5 my-6 flex flex-col'>
            <p className='font-bold text-5xl text-white'>Testimonials Travelta Customers</p>
            <div className='bg-white w-3/4 h-64 my-12 rounded-xl relative'>
              <img src="../asset/proftesti.png" alt="" className='absolute -top-12 left-4' />
              <div className='mt-12 mx-5'>
                <p className='font-bold text-2xl'>Jhone Lown</p>
                <div className='flex gap-2 mt-8'>
                  <img src="../asset/star1.png" alt="" />
                  <img src="../asset/star1.png" alt="" />
                  <img src="../asset/star1.png" alt="" />
                  <img src="../asset/star1.png" alt="" />
                  <img src="../asset/star2.png" alt="" />
                </div>
                <p className='text-gray-400 mt-8'>“A very pleasant experience, plus the service is very friendly, recommended for those who want to try!”</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
