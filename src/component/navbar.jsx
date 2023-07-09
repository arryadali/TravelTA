import React from 'react'


const Navbar = () => {
  return (
    <div>
      <nav class="py-6 px-16 md:flex md:items-center md:justify-between font-[Poppins] container">
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
                <a href="#" class="hover:text-[#5082FE] duration-500">Home</a>
            </li>
            <li class="mx-4 my-6 md:my-0">
                <a href="#" class="hover:text-[#5082FE] duration-500">About</a>
            </li>
            <li class="mx-4 my-6 md:my-0">
                <a href="#" class="hover:text-[#5082FE] duration-500">Packages</a>
            </li>
            <li class="mx-4 my-6 md:my-0">
                <a href="#" class="hover:text-[#5082FE] duration-500">Places</a>
            </li>
            <li class="mx-4 my-6 md:my-0 xl:pr-[94px]">
                <a href="#" class="hover:text-[#5082FE] duration-500">Contact</a>
            </li>

            <span class="flex">
                <img src="../asset/user.png" alt="" />
                <div class="text-black font-semibold text-[18px] pl-[33px] lg:pt-1 xl:pt-3">Hello, Ateng</div>
            </span>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar;
