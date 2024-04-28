import React from 'react'

const Landing = () => {
  return (
    <div className='md:px-20 px-5 pt-5 shadow pb-1 sm:px-0'>
      <div className='flex md:flex-row flex-col justify-around items-center h-full px-5'>
        <div className='flex items-center flex-col justify-center py-10'>
          <p className='text-blue-600 rounded-xl bg-blue-100 p-1 px-5 w-fit py-2 font-semibold'>WE ARE EXPERT IN THIS FIELD</p>
          <h1 className='font-bold text-black md:text-5xl text-3xl text-center lg:w-[450px] sm:w-[100%] py-3'>Get a Smart Way  For Your Busines</h1>
          <p className='text-gray-400 text-center text-lg md:w-[500px] w-[80%] py-2'>
            Agilos helps you to convert your data into a strategic asset and
            top-notch business insights minddestmentor.
          </p>

          <div className='flex items-center justify-evenly md:justify-between md:w-[400px] lg:w-[90%] sm:w-[100%] py-2'>
            <div className='flex justify-between px-2 items-center  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <button type="button" className="inline-flex items-center px-2 py-1 my-2 text-sm font-medium text-center text-white">
                OUR SERVICES
              </button>
              <svg className="w-8 h-8  bg-blue-800 text-white rounded-full p-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10c text-blue-600">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
            </svg>
            <a href="#" className='text-blue-900 border-b-2 mx -1 border-blue-900 '>Watch The Video</a>
          </div>
        </div>
        <div>
          <img src="https://themedox.com/gerow/wp-content/uploads/2023/08/h2_banner_img.png" className='md:h-[493px] h-full mt-10 md:mt-0  md:w-[350px] w-full   ' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Landing