"use client"
import React, { useState } from 'react'
import { FaFacebookF,FaInstagram,FaYoutube,FaTwitter,FaRegWindowClose } from "react-icons/fa";
import { TbLetterPSmall, TbSquareRoundedLetterP } from "react-icons/tb";

const Header = () => {
  const [togglemenu, setTogglemenu] = useState(false)
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <nav className='bg-white flex shadow sticky top-0 z-10 justify-between px-5  py-3 '>
      <img className='w-24 md:w-32  object-contain' src="https://themedox.com/gerow/wp-content/themes/gerow/assets/img/logo/logo.png" alt="" />
<div className='md:flex justify-evenly items-center w-1/2 hidden '>
<div className="relative">
      <button
        id="dropdownHoverButton"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-gray-500   outline-none focus:text-blue-600 active:text-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Home 
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {/* Dropdown menu */}
      {isHovered && (
        <div id="dropdownHover" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44  absolute top-full mt-1">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:text-gray-600 text-gray-500">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:text-gray-600 text-gray-500">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:text-gray-600 text-gray-500">Earnings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:text-gray-600 text-gray-500">Sign out</a>
            </li>
          </ul>
        </div>
      )}
    </div>
    <button
        id="dropdownHoverButton"
        className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        About Us 
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
    <button
        id="dropdownHoverButton"
        className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Pages 
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <button
        id="dropdownHoverButton"
        className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Blog 
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
    <a className='text-gray-500 outline-none focus:text-blue-600 active:text-blue-600 cursor-pointer'>Contact</a>

</div>
<div className='flex md:w-1/4 w-20 justify-between items-center  '>
  <div className='md:flex hidden  justify-center border-r-2 border-gray-300 h-full pr-1'>
<button className='bg-blue-600  rounded-full px-3.5  mr-1   '>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>
</button>
<div className='flex flex-col justify-center  pr-1'>
<p className='text-gray-400'>Hot Line Number</p>
<p className='font-bold text-black'>+123 8989 444</p>
</div>
</div>
<button className='md:border-r-2 border-gray-300 h-full pr-3'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-gray-400 w-6 h-6  ">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</button>

<button onClick={()=>setTogglemenu(!togglemenu)} className='block md:hidden'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-blue-600 p-1 border-blue-600 border  rounded-sm w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>
<button onClick={()=>setTogglemenu(!togglemenu)} className='md:block hidden'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 hover:text-blue-600 text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
</button>

</div>
{
  togglemenu && <div className='bg-white w-1/2 md:w-1/4 md:h-full h-full rounded-md fixed top-0 right-0'>
    <div className='p-5'>
     <div className='flex justify-between px-2 pt-5'>
     <div className='border-b-2 border-blue-500 pb-5 '>
    <img className='w-24 md:w-32   object-contain' src="https://themedox.com/gerow/wp-content/themes/gerow/assets/img/logo/logo.png" alt="" />
    </div>
    <FaRegWindowClose className='text-blue-700 w-8 h-8 cursor-pointer' onClick={()=>setTogglemenu(!togglemenu)}/>
     </div>
    <div className='py-2 mt-10'>
      <p className='text-lg font-bold py-1 text-black'>Office Address</p>
      <p className='text-base font-medium py-1 md:w-[250px] w-200 text-gray-500'>123/A, Miranda City Likaoli
Prikano, Dope</p>
    </div>
    <div className='py-2'>
      <p className='text-lg font-bold py-1 text-black'>Phone Number</p>
      <p className='text-base font-medium py-1 w-[200px] text-gray-500'>+0989 7876 9865 9
+0989 7876 9865 9</p>
    </div>
    <div className='py-2'>
      <p className='text-lg font-bold py-1 text-black'>Email Address</p>
      <p className='text-base font-medium py-1 w-[250px] text-gray-500'>info@example.com
support@example.com

</p>
    </div>
    <div className='flex justify-evenly mt-10  '>
                <FaFacebookF className='w-8 h-8 text-blue-600 rounded-full'/>
                <FaTwitter className='w-8 h-8 text-blue-600 rounded-full'/>
                <FaInstagram className='w-8 h-8 text-blue-600 rounded-full'/>
                <TbSquareRoundedLetterP className='w-8 h-8 text-blue-600 rounded-full'/>
                <FaYoutube className='w-8 h-8 text-blue-600 rounded-full'/>
                </div>
    </div>

  </div>
}

    </nav>
  )
}

export default Header