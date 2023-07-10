import React from 'react'

const TopDestination = () => {
  return (
    <div className='container'>
      <div className='w-[91%] h-auto py-10 m-auto'>
        <div className='text-center mb-8'>
            <div className='mb-8'>
                <h1 className='font-[Poppins] font-bold text-[60px]'>Top Destination</h1>
                <p className='font-[Poppins] font-light text-[24px]'>Exploring the world is an extraordinary experience</p>
            </div>

            <div className='flex gap-3 justify-center '>
                <p className='w-36 h-auto p-2 bg-[#5082FE] text-[17px] font-bold font-[Poppins] text-white rounded-full hover:bg-[#7495E8]'>Bali</p>
                <p className='w-36 h-auto p-2 bg-[#5082FE] text-[17px] font-bold font-[Poppins] text-white rounded-full hover:bg-[#7495E8]'>Jawa Timur</p>
                <p className='w-36 h-auto p-2 bg-[#5082FE] text-[17px] font-bold font-[Poppins] text-white rounded-full hover:bg-[#7495E8]'>Kalimantan</p>
                <p className='w-36 h-auto p-2 bg-[#5082FE] text-[17px] font-bold font-[Poppins] text-white rounded-full hover:bg-[#7495E8]'>Bandung</p>
                <p className='w-36 h-auto p-2 bg-[#5082FE] text-[17px] font-bold font-[Poppins] text-white rounded-full hover:bg-[#7495E8]'>Jakarta</p>
            </div>
        </div>

        <div className='flex '>
            <div className='w-4/12'>
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-center'>
                        <img src="../asset/cardBromo.png" alt="" width={379} className='h-[231px]'/>
                    </div>
                    <div className='flex justify-center'>
                        <img src="../asset/cardBromo.png" alt="" width={379} className='h-[231px]'/>
                    </div>
                </div>
            </div>

            <div className='w-4/12 flex justify-center'>
                <img src="../asset/cardKalimanjaro.png" alt="" width={331} className='h-[483px]'/>
            </div>

            <div className='w-4/12'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <img src="../asset/cardBromo.png" alt="" height={505} className='h-[231px]'/>
                    </div>
                    <div className='flex gap-5'>
                        <div>
                            <img src="../asset/cardBromo.png" alt="" width={239} className='h-[231px]'/>
                        </div>
                        <div>
                            <img src="../asset/cardBromo.png" alt="" width={239} className='h-[231px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopDestination;
