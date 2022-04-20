import React, { useState } from 'react'
import './Navbar.css'
import { FaUserGraduate, FaHome, FaBriefcase, FaCommentDollar } from 'react-icons/fa';
import { RiFileListFill, RiMailAddFill } from 'react-icons/ri'
import { HiOutlineOfficeBuilding, HiOutlineMenu } from 'react-icons/hi'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'

const Navbar = () => {
  let [flag, setflag] = useState(false);
  const toggleFlag = () => {
    setflag(!flag)
  }
  const mobileMenu = [
    {  href: "#", text: "Home" },
    {  href: "#", text: "Experience" },
    {  href: "#", text: "Education" },
    {  href: "#", text: "Skills" },
    {  href: "#", text: "Projects" },
    {  href: "#", text: "Internships" },
    {  href: "#", text: "Contact Me" },
    { href: "mailto:kethansai77@gmail.com", text: "Hire Me" },
  ];
  const desktopMenu = [
    { href: "#", text: "Home", icon: <FaHome className='text-xl mt-2.5 mx-1' />},
    { href: "#", text: "Experience", icon: <FaBriefcase className='text-xl mt-2.5 mx-1' />},
    { href: "#", text: "Education", icon: <FaUserGraduate className='text-xl mt-2.5 mx-1' />},
    { href: "#", text: "Skills", icon: <AiFillSafetyCertificate className='text-xl mt-2.5 mx-1' /> },
    { href: "#", text: "Projects", icon: <RiFileListFill className='text-xl mt-2.5 mx-1' />},
    { href: "#", text: "Internships", icon: <HiOutlineOfficeBuilding className='text-xl mt-2.5 mx-1' />},
    { href: "#", text: "Contact Me", icon: <RiMailAddFill className='text-xl mt-2.5 mx-1' />},
    { href: "mailto:kethansai77@gmail.com", text: "Hire Me", icon: <FaCommentDollar className='text-xl mt-2.5 mx-1' />},
  ];
  return (
    <div>

      {/* Desktop Menu */}

      <div className='flex relative items-center justify-between uppercase card shadow-xl bg-gray-900 text-white py-4 md:py-3 px-12 md:px-12 leading-10'>
        <div className='Logo item text-4xl md:text-xl underline-offset-8 transition ease-in-out duration-200 font-bold 
              hover:text-cyan-300 hover:underline hover:-translate-y-1 hover:scale-110'>
            KSR
        </div>
        <ul className='hidden md:flex item-center justify-around'>
          {
            desktopMenu.map(item =>
              <li className='flex item mx-3 underline-offset-8 transition ease-in-out duration-200
                      hover:font-bold hover:text-cyan-300 hover:underline hover:-translate-y-1 hover:scale-110'>
                {item.icon}
                <a href={item.href}>{ item.text }</a>
              </li>
            )
          }
        </ul>
        <div className='md:hidden text-2xl'>
          <HiOutlineMenu className={flag === false ? 'block text-4xl' : 'hidden'} onClick={toggleFlag} />
          <ImCross className={flag === true ? 'block text-4xl' : 'hidden'} onClick={toggleFlag} />
        </div>
      </div>
      
      {/* Mobile Menu */}

      <div className={flag === true ? 'block md:hidden' : 'hidden md:hidden'}>
        <ul className='absolute flex-col uppercase items-center self-end py-8 space-y-6 font-bold bg-gray-900 text-white sm:w-auto
        sm:self-center text-3xl left-0 text-center right-0 drop-shadow-md'>
          {
            mobileMenu.map(item =>
              <li className='item underline-offset-4 font-bold text-cyan-300 hover:underline transition ease-in-out duration-200 hover:tracking-wide'>
                <a href={item.href} onClick={toggleFlag}>{item.text}</a></li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar