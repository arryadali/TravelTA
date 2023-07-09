import React from 'react'

function Home() {
  return (
    <div>
      <div className='flex px-16'>

        <div className='w-[50%]'>
          <div className='font-bold text-[60px] pt-32 uppercase'>
            <p className=''>find information 
            <pre className='font-[Poppins]'>your vacation</pre>
            <pre className='font-[Poppins]'>with us!</pre>
            </p>
          </div>

          <div className='font-[Poppins] pt-6 text-[#7A7A7A] font-light text-[24px]'>
            <p>
            Exploring the world is an extraordinary experience.
            <pre className='font-[Poppins]'>We're here to help you plan</pre>
            <pre className='font-[Poppins]'>your unforgettable adventure by providing</pre>
            <pre className='font-[Poppins]'>the latest and complete travel information.</pre>
            <pre className='font-[Poppins]'>We are ready to provide everything you need.</pre>
            </p>
          </div>

          <div className='pt-28'>
            <input 
            type="text" 
            placeholder='Search Information Your Vocation!'
            className='bg-[#DEE9FF] w-[41rem] h-[4rem] rounded-[15px] px-6 '
            
            />
          </div>
        </div>

        <div className=''>
          <img src="../asset/landing.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home