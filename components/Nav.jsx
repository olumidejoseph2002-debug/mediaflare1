import React from 'react'
import Image from 'next/image'

import { FaArrowRightLong } from 'react-icons/fa6'
// import Link from 'next/link'

const Nav = () => {
  return (

    <div className="navbar bg-[#D9D9D9] flex justify-between w-full px-4 shadow-sm">
      <div className=" w-fit ">
        <a className="btn btn-ghost text-xl">
          <Image
            src="/icon/logo.svg"
            alt="Logo"
            width={150}
            height={50}
          />
        </a>
      </div>
      <div className=" gap-7 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='px-4'><a>Home</a></li>
          <li className='px-4'>
            <a>About</a>
          </li>
          <li className='px-4'><a>Service</a></li>
          <li className='px-4'><a>Team</a></li>
          <li className='px-4'><a>Work</a></li>
        </ul>
      </div>

      <div className=" gap-5 hidden lg:flex">
        <div className='bg-[#D42E22]  p-1 text-white px-2 flex items-center gap-2 rounded-md'>Contact Us <span>
          <FaArrowRightLong className='bg-white text-[#D42E22] p-1 rounded-sm' />
        </span>
        </div>
      </div>
      <div className=" flex lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-fit p-2 shadow">
            <li><a>Home</a></li>
            <li>
              <a>About</a>
            </li>
            <li><a>Service</a></li>
            <li><a>Team</a></li>
            <li><a>Work</a></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Nav
