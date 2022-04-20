import React, { useState } from 'react'
import './Navbar.css'
import { FaUserGraduate, FaHome, FaBriefcase, FaCommentDollar } from 'react-icons/fa';
import { RiFileListFill, RiMailAddFill } from 'react-icons/ri'
import { HiOutlineOfficeBuilding, HiOutlineMenu } from 'react-icons/hi'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'

const Navbar = () => {
  let [flag, setflag] = useState(false);
  return (
    <div>
      <div className='flex relative items-center justify-between uppercase card shadow-xl bg-gray-900 text-white py-4 md:py-3 px-12 md:px-12 leading-10'>
        <div className='Logo item cursor-pointer  underline-offset-8 transition ease-in-out duration-200 font-bold 
              hover:text-cyan-300 hover:underline hover:-translate-y-1 hover:scale-110'>
            KSR
        </div>
        <ul className='hidden md:flex item-center justify-around'>
            <li className='flex item mx-3 cursor-pointer underline-offset-8 transition ease-in-out duration-200
                      hover:font-bold hover:text-cyan-300 hover:underline hover:-translate-y-1 hover:scale-110'>
                <FaHome className='text-xl mt-2.5 mx-1'/>
                <a href="#">Home</a>
            </li>
            <li className='flex item mx-3 cursor-pointer underline-offset-8 transition ease-in-out duration-200
                      hover:font-bold hover:text-cyan-300 hover:underline hover:-translate-y-1 hover:scale-110'>
              <FaBriefcase className='text-xl mt-2.5 mx-1'/>  
              <a href="#">Experience</a>
            </li>
            <li className='flex item mx-3 cursor-pointer underline-offset-8 transition ease-in-out duration-200
                      hover:font-bold hover:text-cyan-300 hover:underline hover:-translate-y-1 hover:scale-110'>
                <FaUserGraduate className='text-xl mt-2.5 mx-1' />
                <a href="#"> Education</a>
            </li>
            <li className='flex item mx-3 cursor-pointer underline-offset-8 transition ease-in-out duration-200
                      hover:font-bold hover:text-cyan-300 hover:underline hover:-translate-y-1 hover:scale-110'>
              <AiFillSafetyCertificate className='text-xl mt-2.5 mx-1' />  
              <a href="#">Skills</a>
            </li>
            <li className='flex item mx-3 cursor-pointer underline-offset-8 transition ease-in-out duration-200
                      hover:font-bold hover:text-cyan-300 hover:underline hover:-translate-y-1 hover:scale-110'>
              <RiFileListFill className='text-xl mt-2.5 mx-1'/>
                <a href="#">Projects</a>
            </li>
            <li className='flex item mx-3 cursor-pointer underline-offset-8 transition ease-in-out duration-200
                      hover:font-bold hover:text-cyan-300 hover:underline hover:-translate-y-1 hover:scale-110'>
              <HiOutlineOfficeBuilding className='text-xl mt-2.5 mx-1' />
              <a href="#">Internships</a>
            </li>
            <li className='flex item mx-3 cursor-pointer underline-offset-8 transition ease-in-out duration-200
                      hover:font-bold hover:text-cyan-300 hover:underline hover:-translate-y-1 hover:scale-110'>
              <RiMailAddFill className='text-xl mt-2.5 mx-1' />
              <a href="#">Contact Me</a>
            </li>
            <li className='flex item mx-3 cursor-pointer underline-offset-8 transition ease-in-out duration-200
                      hover:font-bold hover:text-cyan-300 hover:underline hover:-translate-y-1 hover:scale-110'>
              <FaCommentDollar className='text-xl mt-2.5 mx-1' />
              <a href="#">Hire Me</a>
            </li>
        </ul>
        <div className='md:hidden text-2xl'>
          <HiOutlineMenu className={flag === false ? 'block text-4xl' : 'hidden'} onClick={() => setflag(!flag)} />
          <ImCross className={flag === true ? 'block text-4xl' : 'hidden'} onClick={() => flag = setflag(!flag)} />
        </div>
      </div>
      <div className={flag === true ? 'block md:hidden' : 'hidden md:hidden'}>
        <ul className='absolute flex-col items-center self-end py-8 space-y-6 font-bold bg-gray-900 text-white sm:w-auto
        sm:self-center left-0 text-center right-0 drop-shadow-md'>
          <li className='item cursor-pointer underline-offset-4 font-bold text-cyan-300 underline transition ease-in-out duration-200 hover:tracking-wide'>
            <a href="#">HOME</a></li>
          <li><a href="#">HOME</a></li>
          <li><a href="#">HOME</a></li>
          <li><a href="#">HOME</a></li>
          <li><a href="#">HOME</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar