import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#5082FE] w-full h-auto relative container'>
        <div className='flex flex-col'>
          <div className='w-[91%] m-auto py-9'>
            <p className='font-extrabold text-[64px] text-white font-[Poppins]'>We are ready to 
              <pre className='font-extrabold text-[64px] text-white font-[Poppins]'>provide the best</pre> 
              <pre className='font-extrabold text-[64px] text-white font-[Poppins]'>trip for you</pre>
            </p>
            
            <div className='w-[17%] mt-6 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center p-5 h-16'>
              <button className='font-medium text-[18px] font-[Poppins]'>Contact Now</button>
              <span>
                <i class="uil uil-arrow-circle-right text-3xl items-end"></i>
              </span>
            </div>
          </div>
        </div>
        <div>
          <img src="../asset/bali.png" alt="" className='absolute right-0 top-1'/>
        </div>
    </div>
  )
}

export default Contact;
