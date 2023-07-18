import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className='flex relative '>
        
        <div className='w-[50%] flex flex-col justify-center'>
            {/* Tulisan */}
            <div className='mx-16'>
              <div className='font-bold text-[60px] py-8 uppercase w-full'>
                  <p className=''>find information 
                  <pre className='font-[Poppins]'>your vacation</pre>
                  <pre className='font-[Poppins]'>with us!</pre>
                  </p>
              </div>

              <div className='font-[Poppins] text-[#7A7A7A] font-light text-[24px]'>
                  <p>
                  Exploring the world is an extraordinary experience.
                  <pre className='font-[Poppins]'>We are ready to provide everything you need.</pre>
                  </p>
              </div>
            </div>
            <div className='absolute -right-52 top-0'>
                <img src="../asset/landing.png" alt="" />
            </div>
            {/* Tulisan */}

            {/* Search Button */}
           
            {/* Search Button */}

        </div>
      </div>
      <div className='bg-[#DEE9FF] w-full h-auto p-5 rounded-3xl my-28 ml-12'>
                <section className='w-full h-10 flex items-center'>

                <span className='w-10 h-full flex items-center'>
                    <i class="uil uil-search text-xl"></i>
                </span>
                
                <input 
                type="text" 
                className='w-full h-full font-medium md:pl-2 focus:outline-none bg-[#DEE9FF]'
                placeholder='Search Your Vocation Here!'
                />

                <button className='w-28 h-full bg-blue-500 flex justify-center items-center rounded-2xl text-white font-medium font-[Poppins]'>
                    Search
                </button>
                </section>
            </div>
    </div>
  )
}

export default Hero;
