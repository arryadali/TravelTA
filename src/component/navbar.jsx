import React from 'react'

const Navbar = () => {
  return (
    <div>
      <img src="../asset/bg.png" alt="" className="absolute w-full h-full mx-56"/>
       <nav className="py-6 px-16 md:flex md:items-center md:justify-between font-[Poppins] container relative">
        <div class="flex justify-between items-center">
            <span class="cursor-pointer">
                <img src="../asset/logo.png" alt="" />
            </span>

            <span class="text-3xl cursor-pointer mx-2 md:hidden block">
                <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
            </span>
        </div>

        <ul class="md:flex md:items-center font-semibold text-[20px] text-white z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top[-400px] transition-all ease-in duration-500">
            <li class="mx-4 my-6 md:my-0">
                {/* <Link to={"/"}>Home</Link> */}
                Home
            </li>
            <li class="mx-4 my-6 md:my-0">
                {/* <Link to={"/"}>About</Link> */}
                About
            </li>
            <li class="mx-4 my-6 md:my-0">
                {/* <Link to={"/"}>Packages</Link> */}
                Packages
            </li>
            <li class="mx-4 my-6 md:my-0">
                {/* <Link to={"/"}>Places</Link> */}
                Places
            </li>
            <li class="mx-4 my-6 md:my-0 xl:pr-[94px]">
                {/* <Link to={"/"}>Contack</Link> */}
                Contack
            </li>

            <span class="flex">
                <img src="../asset/user.png" alt="" />
                <div class="text-black font-semibold text-[18px] pl-[33px] lg:pt-1 xl:pt-3">Hello, Ateng</div>
            </span>
        </ul>

      </nav>
      <div className='flex px-9 relative '>

        <div className='w-[50%] flex flex-col justify-center items-center'>
          <div className='font-bold text-[60px] py-8 uppercase'>
            <p className=''>find information 
            <pre className='font-[Poppins]'>your vacation</pre>
            <pre className='font-[Poppins]'>with us!</pre>
            </p>
          </div>

          <div className='font-[Poppins]  text-[#7A7A7A] font-light text-[24px]'>
            <p>
            Exploring the world is an extraordinary experience.
            <pre className='font-[Poppins]'>We are ready to provide everything you need.</pre>
            </p>
          </div>

          <div className='ml-16 py-8 flex-col justify-center items-center'>
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

export default Navbar;
