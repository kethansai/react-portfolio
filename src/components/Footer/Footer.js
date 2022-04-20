import React from 'react'
import { ImFacebook, ImWhatsapp, ImGithub, ImPhone } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'
const Footer = () => {
  return (
    <div className='bg-gray-800 py-3 px-5 text-center text-white'>
      <ul className='w-half m-auto my-3 flex items-center justify-center'>
        <li className='mx-3'>
          <a target="_blank" href='https://www.facebook.com/kethan.sai.735/'>
            <ImFacebook className='text-3xl hover:text-sky-500 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
          </a>
        </li>
        <li className='mx-3'>
          <a target="_blank" href='https://wa.me/917989216155?text=Hi Kethan Vemuri'>
            <ImWhatsapp className='text-3xl hover:text-green-500 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
          </a>
        </li>
        <li className='mx-3'>
          <a target="_blank" href='https://github.com/kethansai'>
            <ImGithub className='text-3xl transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
          </a>
        </li>
        <li className='mx-3'>
          <a target="_blank" href='mailto:kethansai77@gmail.com'>
            <SiGmail className='text-3xl hover:text-red-500 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
          </a>
        </li>
        <li className='mx-3'>
          <a target="_blank" href='tel:+917989216155'>
            <ImPhone className='text-3xl hover:text-cyan-500 transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110' />
          </a>
        </li>
      </ul>
      Copyright &copy; 2020 | <a href="https://kethansai.github.io/portfolio/" className='hover:text-sky-500'>Portfolio Kethan Vemuri</a>
    </div>
  )
}

export default Footer