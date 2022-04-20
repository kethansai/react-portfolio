import React from 'react'
import { ImFacebook, ImWhatsapp, ImGithub } from 'react-icons/im'

const Footer = () => {
  return (
      <div className='bg-gray-800 py-3 px-5 text-center text-white'>
          <ul className='w-half m-auto my-3 flex items-center justify-center'>
            <li className='mx-3'><a href='#'><ImFacebook className='text-3xl hover:text-sky-500'/></a></li>
            <li className='mx-3'><a href='#'><ImWhatsapp className='text-3xl hover:text-green-300'/></a></li>
            <li className='mx-3'><a href='#'><ImGithub className='text-3xl hover:text-cyan-300'/></a></li>
            <li className='mx-3'><a href='#'><ImGithub className='text-3xl hover:text-cyan-300'/></a></li>
          </ul>
          Copyright &copy; 2020 | <a href="#" className='hover:text-sky-500'>Portfolio Kethan</a>
      </div>
  )
}

export default Footer